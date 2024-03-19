// n개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953
// 유클리드 호제법
// 두 개의 정수 혹은 2보다 큰 N개의 자연수에서 최대공약수를 구할 때 사용

// 최대공약수를 구하는 과정은 아래
const getGcd = (a, b) => {
  let mod = a % b;
  if (mod === 0) {
    return b;
  } else {
    return getGcd(b, mod);
  }
};
const getLcm = (a, b) => {
  return (a * b) / getGcd(a, b);
};
// n개의 최대 공약수는
// multiple(a1, a2, a3...) / gcd(a1, a2, a3...)

function solution(arr) {
  let numArr = arr.sort((a, b) => b - a);
  let answer = numArr[0];
  // n개의 최대 공약수를 찾는다
  for (let i = 1; i < numArr.length; i++) {
    answer = getLcm(answer, numArr[i]);
  }
  return answer;
}

console.log(solution([2, 6, 8, 14]));
