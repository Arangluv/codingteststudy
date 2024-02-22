// 모음사전 (완전탐색)
// BFS 활용
// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  let answer = 0;
  let arr = ["A", "E", "I", "O", "U"];
  let flg = false;
  function dfs(char) {
    if (flg || char.length > 5) {
      return;
    }
    if (word === char) {
      flg = true;
      return;
    }
    answer += 1;
    for (let i = 0; i < arr.length; i++) {
      let newChar = char + arr[i];
      dfs(newChar);
    }
  }
  dfs("");
  console.log(answer);
  return answer;
}
solution("EIO");
