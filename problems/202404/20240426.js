// 기능 개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution(progresses, speeds) {
  let totalPeriod = Array(progresses.length).fill(0);
  let answer = [];
  for (let i = 0; i < progresses.length; i++) {
    let quotient = Math.floor((100 - progresses[i]) / speeds[i]);
    let mob = (100 - progresses[i]) % speeds[i];
    totalPeriod[i] = mob !== 0 ? quotient + 1 : quotient;
  }
  let count = 1;
  if (totalPeriod.length === 1) return totalPeriod[0];
  let prevPeriod = totalPeriod.shift();
  while (totalPeriod.length) {
    let currentPeriod = totalPeriod.shift();
    if (!totalPeriod.length) {
      if (currentPeriod < prevPeriod) {
        answer.push(count + 1);
        break;
      } else {
        answer.push(count);
        answer.push(1);
        break;
      }
    } else {
      if (prevPeriod < currentPeriod) {
        answer.push(count);
        prevPeriod = currentPeriod;
        count = 1;
        continue;
      } else {
        count++;
      }
    }
  }
  return answer;
}

console.log(solution([95, 95, 95, 95], [4, 3, 2, 1]));
