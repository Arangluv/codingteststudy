const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let dp = new Array(n + 1).fill(0);

// dp[i] = i가 되는데 필요한 연산의 최소값

for (let i = 2; i <= n; i++) {
  // 먼저 현재 i값에서 - 1 한 연산을 더함
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    // 만약 2로 나누어 떨어진다면 dp[i / 2] + 1 과 현재 dp[i]를 비교
    // 예를들어 9가 있을때 8 > 7... 이렇게 계산되는 값과,
    // 8 > 4 ... 이렇게 계산되는 값을 비교
    // 8이 4가되는 방법은 dp[4]에 이미 저장
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
}
console.log(dp[n]);
