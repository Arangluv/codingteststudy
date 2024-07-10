// 큰 수 만들기 - 그리드
// https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  // k개 만큼 지워야함
  let arr = number.split("");
  let prev = [parseInt(arr[0]), 0]; // [value, idx]
  for (let i = 1; i < arr.length; i++) {
    if (k === 0) break;
    let current = parseInt(arr[i]);
    if (prev[0] < current) {
      let [value, idx] = prev;
      k--;
      arr[idx] = "";
      prev = [current, i];
    }
    if (prev[0] > current) {
      let [v, idx] = prev;
      arr[i] = "";
      k--;
    }
  }

  return k === 0 ? arr.join("") : arr.slice(0, arr.length - k).join("");
}

console.log(solution("4177252841", 4)); // 775841
