// k 번째 수 - 정렬
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(arr, command) {
  let answer = [];
  command.forEach((item) => {
    let [start, end, k] = item;
    if (start === end) {
      answer.push(arr[start - 1]);
    } else {
      let sliceArr = arr.slice(start - 1, end);
      sliceArr.sort((a, b) => a - b);
      let kItem = sliceArr[k - 1];
      answer.push(kItem);
    }
  });
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 60, 3, 7, 4],
    [
      [2, 5, 3],
      [1, 7, 6],
      [1, 7, 3],
    ]
  )
);
