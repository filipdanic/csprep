# 253. Meeting Rooms II

https://leetcode.com/problems/meeting-rooms-ii/

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:
```
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
```

Example 2:
```
Input: [[7,10],[2,4]]
Output: 1
```

## Solution

The intuition behind this problem for me is to think of these intervals as events. And once we properly sort them, we only need a counter and one storage variable:
- The counter increments at each `start` and decrements at each `end`. It will start a 0 and end at 0, but…
- At some point from `1 to n` it will reach a maximum, and we use `maxRoomsNeeded` to record the maximum `counter` found.

So for example #1:
```
initial state => counter = 0, maxRoomsNeeded = 0
{ value: 0, type: 'start' }, counter = 1, maxRoomsNeeded = 1
{ value: 5, type: 'start' }, counter = 2, maxRoomsNeeded = 2
{ value: 10, type: 'end' }, counter = 1, maxRoomsNeeded = 2
{ value: 15, type: 'start' }, counter = 2, maxRoomsNeeded = 2
{ value: 20, type: 'end' }, counter = 1, maxRoomsNeeded = 2
{ value: 30, type: 'end' }, counter = 0, maxRoomsNeeded = 2
```

### Time and Space Complexity

Just like the popular priority queue solution, this algorithm it bound by the `sort` method and thus will be `~O(n log n)`.

For space, it’s `O(n)` as we construct a new sorted array. The priority queue also has a `O(n)` space complexity for its worst case.

But it is worth noting that on average, the priority queue will take up less space.
