// 타겟넘버 - 깊이 / 너비 우선탐색
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  function dfs(count, sum) {
    if (count === numbers.length) {
      if (target === sum) {
        answer++;
      }
      return;
    }
    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
