// 무인도 여행 - BFS
// https://school.programmers.co.kr/learn/courses/30/lessons/154540

// 시간초과 -> 해결 (queue에 두번 들어가는 현상이 발생하면 시간초과가 난다)
function solution(maps) {
  let xLength = maps[0].length;
  let yLength = maps.length;
  const visited = Array.from({ length: yLength }, () =>
    Array(xLength).fill(false)
  );
  // 상하좌우 좌표
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];
  let answer = [];
  // queue[0] = [y, x, area]
  for (let i = 0; i < yLength; i++) {
    for (let j = 0; j < xLength; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        let area = parseInt(maps[i][j]);
        visited[i][j] = true;
        let queue = [[i, j]];
        while (queue.length) {
          let [y, x] = queue.shift();
          for (let i = 0; i < 4; i++) {
            let ny = y + dy[i];
            let nx = x + dx[i];
            if (
              ny >= 0 &&
              ny < yLength &&
              nx >= 0 &&
              nx < xLength &&
              !visited[ny][nx] &&
              maps[ny][nx] !== "X"
            ) {
              queue.push([ny, nx]);
              area += parseInt(maps[ny][nx]);
              visited[ny][nx] = true;
            }
          }
        }
        answer.push(area);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

// console.log(solution(["X59XX", "X1X5X", "X231X", "1XXX1"]));
console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));