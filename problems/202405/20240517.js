// 숫자 변환하기 - retry
// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  // 최소 연산횟수 return -> 만들 수 없다면 -1
  // x -> y
  // x + n, x * 2, x * 3
  let answer = 0;
  if (x === y) return 0;
  function dfs(target, count) {
    if (target > y) {
      return -1;
    }
    if (target === y) {
      answer = answer === 0 || answer === -1 ? count : Math.min(count, answer);
      return;
    }

    for (let i = 0; i <= 2; i++) {
      if (i === 0) {
        // case 1. x + n
        dfs(target + n, count + 1);
      } else if (i === 1) {
        // case 2. x * 2
        dfs(target * 2, count + 1);
      } else {
        // case 3. x * 3
        dfs(target * 3, count + 1);
      }
    }
  }
  dfs(x, 0);
  return answer === 0 ? -1 : answer;
}

