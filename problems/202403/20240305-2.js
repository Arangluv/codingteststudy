// 숫자 변환하기 - 프로그래머스 lv2
// https://school.programmers.co.kr/learn/courses/30/lessons/154538
// 시간초과 에러 -> bfs에 dp 접목시켜서 다시 풀어보기
function solution(x, y, n) {
  let answer = 0;
  if (x === y) {
    return 0;
  }
  const dfs = (num, count) => {
    // 종료조건
    if (num === y) {
      if (answer === 0) {
        answer = count;
        return;
      } else {
        answer = Math.min(answer, count);
        return;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        if (num + n === y) {
          if (answer === 0) {
            answer = count + 1;
            return;
          } else {
            answer = Math.min(answer, count + 1);
            return;
          }
        }
        if (num + n < y) {
          dfs(num + n, count + 1);
        }
      } else if (i === 1) {
        if (num * 2 === y) {
          if (answer === 0) {
            answer = count + 1;
            return;
          } else {
            answer = Math.min(answer, count + 1);
            return;
          }
        }
        if (num * 2 <= y) {
          dfs(num * 2, count + 1);
        }
      } else {
        if (num * 3 === y) {
          if (answer === 0) {
            answer = count + 1;
            return;
          } else {
            answer = Math.min(answer, count + 1);
            return;
          }
        }
        if (num * 3 <= y) {
          dfs(num * 3, count + 1);
        }
      }
    }
  };
  dfs(x, 0);
  return answer === 0 ? -1 : answer;
}

console.log(solution(2, 5, 4));
