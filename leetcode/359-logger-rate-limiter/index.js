/**
 * Initialize your data structure here.
 */
var Logger = function() {
  this.history = [];
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
 If this method returns false, the message will not be printed.
 The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  let exists;
  for (let i = this.history.length - 1; i >= 0; i--) {
    if (this.history[i].message === message) {
      exists = this.history[i];
      break;
    }
  }

  if (exists && timestamp - exists.timestamp < 10) {
    return false;
  } else if (exists && timestamp - exists.timestamp >= 10) {
    if (this.history.length === 10) {
      this.history.shift();
    }
    this.history.push({ timestamp, message });
    return true;
  } else {
    if (this.history.length === 10) {
      this.history.shift();
    }
    this.history.push({ timestamp, message });
    return true;
  }
};

export default Logger;
