// 뒤에 있는 큰 수 찾기 - 프로그래머스 lv2
// https://school.programmers.co.kr/learn/courses/30/lessons/154539#
// 다시풀기
function solution(numbers) {
  // ex. numbers = [9 1 5 3 6 7] -> [-1 5 6 6 7 -1]
  let answer = [];
  let stack = [numbers[0]];
  let index = 1;
  while (stack.length) {
    let popedNum = stack.pop();
    if (popedNum < numbers[index]) {
      answer.push(numbers[index]);
      stack.push(numbers[index]);
      index++;
    } else {
      stack.push(numbers[index]);
      index++;
    }
  }
  return answer;
}
