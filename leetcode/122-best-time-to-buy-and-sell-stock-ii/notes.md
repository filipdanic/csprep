# 122 Best Time to Buy and Sell Stock II

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

Say you have an array prices for which the ith element is the price of a given stock on day `i`.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
```
Input: [7,1,5,3,6,4]
Output: 7
Explanation:
- Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
- Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```

Example 2:
```
Input: [1,2,3,4,5]
Output: 4
Explanation:
- Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
- Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
```

Example 3:
```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

## Solution

Unfortunately, the solution doesn’t really build-up on the technique used in _Best Time to Buy and Sell Stock I,_ but it’s a great iteration on a problem that I see myself using when interviewing candidates.

To understand this problem we need think of “valleys“ and “peaks“ on a graph.

So for `prices = [1, 3, 1, 4]`, our graph looks like this:

```
4            p3
3    p1    /
2   /  \  /
1  p0   p2
   0  1  2    3  (index of prices[])
```

Wo here have our valleys `p0` and `p[2]`, and our peaks `p[1]` and `p[3]`.

The general algorithm is to buy a stock and valley, and sell it on the next peak.

We can detect valleys and peaks in a single pass by just looking ahead at the next element.

Single pass, `O(n)` time complexity.
