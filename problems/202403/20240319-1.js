// 연속 부분 수열 합의 개수 -> 배열의 끝에 갔을 때 계속 돌아야함
// https://school.programmers.co.kr/learn/courses/30/lessons/131701
// 슬라이딩 윈도우 알고리즘으로 개선할 수 있다.

function solution(elements) {
  let set = new Set();
  let arr = [...elements, ...elements];
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j + 1 < arr.length; j++) {
      set.add(arr.slice(j, j + i).reduce((a, c) => a + c, 0));
    }
  }
  return set.size;
}
console.log(solution([7, 9, 1, 1, 4]));
