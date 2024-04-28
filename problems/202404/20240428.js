// k진수에서 소수 개수 구하기
// 22022 kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/92335
// 10진수 -> k진수 변환 toString(k)
// const isPrime = (num) => {
//   if (num === 1) return false;
//   if (num === 2) return true;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }

  return true;
}

function solution(n, k) {
  let kBinary = n.toString(k);
  console.log("Math.sqrt(20)");
  console.log(Math.sqrt(6));
  return kBinary.split(0).filter((str) => {
    if (str === "") return false;
    return isPrime(parseInt(str));
  }).length;
}

console.log(solution(437674, 3));
