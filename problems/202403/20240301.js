function solution(r1, r2) {
  // 1 <= r1 < r2 <= 1,000,000

  let answer = 0;
  for (let i = 0; i <= r2; i++) {
    for (let j = 0; j <= r2; j++) {
      let length = Math.sqrt(i ** 2 + j ** 2);
      if (length >= r1 && length <= r2) {
        if (i === 0 || j === 0) {
          console.log("실행");
          answer += 2;
        } else {
          answer += 4;
        }
      }
    }
  }
  return answer;
}

console.log(solution(2, 3));
