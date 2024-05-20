// 2개 이하로 다른 비트 - 월간 코드 챌린지 시즌2
// https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      // 짝수인 경우
      let binary = number.toString(2).split("");
      binary[binary.length - 1] = 1;
      console.log(binary.join(""));
      return parseInt(binary.join(""), 2);
    }
    // 홀수인경우
    let binary = number.toString(2).split("");
    let lastIdx = binary.lastIndexOf("0");
    if (lastIdx === -1) {
      binary.unshift("0");
    }
    let index = lastIdx === -1 ? 0 : binary.lastIndexOf("0");
    binary[index] = 1;
    binary[index + 1] = 0;
    return parseInt(binary.join(""), 2);
  });
}
console.log(solution([2, 7]));
