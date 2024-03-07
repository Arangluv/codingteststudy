// 의상 - 해시 lv2
// https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
  let answer = 1;
  let hashMap = new Map();
  for (let [v, k] of clothes) {
    if (hashMap.get(k)) {
      hashMap.set(k, hashMap.get(k) + 1);
    } else {
      hashMap.set(k, 1);
    }
  }
  for (let [k, v] of hashMap) {
    answer *= v + 1;
  }
  return answer - 1;
}
console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
