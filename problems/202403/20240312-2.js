// 올바른 괄호 -> 스택
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(str) {
  let charArr = str.split("");
  if (str[0] === ")") {
    return false;
  }
  let stack = [];
  for (let i = 0; i < charArr.length; i++) {
    if (!stack.length) stack.push(charArr[i]);
    else {
      let popedChar = stack.pop();
      if (charArr[i] === ")" && popedChar === "(") {
        continue;
      } else {
        stack.push(popedChar);
        stack.push(charArr[i]);
      }
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(solution("(()("));
