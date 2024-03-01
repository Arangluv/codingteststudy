// 카펫 - 완전탐색
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  var answer = [];
  const sum = brown + yellow;
  for (let i = 1; i <= sum; i++) {
    if (sum % i !== 0) continue;
    const divisionNum = sum / i;
    if (i - 2 <= 0) continue;
    if (divisionNum - 2 <= 0) continue;

    if ((i - 2) * (divisionNum - 2) === yellow) {
      answer = [i, divisionNum];
      break;
    }
  }
  answer.sort((a, b) => b - a);
  return answer;
}
solution(8, 1);
