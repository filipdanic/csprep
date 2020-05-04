# 49. Group Anagrams
Given an array of strings, group anagrams together.

Example:
```
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```
Note:
- All inputs will be in lowercase.
- The order of your output does not matter.

## Solutions & Complexity Analysis

This is a simple problem to solve, but very interesting to optimize. My first solution can be seen in `bruteForce.js` which relied on a utility function called `isAnagram` from problem `242. Valid Anagram`.

The brute force solution was fast to code given the utility I had, but the performance was horrible:
```
Runtime: 6636 ms, faster than 5.05% of JavaScript online submissions for Group Anagrams.
Memory Usage: 59 MB, less than 8.70% of JavaScript online submissions for Group Anagrams.
```

The complexity was very high. Given `n` strings of size `s`, our time complexity is `O(n^2 * s)`.

In cases where `length(n) ~ length(s)` this leads us to `O(n^3)`.

My next approach was to create an efficient hash map, using a sorted anagram as the hash key. If we look at the strings: `["ate","eat","tea"]` their hash code is going to be `aet`.

This drastically improved our performance, by an order of magnitude!
```
Runtime: 136 ms, faster than 68.86% of JavaScript online submissions for Group Anagrams.
Memory Usage: 45.8 MB, less than 26.09% of JavaScript online submissions for Group Anagrams.
```

It would’ve been good if this were `O(n * s)`, which could be reduced as `O(n)` if `n >> s`.

Unfortunately because we have to sort the anagrams to get our hashcode, we have an additional time complexity of `O(n * s log s)`.

In cases where `length(n) ~ length(s)` this leads us to `O(n^2) + O(n * n log n)`, which we could reduce to `O(n^2)`

In both approaches our memory stays consistent with the input, as we need to return all the strings.

## Further improvement

I think that a pure `O(n * s)` solution is possible. The trick is finding a better way to choosing and calculating the hash key, one that is `O(s)`.

Some meta-thinking: since other users seem to have faster algorithms, but they use a lot more memory, the solution might require some extra `O(s)` memory for the hash key calculation.

For example, since we have 26 characters in the alphabet, we could initialize an array:

```
 a, b, c, d, ... z
[0, 0, 0, 0 ..., 0 ]
```

The increment occurrences. So for the string `aabbd`:

```
 a, b, c, d, ... z
[2, 2, 0, 1 ..., 0 ]
```

Making the hash key: `2201...0`. All anagrams of `aabbd` will have the same hash key.

This can be done in `O(s)` time with additional `O(s)` memory. I plan to explore this approach some time later, right now I’m fairly bored of the problem… :)
