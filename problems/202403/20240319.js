// 귤 고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, arr) {
  let answer = 0;
  let count = k;
  let maps = new Map();
  // 배열을 순회하면서 맵에 저장 O(n)
  arr.forEach((item) => {
    if (!maps.get(item)) {
      // map에 없을 때
      maps.set(item, 1);
    } else {
      maps.set(item, maps.get(item) + 1);
    }
  });
  let mapToArr = [...maps];
  mapToArr.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < mapToArr.length; i++) {
    if (count <= 0) {
      return answer;
    }
    count -= mapToArr[i][1];
    answer++;
  }
  return answer;
}
console.log(solution(8, [1, 1, 2, 2, 3, 3, 4, 4]));
