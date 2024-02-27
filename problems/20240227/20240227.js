// // 여행경로
// // https://school.programmers.co.kr/learn/courses/30/lessons/43164

// function solution(tickets) {
//   const START = "ICN";
//   const goalCount = tickets.length;
//   const [f, r] = tickets.shift();
//   const queue = [[f, r, 0]];
//   const travelRoot = [];
//   const visited = Array(tickets.length).fill(false);
//   visited[0] = true;
//   while (queue.length) {
//     let [front, rear, count] = queue.shift();
//     let curFront = front;
//     let curRear = rear;

//     if (count === goalCount) {
//       return travelRoot;
//     }
//     for (let i = 0; i < goalCount; i++) {
//       if (!visited[i]) {
//         // 일단 먼저 방문처리
//         visited[i] = true;
//         let ticketsFront = tickets[i][0];
//         let ticketsRear = tickets[i][1];
//         if (ticketsFront === START) {
//           curFront = ticketsFront;
//         }
//         if (ticketsFront === front && ticketsRear[0] < rear[0]) {
//           curRear = ticketsRear;
//         }
//         if (rear === ticketsFront) {

//         }
//       }
//     }
//   }
// }
function solution(tickets) {
  const visited = Array(tickets.length).fill(false);
  const maxCount = tickets.length;
  START = "ICN";
  let answer = [];

  const dfs = (index, front, rear, arr, count) => {
    console.log(arr);
    visited[index] = true;
    // 초기 시작지점 검사
    if (arr.length === 0 && front !== START) {
      visited[index] = false;
      return;
    }
    if (count === maxCount) {
      //   console.log("arr ?");
      //   console.log(arr);
      answer = [...arr];
      return;
    }

    for (let i = 0; i < maxCount; i++) {
      if (!visited[i]) {
        let [f, r] = tickets[i];
        if (f === front && r[0] < rear[0]) {
          visited[i] = false;
          visited[index] = false;
          return;
        }
        if (rear === f) {
          if (arr.length !== 0) {
            arr.push(r);
          } else {
            arr.push(front);
            arr.push(f);
            arr.push(r);
          }
          dfs(i, f, r, arr, count + 1);
        }
      }
    }
  };
  for (let i = 0; i < maxCount; i++) {
    if (!visited[i]) {
      dfs(i, tickets[i][0], tickets[i][1], [], 1);
    }
  }
  return answer;
}

console.log(
  solution([
    ["ICN", "AAA"],
    ["ICN", "CCC"],
    ["CCC", "DDD"],
    ["AAA", "BBB"],
    ["AAA", "BBB"],
    ["DDD", "ICN"],
    ["BBB", "AAA"],
  ])
);
