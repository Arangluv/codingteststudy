// 땅따먹기
// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  // land는 N X 4 2차원 배열
  // X행에서 Y열을 밟았다면, 다음 X + 1 행에서 Y열을 못 밟는다
  // 밟고 내려올 수 있는 최대 값을 return;
  let answer = 0;
  function dfs(index, count, sum) {
    // 모든 행을 비교했다면 answer를 초기화하고 재귀를 종료한다.
    if (count === land.length) {
      answer = answer === 0 ? sum : Math.max(answer, sum);
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (index === i) {
        continue;
      } else {
        dfs(i, count + 1, sum + land[count][i]);
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    dfs(i, 0, 0);
  }
  return answer;
}
console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
