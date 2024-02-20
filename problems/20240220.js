// 최소 직사각형 (완전탐색)
// https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript

function solution(sizes) {
  let max = 0;
  let min = 0;

  for (let i = 0; i < sizes.length; i++) {
    const itemMax = Math.max(...sizes[i]);
    const itemMin = Math.min(...sizes[i]);

    max = max < itemMax ? itemMax : max;
    min = min < itemMin ? itemMin : min;
  }
  console.log(max * min);
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
