# 207. Course Schedule

https://leetcode.com/problems/course-schedule/

There are a total of `numCourses` courses you have to take, labeled from `0 to numCourses-1`.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: `[0, 1]`. Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:
```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
```

Example 2:
```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
```

Constraints:
- The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
- You may assume that there are no duplicate edges in the input prerequisites.
-  `1 <= numCourses <= 10^5`

## Better Example

The problem description is very minimal in describing the inputs. Here’s another example:

```
numCourses: 6
prerequisites:
[ [1, 0], [2, 1], [3, 1], [4, 3], [5, 3] ]

Visualized:
0 --> 1 --> 2
      |
      ˅
5 <-- 3 --> 4
```

## Solution

There is little to be said here about any intuition I might have had. This is a clear example of topological sort. While I am not an expert on the matter, here is a basic idea of how it goes:

### Build the Graph
Take our example from above and look at the connections between the nodes.

We can express this graph using an array:

```
[ [ 1 ], [2, 3], [ ], [4, 5], [ ], [ ] ]
    0       1     2      3     4    5
```

So node `0` connects to `[1]`, node 3 connects to `[4, 5]`, etc.

### Calculate the Ranks (Degrees)

Now lets consider for each node how many other nodes it’s dependent on:
```
 [ 0, 1, 1, 1, 1, 1 ]
   0. 1. 2. 3. 4. 5
```

Only node `0` doesn’t depend on anything, while all the other nodes depend at least one more node.

### Pop the Dependencies

Create a queue that will initially have all nodes with a rank of `0` inside of it. (If no such nodes exist initially, then we have a cyclic graph where it’s not possible to complete all classes.)

For each thing on the stack:
- Pop it
- Increment a counter of popped nodes
- Decrease the rank of every node that depended on the popped node by 1.
- Add all new nodes with rank of `0` to the queue.

If at the end of this process, the counter is equal to the total number of nodes, then we have successfully traversed the entire graph and discovered no cycles.

As you might have noticed, this is more or less some variation of breadth-first-search in a directed graph.

For practice, also observe this case in contrast to the previous one
```
numCourses: 2
prerequisites:
[ [1, 0], [2, 1], [3, 1], [4, 3], [5, 3], [0, 5] ]

Visualized:
0 --> 1 --> 2
˄     |
|     ˅
5 <-- 3 --> 4
```

### Complexity

- Time complexity: `O(E + V)` where `V` is the number of courses, and `E` is the number of dependencies.
- Space complexity: `O(E + V)` (because of the graph size)
