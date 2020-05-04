# 1052. Grumpy Bookstore Owner

https://leetcode.com/problems/grumpy-bookstore-owner/

Today, the bookstore owner has a store open for `customers.length` minutes.  Every minute, some number of customers (`customers[i]`) enter the store, and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the `i-th` minute, `grumpy[i] = 1`, otherwise `grumpy[i] = 0`.  When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for X minutes straight, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

Example 1:
```
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes.
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

Note:
- 1 <= X <= customers.length == grumpy.length <= 20000
- 0 <= customers[i] <= 1000
- 0 <= grumpy[i] <= 1

## Solutions & Time Complexity

I came up with a brute force approach very fast, but finding the proper linear time solution was very hard for me. I felt pretty stupid once it clicked for me.

### Brute Force

This solution is documented in `bruteForce.js` and is based on the simple idea of calculating the maximum provided by every possible subsequence.

```
 [1, 0, 1, 2, 1, 1, 7, 5]
 [0, 1, 0, 1, 0, 1, 0, 1]
```

So the first group is `customers = [1, 0, 1], grumpy = [ 0, 1, 0]`, which provides a maximum increase of `0`.

And the last group is  `customers = [1, 7, 5], grumpy = [ 1, 0, 1]`, which provides a maximum increase of 6.

Once we know the range where the grumpy bookstore owner’s ability is activated, we can sum everything up quite nicely.

The solution is unfortunately not very efficient, especially for a larger `X` value.

The complexity amounts to something like `O(n * O(X)) + O(n)`, which for a small `n` brings us into linear time. But since the problem notes that `X` can be the same length as the input array, this brings us to `O(n^2)`. Not good!

### Real Sliding Windows

The idea behind my initial approach was to create sliding windows, but they just ended up being “windows.” This means that calculations were practically repeated since no sliding was being done.

For example, take the initial problem, but imagine X = 5

```
 [1, 0, 1, 2, 1, 1, 7, 5]
 [0, 1, 0, 1, 0, 1, 0, 1]
```

When we have the first group `(1, 0, 1, 2, 1)`, we calculate all 5. For the next group `(0, 1, 2, 1, 1)`, we calculate all 5 again, but that means we’re repeating the middle elements.

Instead we should’ve dropped the first element from the previous group and added the next element.

This is the **“sliding”** component, and for a very large `X`, this adds up!

I ended up realizing that I can use one loop to calculate the sum of all satisfied customers as well as keep a sliding window of currently unsatisfied customers. Every time I move the window, I make sure to remember the highest count of unsatisfied customers I discovered so far.

That’s the awesome `O(n)` time solution.
