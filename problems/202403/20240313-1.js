// 점프와 순간이동
// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 0;
  if (n === 1) {
    return 1;
  }
  while (n !== 2) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n - 1;
      answer += 1;
    }
  }
  return answer + 1;
}
