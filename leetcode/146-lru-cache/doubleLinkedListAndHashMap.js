/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = null;
  this.tail = null;
  this.cache = {};
};


/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache[key]) {
    const value = this.cache[key].value;
    if (this.head !== this.cache[key]) {
      if (this.cache[key].prev) {
        this.cache[key].prev.next = this.cache[key].next;
      }
      if (this.cache[key].next) {
        this.cache[key].next.prev = this.cache[key].prev;
      }

      if (this.tail === this.cache[key]) {
        this.tail = this.cache[key].prev;
      }

      const prevHead = this.head;
      this.head = this.cache[key];
      this.head.next = prevHead;
      prevHead.prev = this.head;
      this.head.prev = null;
    }

    return value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

  if (this.cache[key]) {
    this.cache[key].value = value;
    this.get(key);
  } else {
    this.cache[key] = { key, value, prev: null };
    const prevHead = this.head;
    this.head = this.cache[key];
    this.head.next = prevHead;
    if (prevHead) {
      prevHead.prev = this.head;
    }

    if (this.tail === null) {
      this.tail = this.head.next;
    }

    this.size += 1;
  }

  if (this.size > this.capacity) {
    const removedKey = this.tail.key;
    if (this.tail.prev) {
      const prev = this.tail.prev;
      prev.next = null;
      this.tail = prev;
    }
    delete this.cache[removedKey];
    this.size -= 1;
  }
};

export default LRUCache;
