// n개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let answer = 1;
  arr.sort((a, b) => a - b);
  let num = [];
  for (let i = 1; i < arr.length; i++) {
    num.push(arr[i]);
    arr.forEach((n, idx) => {
      if (n % arr[i] === 0) {
        arr[idx] = n / arr[i];
      }
    });
  }
  arr.forEach((n) => {
    answer *= n;
  });
  return answer;
}
