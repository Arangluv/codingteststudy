const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let nArr = input.map((n) => parseInt(n));
function solution(n) {
  let dp = Array(11).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= 10; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  n.forEach((item) => {
    console.log(dp[item]);
  });
}

solution(nArr);
