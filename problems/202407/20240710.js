const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let lines = fs.readFileSync(filePath).toString().split("\n");

const [N, S, K] = lines[0].split(" ").map((str) => parseInt(str));
const arr = lines[1].split(" ").map((str) => parseInt(str));
let answer = [];
function combination(n, arr) {
  const temp = Array(n).fill(0);
  function dfs(depth, start) {
    if (depth === n) {
        let sum = 0;
        temp.forEach((num) => sum += num);
      answer.push(sum);
      return;
    } else {
      for (let i = start; i < arr.length; i++) {
        temp[depth] = arr[i];
        dfs(depth + 1, i + 1);
      }
    }
  }

  dfs(0, 0);
  return answer;
}

for (let i = 1; i <= N; i++) {
  combination(i, arr);
}
let count = 0;
answer.forEach((num) => {
    if (K + num === S) count++
})
console.log(count);
