// 피보나치 수 - dp
// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  // fibo(0) -> 0
  // fibo(1) -> 1;
  // fibo(2) -> 1;
  // fibo(3) -> fibo(1) + fibo(2)

  let answer = Array(n + 1).fill(BigInt(1));
  for (let i = 3; i <= n; i++) {
    answer[i] = BigInt(answer[i - 1]) + BigInt(answer[i - 2]);
  }
  return Number(answer[n] % BigInt(1234567));
}
console.log(solution(100000));
