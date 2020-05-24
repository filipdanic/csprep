# 3. Longest Substring Without Repeating Characters

https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string, find the length of the longest substring without repeating characters.

Example 1:
```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```
Example 2:
```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
Example 3:
```
Input: "pwwkew"
Output: 3
Explanation:
- The answer is "wke", with the length of 3.
- Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Solution

This is a good example of the sliding window approach. We initiate a substring (window) `[i, j]`, and move the right boundary as long as there are no duplicates. A `Set` or `Map` structure is a simple way to check this in constant space. Though one is a better choice. (More on that later.)

### Time and Space Complexity

This is a `O(n)` solution, though it might take up to two loops as the `i` tries to catch up with `j`. In terms of space, our string consists of a small set of possible characters `[a-z]`.

Our Map/Set is bounded by the length of the alphabet. So, we can express that as `O(alphabet.length)`, which could pragmatically be considered constant space for a small alphabet.

## Optimizations

There’s quite a bit to be said on how to optimize this further in terms of practical performance. (Though we won’t ever get under `O(n)` time complexity.)

### The Right Data Structure

I tried using both a `Map` and `Set`, and as expected a `Map` performs much better.

Using `Set`:
```
Runtime: 108 ms, faster than 46.67% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 41.2 MB, less than 39.82% of JavaScript online submissions for Longest Substring Without Repeating Characters.
```

Using `Map`:
```
Runtime: 80 ms, faster than 91.91% of JavaScript online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 41.2 MB, less than 38.94% of JavaScript online submissions for Longest Substring Without Repeating Characters.
```

The `Set` wastes some extra time checking if what we provide to `add` is already in the `Set`. (And it probably uses `Map` underneath.)

Using a regular `Object` performs even worse.

### One Less Loop

We could, potentially, make the program two time faster by making sure it runs in only one loop.

The way we increase `i` (`left` in my code) is not optimal. If we used a `Map` to store the index of the character where we found it, then we could come up with a better way to skip ahead and avoid duplicate checks.

Still working on this optimization.

