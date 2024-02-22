// 피로도 - 완전탐색, dfs
// https://school.programmers.co.kr/learn/courses/30/lessons/87946
// dfs를 활용하는 것 까지 알았으나, 해결하지못함

// function solution(k, dungeons) {
//   var answer = -1;
//   let count = [];
//   dfs(k, dungeons, 0);
//   return count === 0 ? -1 : count;
// }

// const dfs = (k, arr, count) => {
//   console.log(count);
//   console.log(`k ? ${k}`);

//   if (k <= 0) return;
//   if (arr.length >= 1) {
//     for (let i = 0; i < arr.length; i++) {
//       if (k < arr[i][0]) break;
//       let copyArr = [...arr];
//       copyArr.splice(i, 1);
//       let newK = k - arr[i][1]; // 던전 입장 후 피로도 감소
//       count++;
//       dfs(newK, arr, count);
//     }
//   }
// };

// solution(80, [
//   [80, 20],
//   [50, 40],
//   [30, 10],
// ]);

function solution(k, dungeons) {
  let answer = 0;
  let visited = Array(dungeons.length).fill(false);
  function dfs(k, count) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = true;
        dfs(k - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, count);
  }
  dfs(k, 0);
  console.log(answer);
  return answer;
}
solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);
