// 2개 이하로 다른 비트 - 월간 코드 챌린지 시즌2
// https://school.programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  let answer = [];
  numbers.forEach((number) => {
    let binary = number.toString(2).padStart(17, "0");
    for (let i = number + 1; ; i++) {
      let count = 0;
      let tempBinary = i.toString(2).padStart(17, "0");
      for (let j = 0; j < 17; j++) {
        if (tempBinary[j] !== binary[j]) {
          count++;
        }
      }
      if (count <= 2 && count >= 1) {
        answer.push(i);
        break;
      }
    }
  });
  return answer;
}
console.log(solution([2, 7]));
