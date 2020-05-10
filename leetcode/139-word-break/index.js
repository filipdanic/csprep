/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const wordSet = new Set();
  wordDict.forEach(word => wordSet.add(word));

  const foundInDict = Array.from({ length: s.length + 1 }).fill(false);
  foundInDict[0] = true;

  for (let i = 0; i <= s.length; i++) {
    for(let j = 0; j < i; j++) {
      if (foundInDict[j] && wordSet.has(s.slice(j, i))) {
        foundInDict[i] = true;
        break;
      }
    }
  }
  return foundInDict[s.length];
};

export default wordBreak;
