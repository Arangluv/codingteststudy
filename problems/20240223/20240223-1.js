// 게임 맵의 최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// 최단거리는 BFS를 이용해 풀자 (Queue)

// function solution(maps) {
//   const yLen = maps.length;
//   const xLen = maps[0].length;
//   const goalY = yLen - 1;
//   const goalX = xLen - 1;
//   const dy = [0, 0, 1, -1];
//   const dx = [-1, 1, 0, 0];

//   const queue = [];
//   queue.push([0, 0, 1]);

//   while(queue.length) {
//       const [curY, curX, move] = queue.shift();
//       if(curY === goalY && curX === goalX) return move;

//       for(let i = 0; i < 4; i++) {
//           const ny = curY + dy[i];
//           const nx = curX + dx[i];
//           if(ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
//               queue.push([ny, nx, move + 1]);
//               maps[ny][nx] = 0;
//           }
//       }
//   }

//   return -1;
// }

function solution(maps) {
  // x, y축 길이
  let xLength = maps[0].length;
  let yLength = maps.length;
  // 목표지점 좌표
  let goalX = xLength - 1;
  let goalY = yLength - 1;
  // 상,하,좌,우 좌표
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  const queue = [[0, 0, 1]];

  while (queue.length) {
    let [curY, curX, move] = queue.shift(); // X와 Y의 위치가 중요하다
    if (curX === goalX && curY === goalY) {
      return move;
    }
    for (let i = 0; i < 4; i++) {
      let nextX = curX + dx[i];
      let nextY = curY + dy[i];
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < xLength &&
        nextY < yLength &&
        maps[nextY][nextX] === 1
      ) {
        queue.push([nextY, nextX, move + 1]);
        maps[nextY][nextX] = 0;
      }
    }
  }
  return -1;
}
console.log(
  solution([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ])
);
