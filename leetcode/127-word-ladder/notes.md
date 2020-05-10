# 127. Word Ladder

https://leetcode.com/problems/word-ladder/

Given two words (`beginWord` and `endWord`), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
- Only one letter can be changed at a time.
- Each transformed word must exist in the word list.

Note:
- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume beginWord and endWord are non-empty and are not the same.

Example 1:
```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5
Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
```

Example 2:
```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```

## Also Consider These Cases

Shortest transformation of `beginWord -> endWord`:
```
Input:
beginWord = hog
endWord = cog
wordList = ['cog']
Output: 2
```

No transformation possible:
```
Input:
beginWord = hot
endWord = dog
wordList = ['hot', 'dog']
Output: 0
```

## BFS (Possibly Brute Force)

My current take on this problem needs further refinement.

The approach is to construct a map of possible transformations between the provided words, then use Breadth-first Search to go between them until we find the shortest transformation or discover that it is not possible to transform any further.

So for the first example, we construct this `Map`:
```
  Map {
    'hot' => [ 'dot', 'lot' ],
    'dot' => [ 'hot', 'dog', 'lot' ],
    'dog' => [ 'dot', 'log', 'cog' ],
    'lot' => [ 'hot', 'dot', 'log' ],
    'log' => [ 'dog', 'lot', 'cog' ],
    'cog' => [ 'dog', 'log' ]
  }
```

Then we start the queue with all the word that can be transformed directly from the `beginWord (hit)`, which will only be `['hot']`.

Whe then keep adding things to the queue, but use the set `checkedWords` to avoid cycles – so we never check for the same word more than once.

### Code Elegance and Edge Cases

The current solution accounts for several “edge cases” that slip through the main algorithm. Accounting for one or two edge cases is fine, but when there’s so many of them it’s usually a sign that an algorithm like can be improved.

### Time & Space Complexity

Creating the `transformationsMap` is one of the more expensive operations here. It requires we go through each pair of words.

Assuming that `W` is the length of the `wordList` array, the complexity here is `O(W^2)`.

To check whether two pairs are a valid connection we use a helper method that depends on the length of the word.

So assuming that `L` is the length of the word, the final complexity of the construction is `O(W^2 * L)`.

We don’t really know anything about the constraints of the problem. If `W >> L` then the helper is negligible. But if `W ~= L`, then we are looking at `O(W^3)` to construct our map.

After that we have our BFS algorithm, which has the time complexity of `O(W * L)`.

In terms of space complexity, we also have `O(W * L)` for all the Map with our transformations and queue that we keep during our BFS.

Due to the lengthy construction of the initial map, the performance of this algorithm is therefore really slow `O(W^3)`.

The Online Judge shows this is indeed the case:
```
Runtime: 688 ms, faster than 30.76% of JavaScript online submissions for Word Ladder.
Memory Usage: 52.9 MB, less than 7.14% of JavaScript online submissions for Word Ladder.
```

I’m guessing that a better Dict/Map approach could speed things up and my `checkedWords` Set is likely also redundant.

The optimal solution should be `O(W * L)`, but I haven’t quite figured it out.
