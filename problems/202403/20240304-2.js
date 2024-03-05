// h-index - 정렬
// https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

function solution(arr) {
  arr.sort((a, b) => b - a);
  let i = 0;
  while (true) {
    if (i + 1 <= arr[i]) {
      i++;
    } else {
      break;
    }
  }
  return i;
}

console.log(solution([3, 0, 6, 1, 5]));
