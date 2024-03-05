// 폰켓몬 - 해쉬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let map = new Map();
  nums.forEach((item) => {
    if (map.get(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  return map.size < nums.length / 2 ? map.size : nums.length / 2;
}

console.log(solution([3, 1, 2, 3]));
