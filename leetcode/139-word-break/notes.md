# 139. Word Break

https://leetcode.com/problems/word-break/

Given a non-empty string `s` and a dictionary `wordDict` containing a list of non-empty words, determine if `s` can be segmented into a space-separated sequence of one or more dictionary words.

Note:
- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.

Example 1:
```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

Example 2:
```
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note: You are allowed to reuse a dictionary word.
```

Example 3:
```
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```

## Dynamic Programming Solution

Here is the intuition, let’s take the word `program` with the dict [`pro`, `gr` `am`] and use the following mental model:

```
'' 'p' 'r' 'o' 'g' 'r' 'a' 'm' ''
0   1   2   3   4   5   6   7  8
```

The empty string at index zero is our base case. We consider it “solved.”

The question now becomes, can we somehow “analyze” the string, going forward from 1 to 7 so that finding the solution ends up obvious in the end.

The question of whether `program` can be formed from the dict, is answered by asking whether `pro`, `gr`, and `am` can be formed from the dict.

On the way there, we will also have to ask questions for many other substrings. But if we just stop thinking there, we will end up with `O(2^n)` recursive algorithm.

Instead, we need to recall to our mental model from before and think of it as a solutions table.

As we go from left to right, we will quickly realize that on index `3` we have found the end of our first matching substring.

Let’s marked it with `t` as in `true`. We also mark `''` at index `0` as `t` as it is a base case.
```
t   f   f   t
'' 'p' 'r' 'o' 'g' 'r' 'a' 'm' ''
0   1   2   3   4   5   6   7  8
```

So far, this means that: `f(0) = t`, `f(1) = f`, `f(2) = f`, and `f(3) = t`. The condition for us to mark `f(3)` as true was that `f(0)` be true (base case) and that the the substring between 1 and 3 exists in the dictionary. (It does.)

Moving forward, we also realize that `'gr'` is a match, but we’ll only mark it if the substring leading up to it was found as well.

So, in order for us to mark `f(5) = t`, we need the condition: `f(3) === true && s.slice(4, 5) in dict` to be true.

```
t   f   f   t   f   t
'' 'p' 'r' 'o' 'g' 'r' 'a' 'm' ''
0   1   2   3   4   5   6   7  8
```

For `am`, we need `f(5) === t && s.slice(6, 7) in dict` to be true in order to mark `f(7) = t`. We don’t need to look at `f(3)` because we know `f(5)` validated this already.

```
t   f   f   t   f   t   f   t
'' 'p' 'r' 'o' 'g' 'r' 'a' 'm' ''
0   1   2   3   4   5   6   7  8
```

So the final f(8) ends up just being a question of whether `f(7)` is true or not.

Let’s look at an example where the final solution is not `true`:

```
'' 'a' 'a' 'a' 'a' 'a' 'a' 'a' ''
0   1   2   3   4   5   6   7   8
Dict: ['aaaa']
```

We will quickly mark the first successful match:

```
t   f   f   f   t
'' 'a' 'a' 'a' 'a' 'a' 'a' 'a' ''
0   1   2   3   4   5   6   7   8
```

But as we keep going from here, we will never be able to mark another successful match.

While we will be able to see that f(7) could be true because there is a substring from (4, 7) that exists in the dict, we also know that `f(3)` is false.

### Space & Time Complexity

The time complexity is equal to `O(n^2)`, we go through each item `O(n)` and for each item we check all substrings `⅀|x: O(len(x))|`, bringing us to `~O(n^2)`.

For memory, we need to keep a DP solution table, so `O(n)`.

We also needed to convert the provided dictionary array into a set, which incurred an additional `O(dict)` space and time complexity. Even assuming that the `dict` can be as big as `n` (not specified) the additional complexity of this does not change anything.
