/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const mapS = new Map();
  const mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], mapS.get(s[i]) ? mapS.get(s[i]) + 1 : 1);
    mapT.set(t[i], mapT.get(t[i]) ? mapT.get(t[i]) + 1 : 1);
  };


  for (let i = 0; i < 26; i++) {
    const charKey = (i + 10).toString(36);
    if (mapT.get(charKey) !== mapS.get(charKey)) {
      return false;
    }
  }

  return true;
};

export default isAnagram;
