// 요격 시스템
// 프로그래머스 lv2 - 요격 시스템
// https://school.programmers.co.kr/learn/courses/30/lessons/181188
// 비슷한 문제 https://www.acmicpc.net/problem/1931
function solution(targets) {
  let answer = 0,
    prev = -1;
  const len = targets.length;

  targets.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < len; i++) {
    const [a, b] = targets[i];

    if (prev <= a) {
      prev = b;
      answer += 1;
    }
  }

  return answer;
}
// 풀이
