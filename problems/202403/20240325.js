// n^2 배열 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  let answer = [];
  let prevN = 1;
  for (let i = left; i <= right; i++) {
    let quotient = Math.floor(i / n);
    let mob = i % n;
    if (quotient === 0) {
      prevN++;
      answer.push(prevN);
      continue;
    }
    if (mob < prevN) {
      answer.push(prevN);
      continue;
    }
    if (mob === prevN) {
      prevN++;
      answer.push(prevN);
      continue;
    }
  }
  return answer;
}
console.log(solution(4, 7, 14));
