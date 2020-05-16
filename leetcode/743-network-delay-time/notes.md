# 743. Network Delay Time

https://leetcode.com/problems/network-delay-time/

There are `N` network nodes, labelled `1 to N`.

Given times, a list of travel times as directed edges `times[i] = (u, v, w)`, where `u` is the source node, `v` is the target node, and `w` is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node `K`. How long will it take for all nodes to receive the signal? If it is impossible, return `-1`.

Example:
```
Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
Output: 2
```

Example, visualized:
```
(1) <-[1]- (2) -[1]-> (3) -[1]-> (4)
```

Note:
- N will be in the range `[1, 100]`.
- K will be in the range `[1, N]`.
- The length of times will be in the range `[1, 6000]`.
- All edges `times[i] = (u, v, w)` will have `1 <= u`, `v <= N` and `0 <= w <= 100`.

## Additional Example

The provided example on LC is very bare-bones and doesn’t make it immediately obvious that there can be multiple paths to the same node – of which we have to find the minimal.

**Extra example:
```
Input: times = [
    [2, 1, 1], [2, 3, 1], [3, 4, 1], [1, 6, 200], [4, 5, 1], [5, 6, 1]
], N = 4, K = 2
Output: 4
```

Visualized:
```
(1) <-[1]- (2) -[1]-> (3) -[1]-> (4) -[1] -> (5) -[1]-> (6)
 ˅                                                       ˄
 | - - - - - - - - - - - - -[200]- - - - - - - - - - - - |
```

So the shortest path to node 6 is through `2 => 3 => 4 => 5 => 6`, but a naive algorithm might be too greedy and take the expensive, direct route from `2 => 1 => 6`.

## Solution

I ended up using the simple, and elegant Bellman Ford Algorithm that fits great here. It’s exactly what it was designed to do and I highly recommend you check it out.

### Time & Space Complexity

The time complexity of the algorithm is not fantastic, it’s `O(V * E)` or more specifically for this problem `O(N * length(times))`.

Since we know from the problem description that `length(times) >> N` we know that in this specific case our worst case is less than `O(V^2)`.

For space complexity, it’s simply `O(N)` for the costs array.

### Dijkstra's Algorithm (with Heap)

Implementing Dijkstra's algorithm with a heap would yield much better time complexity of `O(V + E) log(V)`. I don’t really know how to implement it without looking into it deeper, so I might revisit this problem later.
