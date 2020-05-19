# 362. Design Hit Counter

https://leetcode.com/problems/design-hit-counter/

Design a hit counter which counts the number of hits received in the past 5 minutes.

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

It is possible that several hits arrive roughly at the same time.

Example:
```
HitCounter counter = new HitCounter();
counter.hit(1); // hit at timestamp 1.
counter.hit(2); // hit at timestamp 2.
counter.hit(3); // hit at timestamp 3.
counter.getHits(4); // get hits at timestamp 4, should return 3.
counter.hit(300); // hit at timestamp 300.
counter.getHits(300); // get hits at timestamp 300, should return 4.
counter.getHits(301); // get hits at timestamp 301, should return 3.
```

**Follow up:** What if the number of hits per second could be very large? Does your design scale?

## Solution

The solution included in the repo is fairly slow:
```
Runtime: 64 ms, faster than 19.77% of JavaScript online submissions for Design Hit Counter.
Memory Usage: 34 MB, less than 50.00% of JavaScript online submissions for Design Hit Counter.
```

What it has going for it is a limited memory growth – unlike many of the fast solution on LC, it can be left running for days. Still, I’m sure there’s some way to implement this better.

In the real world, we would likely aggregate the hits based on hours/days and store them in an efficient data store for historical querying, while keeping the data for the last 5-10 minutes in a local hashmap for fast querying for current data.
