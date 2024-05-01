// 방문길이 (Summer / Winter coding)
// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  // 각 사분면은 5 x 5
  // 범위를 넘어가는 명령어는 무시
  // 1 <= dirs.length <= 500
  let directions = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  let visited = new Set();
  let curCoordinate = [0, 0];
  for (let dir of dirs) {
    let nx = curCoordinate[0] + directions[dir][0];
    let ny = curCoordinate[1] + directions[dir][1];
    if (nx < -5 || ny < -5 || nx > 5 || ny > 5) {
      continue;
    }
    // 오고 가는 길을 모두 string 형태로 저장한다
    visited.add(`${curCoordinate[0]}${curCoordinate[1]}${nx}${ny}`);
    visited.add(`${nx}${ny}${curCoordinate[0]}${curCoordinate[1]}`);

    // 최근 좌표를 최신화
    curCoordinate = [nx, ny];
  }
  return visited.size / 2;
}

console.log(solution("LLLLRRRR"));
