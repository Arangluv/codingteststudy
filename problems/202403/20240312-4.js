// 짝지어 제거하기 -> stack
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(str) {
  let arrStr = str.split("");
  let stack = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (stack.length === 0) {
      stack.push(arrStr[i]);
      continue;
    }
    let popedChar = stack.pop();
    if (popedChar === arrStr[i]) {
      continue;
    }
    stack.push(popedChar);
    stack.push(arrStr[i]);
  }
  return stack.length === 0 ? 1 : 0;
}
