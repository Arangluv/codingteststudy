// 게임 맵의 최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// 최단거리는 BFS를 이용해 풀자 (Queue)

function solution(maps) {
  let answer = 0;
  let xLength = maps[0].length;
  let yLength = maps.length;
  let goalX = xLength - 1;
  let goalY = yLength - 1;
  let dx = [1, -1, 0, 0];
  let dy = [0, 0, 1, -1];

  const queue = [[0, 0]];

  while (queue.length) {
    let [curX, curY] = queue.shift();
    if (curX === goalX && curY === goalY) {
      return answer;
    }
    for (let i = 0; i < 4; i++) {
      let nextX = curX + dx[i];
      let nextY = curY + dy[i];
      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < xLength &&
        nextY < yLength &&
        maps[nextX][nextY] === 1
      ) {
        answer++;
        queue.push([nextX, nextY]);
        maps[nextX][nextY] = 0;
      }
    }
  }
  return -1;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
