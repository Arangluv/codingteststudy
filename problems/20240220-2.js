// 소수 찾기 (완전탐색 - "dfs") -> dfs를 떠올리는게 핵심임
// https://school.programmers.co.kr/learn/courses/30/lessons/42839
// TODO : dfs 학습 후 다시해보기

function isPrimeNum(num) {
  if (num === 1 || num === 0) {
    return false;
  }
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++;
    }
    if (count !== 0) break;
  }
  // count가 0이면 소수
  return count === 0;
}
