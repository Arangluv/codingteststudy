// DFS
//

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const computers = input.slice(2, input.length).map((str) => str.split(" "));
//   .map((str) => parseInt(str));
let answer = 0;
let warmedComputer = [1];
let visited = Array(computers.length).fill(false);

const dfs = (idx) => {
  let [firstComputer, secondComputer] = computers[idx];
  // 정수값으로 초기화
  firstComputer = parseInt(firstComputer);
  secondComputer = parseInt(secondComputer);

  const isFirstInclude = warmedComputer.includes(firstComputer);
  const isSecondInclude = warmedComputer.includes(secondComputer);

  if (!isFirstInclude && !isSecondInclude) {
    visited[idx] = false;
    return;
  }
  if (!isFirstInclude && isSecondInclude) {
    answer += 1;
    warmedComputer = [firstComputer, ...warmedComputer];
  }

  if (isFirstInclude && !isSecondInclude) {
    answer += 1;
    warmedComputer = [secondComputer, ...warmedComputer];
  }
  for (let i = 0; i < computers.length; i++) {
    if (i === idx) continue;
    if (!visited[i]) {
      visited[i] = true;
      dfs(i);
    }
  }
};

for (let i = 0; i < computers.length; i++) {
  // 방문하지 않았고,
  if (!visited[i]) {
    visited[i] = true;
    dfs(i);
  }
}
console.log(answer);
