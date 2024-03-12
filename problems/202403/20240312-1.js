// 최솟값 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let arr1 = A.sort((a, b) => a - b);
  let arr2 = B.sort((a, b) => b - a);
  let answer = 0;
  arr1.forEach((item, idx) => {
    answer += item * arr2[idx];
  });

  return answer;
}
solution([1, 4, 2], [5, 4, 4]);
