// 숫자 변환하기 - retry
// https://school.programmers.co.kr/learn/courses/30/lessons/154538

function solution(x, y, n) {
  // 최소 연산횟수 return -> 만들 수 없다면 -1
  // x -> y
  // x + n, x * 2, x * 3
  let arr = Array(y + 1).fill(Infinity);
  console.log(arr);
  arr[x] = 0;
  for (let i = x; i <= y; i++) {
    if (i - n >= x) arr[i] = Math.min(arr[i], arr[i - n] + 1);
    if (i % 2 === 0 && i / 2 >= x) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    if (i % 3 === 0 && i / 3 >= x) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }
  return arr[y] === Infinity ? -1 : arr[y];
}

console.log(solution(30, 40, 5));
