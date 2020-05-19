# 359. Logger Rate Limiter

https://leetcode.com/problems/logger-rate-limiter/

Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

**Example:**
```
Logger logger = new Logger();
logger.shouldPrintMessage(1, "foo"); // returns true; logging string "foo" at timestamp 1
logger.shouldPrintMessage(2,"bar"); // returns true; logging string "bar" at timestamp 2
logger.shouldPrintMessage(3,"foo"); // returns false; logging string "foo" at timestamp 3
logger.shouldPrintMessage(8,"bar"); // returns false; logging string "bar" at timestamp 8
logger.shouldPrintMessage(10,"foo"); // returns false; logging string "foo" at timestamp 10
logger.shouldPrintMessage(11,"foo"); // returns true; logging string "foo" at timestamp 11
```

## Solution

The solution I went with is to keep a queue/array of the last 10 messages and iterate over that array in order to decide what to return and how to update the list.

A fast approach would be to use a simple `Map` structure with pairs `{ <key: message>: <value: timestamp>}`, but this could grow out of bounds and blow the stack if left too long.

In real life we could setup a periodic cleanup task to remove key/value pairs that were in the map too long.

