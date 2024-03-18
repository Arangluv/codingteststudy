// 예상 대진표
// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(N, A, B) {
  let round = 0;
  while (A !== B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    round++;
  }
  return round;
}
console.log(solution(8, 1, 2));
