// 괄호 회전하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(str) {
  let strArr = str.split("");
  let str = [];
  for (let i = 0; i < str.length; i++) {
    let subStr = [];
    if (i > 0) subStr = strArr.splice(0, i);
    str = [...strArr, ...subStr];
  }
}
