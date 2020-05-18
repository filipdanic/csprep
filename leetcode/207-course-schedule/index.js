/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  if (prerequisites.length <= 1) {
    return true;
  }

  const ranks = Array.from({ length: numCourses }).fill(0);
  const graph = buildGraph(numCourses, prerequisites);

  for (let node of prerequisites) {
    ranks[node[0]] += 1;
  }

  const queue = [];
  for (let i = 0; i < ranks.length; i++) {
    if (ranks[i] === 0) {
      queue.push(i);
    }
  }

  let clearedNodes = 0;
  while (queue.length > 0) {
    const next = queue.pop();
    clearedNodes += 1;
    if (graph[next]) {
      for (let dep of graph[next]) {
        ranks[dep] -= 1;
        if (ranks[dep] === 0) {
          queue.push(dep);
        }
      }
    }
  }

  return clearedNodes === numCourses;
};

const buildGraph = (nodeCount, dependencies) => {
  const graph = Array.from({ length: nodeCount }).map(_ => []);

  for (let dep of dependencies) {
    graph[dep[1]].push(dep[0]);
  }

  return graph;
};

export default canFinish;
