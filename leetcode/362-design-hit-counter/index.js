/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
  this.hits = [];
};

/**
 * Record a hit.
 * @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  if (
    this.hits[this.hits.length - 1] &&
    this.hits[this.hits.length - 1].timestamp  === timestamp
  ) {
    this.hits[this.hits.length - 1].count += 1;
  } else {
    this.hits.push({ timestamp, count: 1 });
  }
  this.cleanup(timestamp);
};

HitCounter.prototype.cleanup = function(timestamp) {
  if (this.hits.length > 300) {
    this.hits = this.hits.filter(hit => timestamp - hit.timestamp < 300);
  }
};


/**
 * Return the number of hits in the past 5 minutes.
 * @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  return this.hits
    .filter(hit => timestamp - hit.timestamp < 300)
    .reduce((acc, hits) => acc + hits.count, 0);
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */


export default HitCounter;
