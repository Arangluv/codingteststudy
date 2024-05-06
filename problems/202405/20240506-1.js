// 땅따먹기
// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  // land는 N X 4 2차원 배열
  // X행에서 Y열을 밟았다면, 다음 X + 1 행에서 Y열을 못 밟는다
  // 밟고 내려올 수 있는 최대 값을 return;
  // bfs 시간초과, DP로 다시해결 -> 내려올때마다 최대값 갱신
  for (let i = 1; i < land.length; i++) {
    if (i === land.length - 1) {
      console.log(Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]));
      console.log(land[i][0]);
    }
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][1], land[i - 1][3], land[i - 1][0]);
    land[i][3] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][0]);
  }
  console.log("land");
  console.log(land);
  return Math.max(...land[land.length - 1]);
}
console.log(
  solution([
    [1, 1, 1, 2],
    [2, 2, 2, 3],
    [3, 3, 3, 4],
  ])
);
