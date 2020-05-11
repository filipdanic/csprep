20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:
```
Input: "()"
Output: true
```
Example 2:
```
Input: "()[]{}"
Output: true
```
Example 3:
```
Input: "(]"
Output: false
```
Example 4:
```
Input: "([)]"
Output: false
```
Example 5:
```
Input: "{[]}"
Output: true
```

## Solution

The first part of the intuition needed for this problem is to realize that:
- For a valid expression, the number of open brackets will equal the number of closed brackets
- When we find a closing bracket it should match the last unpaired opening bracket we found.

So for a string such as `{ [ { ( ) } ) }`:
- When we get to `)`, the `(` was the last unpaired opening bracket. They are a pair so looking good.
- When we get to `}`, the `{` was the last unpaired opening bracket. They are a pair so looking good.
- When we get to `)`, the `[` was the last unpaired opening bracket. They are not a pair so the string is invalid.
- After that we don’t even need to look further

So, let’s say we were to push opening brackets on to a stack and pop them off when we find matching closing brackets. This satisfies our first goal.

Next, we also need to check if what we popped from the stack, is a valid pair for the closing bracket we just found. This way we satisfy our second goal.

## Time and Space Complexity

The algorithm takes a single pass, so only `O(n)` time complexity.

The additional memory of the stack can grow up to `O(n)` as well if we consider an invalid expression such as `(((((` where we would never pop.

### Optimizations

One optimization I did was to return `false` right away if the length of the string was odd (modulo !== 0).

I’m sure there’s some additional optimizations you could come up with, though I’m unsure how significant they would be and they would have to be based on real-world usage scenarios.

For example, in the string `((((((((` (eight `(`), once you get to the fifth bracket you will notice that your stack is longer than the remaining string.

So simply adding:
```
    if (stack.length > (s.length - i + 1)) {
      return false;
    }
```

Would help detect and terminate these scenarios early, improving speed and space complexity for these problems.

However, this line did not improve anything for the test cases provided by LeetCode so I didn’t included it in my solution.
