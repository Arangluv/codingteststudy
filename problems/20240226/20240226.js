// 네트워크
// 깊이 / 너비 우선탐색

// solution 1 - my
function solution(n, computers) {
  let answer = 0;
  let count = computers[0].length;
  let visited = Array(n).fill(false);

  const dfs = (index) => {
    visited[index] = true;
    for (let i = 0; i < count; i++) {
      if (!visited[i] && computers[index][i]) {
        dfs(i);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
// solution 2 - union-find
