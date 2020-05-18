# 1429. First Unique Number

https://leetcode.com/problems/first-unique-number/

You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:
- `FirstUnique(int[] nums)` – Initializes the object with the numbers in the queue.
- `showFirstUnique()` returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
- `add(value)` insert value to the queue.

Example:
```
FirstUnique firstUnique = new FirstUnique([2,3,5]);
firstUnique.showFirstUnique(); // return 2
firstUnique.add(5);            // the queue is now [2,3,5,5]
firstUnique.showFirstUnique(); // return 2
firstUnique.add(2);            // the queue is now [2,3,5,5,2]
firstUnique.showFirstUnique(); // return 3
firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
firstUnique.showFirstUnique(); // return -1
```

## Solution

### Naive Solutions

I initially came up with a couple of straightforward solutions that I honestly liked – based on using a `Map` to keep track of frequencies of elements.

The solution I came up provided a `O(1)` time complexity for `show()` and a sub-linear complexity on average for the `add()`. The worst case `O(n)` time complexity was not fast enough to satisfy the LeetCode Judge and I got a TLE on some of the test cases.

### Double Sets

A really cool solution exists in form of dual Sets. One to keep track of uniques and one to keep track of duplicates.

The idea is very straightforward and gives a `O(1)` `add()` operation.
```
FirstUnique.prototype.add = function(value) {
  // Known duplicate – do nothing.
  if (this.duplicates.has(value)) {
    return;
  }
  // A new element – add it to the uniques set
  if (!this.uniques.has(value)) {
    this.uniques.add(value);
    return;
  }
  // A unique element that just became a duplicate?  – Remove
  // it from uniques and add to duplicates
  this.uniques.delete(value);
  this.duplicates.add(value);
};
```

For the `show()` we just return the first element in the `uniques` set – as they are ordered in order of appearance.

### Space and Time Complexity
- `show()` in `O(1)` time
- `add()` in `O(1)` time
- `O(n)`  worst case for the space for the two space.
