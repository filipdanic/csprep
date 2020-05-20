# 146. LRU Cache

https://leetcode.com/problems/lru-cache/

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: `get` and `put`.

- `get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
- `put(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up: Could you do both operations in `O(1)` time complexity?

Example:
```
LRUCache cache = new LRUCache(2); // capcity = 2
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

## Solutions Overview

THere are two solutions that I came up with for this problem. Both are considered `O(1)`, though the first solution uses much more memory and is less efficient.
- `doubleLinkedListAndHashMap.js` is based on using a double-linked list and a hash map, basically implementing Java’s `LinkedHashMap` structure.
- `justMap.js` shows a very elegant utilization of JS’s native `Map` structure.

## LinkedHashMap

The idea is simple, let’s say wee have a capacity of 4 and the current order of our `[ key, value ]` pairs is `[1, 'a'] -> [2,'b'] -> [3, 'c'] -> [4, 'd']`.

Here’s how we will represent this as a double linked list:
```
head pointer -> [1, 'a'] <-> [2, 'b'] <-> [3, 'c'] <-> [4, 'd'] <- tail pointer

// the <-> is a symbol for a double next/prev pointer
```

We will also keep a hash map:
```
{
    1: pointer to [1, 'a'],
    2: pointer to [2, 'b'],
    3: pointer to [2, 'c'],
    4: pointer to [2, 'd'],
}
```

We know have `O(1)` access to any key as well as to the start and end of the list.

As `put` and `get` are called, we will remove things as needed via the `tail` pointer or swap elements to the front thanks to `head` pointer and out `O(1)` access to any element.

## JavaScript’s Map

The `Map` structure has a unique and interesting property – you can iterate through **the keys in the order in which they were created.**

So, whenever we have a `put` for a new or existing key, or a `get`, we can delete that key from the Map and re-add it, so it is sent to the end of the order.

This way, the first element in the `Map` is the least recently used one, and the first element is the most recently used one.

The internal implementation of the Map `remove` method is the only potential problem to our `O(1)` requirement. Is it really constant time? This is very hard to say and depending on the JS engine it might be different.

However, if were to go by actual performance metrics, it is clear that this solution is better.

## Performance Comparison

- `Map`: 184ms, memory used 58.9 MB
- `LinkedHashMap`: 328ms, memory used 59.1 MB
