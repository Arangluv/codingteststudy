// n^2 배열 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    let mob = i % n;
    let quotient = Math.floor(i / n);
    answer.push(Math.max(mob, quotient) + 1);
  }
  return answer;
}
console.log(solution(4, 7, 14));
