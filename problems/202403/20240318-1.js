// 멀리뛰기
// https://school.programmers.co.kr/learn/courses/30/lessons/12914
// 아마도 다이나믹
function solution(n) {
  // 1234567로 나눈 나머지
  let answer = 0;
  let ways = Array(2001).fill(BigInt(0));
  ways[1] = BigInt(1);
  ways[2] = BigInt(2);
  ways[3] = BigInt(3);
  for (let i = 4; i <= 2000; i++) {
    ways[i] = ways[i - 2] + ways[i - 1];
  }
  return parseInt(ways[n] % BigInt(1234567));
}
console.log(solution(4));
