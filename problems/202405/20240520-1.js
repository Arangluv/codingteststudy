// 다음으로 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  // condition 1. n의 다음으로 큰 숫자는 n보다 큰 자연수
  // condition 2. n의 다음으로 큰 숫자와 n은 2진수로 변환했을 때 1의 개수가 같다
  let oneCount = 0;
  let binary = n.toString(2).split("");
  // 주어진 n의 2진수 1의 개수
  binary.forEach((char) => {
    if (char === "1") {
      oneCount++;
    }
  });
  while (true) {
    ++n;
    let tempBinary = n.toString(2).split("");
    let count = 0;
    tempBinary.forEach((char) => {
      if (char === "1") {
        count++;
      }
    });
    if (count === oneCount) {
      return n;
    }
  }
}

console.log(solution(78));
