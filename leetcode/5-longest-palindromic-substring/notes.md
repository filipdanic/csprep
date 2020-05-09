# 5. Longest Palindromic Substring

https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:
```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

## Solution

### Prior Art
The brute force solution is immediately obvious: go through every substring and check if it’s a palindrome.

Getting every substring is `O(n^2)` and checking if they are a palindrome is `O(n/2) ~ O(n)`, giving us `O(n^3)` which is rarely a complexity that an interviewer will expect.

A Dynamic Programming solution is to realize that if you already know that `aa` is a palindrome, then surely you know that `baab` is palindrome without having to recompute `aa`.

Thus, first calculate and memoize all 2-pair palindromes, then 3-pair palindromes and so on.

While this brings us `O(n^2)` time complexity, we also have `O(n^2)` space complexity.

### Expanding Around the Middle

A common model of thinking of whether something is a palindrome or not is to use two pointers from the start and end of the string.

But, expanding the two pointers from the middle is also a viable option and it also helps us identify any palindrome substring within a potential palindrome.

So, for the string `dfaabbxbbaazy`, if we start from the middle and have one pointer go to the left and one to right, we will conclude that this isn’t a palindrome, but we’ll also be bale to see that `aabbxbbaa` is the longest palindrome substring within this candidate.

So if we choose every character as a potential middle, we will eventually find all the palindromes and determine the longest one.

There is an edge case, a palindrome can have an even or odd number of characters:
- For `aaaxaaa`, `i = 3 (x)` is the middle and our left and right pointer start from here.
- For `aaaxxaaa`, we don’t have a single middle point, but instead our left starts from index 3 and right from index 4.

### Final Complexity

Since we go through the string only once to initiate our check, we start with `O(n)` for the iteration. The check itself for every character is `O(n)`, so our final time complexity is `O(n^2)` with constant space complexity.
