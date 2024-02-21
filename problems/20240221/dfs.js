// dfs = 깊이 우선탐색

//그래프
// A는 B와 C와 연결
// B는 A와 D와 연결

// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D"],
//   C: ["A", "G", "H", "I"],
//   D: ["B", "E", "F"],
//   E: ["D"],
//   F: ["D"],
//   G: ["C"],
//   H: ["C"],
//   I: ["C", "J"],
//   J: ["I"],
// };

// const dfs = (graph, startNode) => {
//   const visited = [];
//   const needVisited = [];

//   needVisited.push(startNode);

//   // 방문해야 할 node가 없을 때 까지 loop
//   while (needVisited.length !== 0) {
//     const node = needVisited.shift();
//     // 방문해야할 노드를 shift로 뺀 후 (Queue)
//     // 만약 방문노드(visited)에 node가 없다면
//     if (!visited.includes(node)) {
//       visited.push(node);
//       console.log("탐색");
//       console.log(`방문 노드 : ${node}`);
//       needVisited.push(...graph[node], ...needVisited);
//     }
//   }
// };

// dfs(graph, "A");

// const dfs = (graph, v, visited) => {
//   // 현재 노드를 방문 처리
//   visited[v] = true;
//   console.log(v);

//   // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
//   for (let node of graph[v]) {
//     if (!visited[node]) {
//       dfs(graph, node, visited);
//     }
//   }
// };

// const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];

// // 1시행 0
// // 2시행 1
// // 3시행 5
// // 4시행 2
// // 5시행 4
// // 6시행 3
// const visited = Array(7).fill(false);
// //   [false, false,
// //   false, false,
// //   false, false,
// //   false]
// dfs(graph, 0, visited);
// // 0 1 5 2 4 3

const graph = [[1, 2, 4], [0, 5], [0, 5], [4], [0, 3], [1, 2]];
const visited = Array(6).fill(false);
const dfs = (graph, startNode, visited) => {
  visited[startNode] = true;
  console.log(startNode);

  for (let node of graph[startNode]) {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  }
};
dfs(graph, 0, visited);
