// 2 * n 타일링
// https://school.programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  // answer = answer % 1_000_000_007 로 갱신해주자
  // dfs ?
  let dp = Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1_000_000_007;
  }
  return dp[n - 1];
}

console.log(solution(5));
