/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  const transformationsMap = new Map();
  for (let word of wordList) {
    for (let nextWord of wordList) {
      if (
        word !== nextWord &&
        canUseAsTransformation(word, nextWord)
      ) {
        if (transformationsMap.has(word)) {
          transformationsMap.get(word).push(nextWord);
        } else {
          transformationsMap.set(word, [nextWord]);
        }
      }
    }
  }

  let step = 1;
  let solutionNotFound = true;
  let queue = wordList.filter(word => canUseAsTransformation(word, beginWord));

  if (queue.some(word => word === endWord)) {
    solutionNotFound = false;
    step = 2;
  }

  const checkedWords = new Set();
  while(solutionNotFound) {
    let nextQueue = [];
    while(queue.length > 0) {
      const word = queue.pop();
      if (!checkedWords.has(word)) {
        checkedWords.add(word);
        if (word === endWord) {
          solutionNotFound = false;
          break;
        } else {
          nextQueue = nextQueue.concat(transformationsMap.get(word) || []);
        }
      }
    }
    step += 1;
    queue = nextQueue;

    if (step > wordList.length) {
      step = 0;
      solutionNotFound = false;
    }
  }

  return step;
};

const canUseAsTransformation = (word1, word2) => {
  let missmatchedCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      missmatchedCount += 1;
    }
    if (missmatchedCount > 1) {
      break;
    }
  }
  return missmatchedCount <= 1;
};

export default ladderLength;
