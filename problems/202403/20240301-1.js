// 무인도 여행 - BFS
// https://school.programmers.co.kr/learn/courses/30/lessons/154540

// 시간초과
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

// 비슷한데 시간초과없이 풀리는 문제
// dr = [-1, 1, 0, 0];
// dc = [0, 0, -1, 1];

// function solution(maps) {
//   let answer = [];
//   let matrix = [];

//   maps.forEach((row) => {
//     matrix.push(row.split(""));
//   });

//   const [row, col] = [matrix.length - 1, matrix[0].length - 1];

//   for (let i = 0; i <= row; i++) {
//     for (let j = 0; j <= col; j++) {
//       let value = matrix[i][j];

//       // 방문 확인
//       if (value === "X") continue;

//       // 방문 처리
//       matrix[i][j] = "X";

//       value = Number(value);

//       // 큐 생성
//       const queue = [[i, j]];

//       while (queue.length !== 0) {
//         // 큐 추출
//         let [r, c] = queue.shift();

//         // 상 하 좌 우 확인
//         for (let i = 0; i < 4; i++) {
//           const [nr, nc] = [r + dr[i], c + dc[i]];

//           // 범위 밖으로 나갈 경우
//           if (0 > nr || nr > row || 0 > nc || nc > col) continue;

//           let nv = matrix[nr][nc];

//           // 방문 확인
//           if (nv === "X") continue;

//           // 방문 처리
//           matrix[nr][nc] = "X";

//           value += Number(nv);

//           // 큐 추가
//           queue.push([nr, nc]);
//         }
//       }

//       answer.push(value);
//     }
//   }

//   if (answer.length === 0) return [-1];

//   answer.sort((a, b) => a - b);

//   return answer;
// }
