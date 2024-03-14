// 구명보트 - > 그리디
// https://school.programmers.co.kr/learn/courses/30/lessons/42885

// 문제 조건이 매우 중요하다
// [20 20 30 30]인 케이스를 생각해서 다른방법으로 접근했다
// 최소 40이상 240이하인 조건을 생각하면 두명만 더하는 덧셈만 고려하면된다.

function solution(people, limit) {
  let answer = 0;
  let start = 0;
  let end = people.length - 1;
  people = people.sort((a, b) => a - b);
  while (start < end) {
    let sum = people[start] + people[end];
    if (sum > limit) {
      end--;
    } else {
      end--;
      start++;
    }
    answer++;
  }
  if (start === end) answer++;
  return answer;
}
console.log(solution([20, 20, 30, 30], 100));
