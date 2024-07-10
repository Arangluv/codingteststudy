const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let lines = fs.readFileSync(filePath).toString().split("\n");

const calculateSum = (arr) => {
  let sum = 0;
  arr.forEach((item) => {
    const [first, second] = item;
    sum += first + second;
  });
  return sum;
};
const isCoordinateValid = (x, y, N, visited) => {
  if (x >= N || y >= N) {
    return false;
  }
  if (visited[y][x]) {
    return false;
  }
  return true;
};

const N = parseInt(lines[0]);
const treeGrid = lines
  .slice(1, lines.length)
  .map((row) => row.split(" ").map((item) => parseInt(item)));
const maxDepth = N === 2 ? 2 : 4;
let maxButiful = -1;
const dx = [0, 1];
const dy = [1, 0];
const visited = Array.from(Array(N), () => Array(N).fill(false));
const dfs = (sum, depth) => {
  if (depth === maxDepth) {
    maxButiful = Math.max(maxButiful, sum);
    return;
  }
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (visited[y][x]) {
        continue;
      }
      visited[y][x] = true;
      for (let k = 0; k < 2; k++) {
        // 아래와 오른쪽을 순회
        let nextX = x + dx[k];
        let nextY = y + dy[k];
        let isValid = isCoordinateValid(nextX, nextY, N, visited);
        if (!isValid) continue;

        visited[nextY][nextX] = true;
        dfs(sum + treeGrid[y][x] + treeGrid[nextY][nextX], depth + 1);
        visited[nextY][nextX] = false;
        visited[y][x] = false;
      }
    }
  }
};
dfs(0, 0);
console.log(maxButiful);
