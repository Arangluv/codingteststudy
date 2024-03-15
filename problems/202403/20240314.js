// n개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// 유클리드 호제법
function solution(arr) {
  let numArr = arr.sort((a, b) => a - b);
  let maps = new Map();
  for (let i = 0; i < numArr.length; i++) {
    for (let j = 1; j <= numArr[i]; j++) {}
  }
}
