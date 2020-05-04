/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const groups = {};
  for (const str of strs) {
    const hash = str.split('').sort().join('');
    if (groups[hash]) {
      groups[hash].push(str);
    } else {
      groups[hash] = [str];
    }
  }
  return Object.values(groups)
};

export default groupAnagrams;
