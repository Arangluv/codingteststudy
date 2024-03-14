// 다시 풀기
// 구현 - 천천히 접근
// https://school.programmers.co.kr/learn/courses/30/lessons/181187
// 복잡도 생각 -> 초당 1억번연산 -> 최악의 경우 1,000,000 ** 2 연산임
function solution(r1, r2) {
  // 1 <= r1 < r2 <= 1,000,000
  let answer = 0;
  for (let i = 1; i <= r2; i++) {
    // x축을 기준으로 순회 -> 끝나면 x 4 + 4(r2 좌표)
    let maxCount = Math.floor(Math.sqrt(r2 ** 2 - i ** 2)); // 최대 좌표
    let minCount = i >= r1 ? 0 : Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)); // 최소 좌표
    answer += maxCount - minCount + 1; // ex 4, 3이면 3도 포함되어어야 하기때문에 + 1
  }
  return answer * 4;
}
