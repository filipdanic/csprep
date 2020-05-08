# 1309. Decrypt String from Alphabet to Integer Mapping

https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

Given a string s formed by digits `('0' - '9')` and `'#'` . We want to map s to English lowercase characters as follows:
- Characters (`'a'` to `'i'`) are represented by (`'1'` to `'9'`) respectively.
- Characters (`'j'` to `'z'`) are represented by (`'10#'` to `'26#'`) respectively.

Return the string formed after mapping.

It's guaranteed that a unique mapping will always exist.

Example 1:
```
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
```

Constraints:
- `1 <= s.length <= 1000`
- `s[i]` only contains digits letters `('0'-'9')` and `'#'` letter.
- `s` will be valid string such that mapping is always possible.

## Solution & Complexity

This was a fun little problem and I’m sure that there’s a more elegant solution that what I wrote, but it’s likely either:
1) Based on the same stack-like approach as mine or
2) Using some sort of lookahead approach to check for the `#` sign.

Either way, we have a `O(n)` time complexity solution and `O(n)` for space because we have to construct the output string.

The lookahead solution will likely be better as you don’t have an additional `O(n)` memory for the stack/queue.
