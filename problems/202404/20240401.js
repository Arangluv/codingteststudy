// 행렬의 곱셈
//https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  let answer = [];
  const ROW_LENGTH = arr1.length;
  const COL_LENGTH = arr2[0].length;
  for (let i = 0; i < ROW_LENGTH; i++) {
    let num = Array(COL_LENGTH).fill(0);
    for (let j = 0; j < COL_LENGTH; j++) {
      let temp = 0;
      for (let x = 0; x < arr2.length; x++) {
        temp += arr1[i][x] * arr2[x][j];
      }
      num[j] = temp;
    }
    answer.push(num);
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
