// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(str) {
  let answer = "";
  let numArr = str.split(" ").map((item) => parseInt(item));
  answer = `${Math.min(...numArr)} ${Math.max(...numArr)}`;
  return answer;
}

console.log(solution("1 2 3 4"));
