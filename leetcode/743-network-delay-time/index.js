/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = (times, n, k) => {
  const edgeMinimalCosts = Array.from({ length: n }).fill(Infinity);
  edgeMinimalCosts[k - 1] = 0;

  for (let i = 1; i <= n; i++) {
    for (let [from, to, cost] of times) {
      if (edgeMinimalCosts[from - 1] !== Infinity) {
        if (edgeMinimalCosts[to - 1] > edgeMinimalCosts[from - 1] + cost) {
          edgeMinimalCosts[to - 1] = edgeMinimalCosts[from - 1] + cost;
        }
      }
    }
  }

  let maxCost = 0;
  for (let i = 0; i < edgeMinimalCosts.length; i++) {
    maxCost = Math.max(maxCost, edgeMinimalCosts[i]);
  }
  return maxCost === Infinity ? -1 : maxCost;
};

export default networkDelayTime;
