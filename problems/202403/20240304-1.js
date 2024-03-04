// 가장 큰 수 - 정렬?
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// 기존 코드 -> 앞 자리가 같은 경우 zero count를 하여 비교하려고 했음 -> 오답
function solution(numbers) {
  let answer = "";
  numbers.sort((a, b) => {
    let stringA = String(a);
    let stringB = String(b);

    if (Number(stringA[0]) > Number(stringB[0])) {
      return -1;
    } else if (Number(stringA[0]) < Number(stringB[0])) {
      return 1;
    } else {
      let stringC = stringA + stringB;
      let stringD = stringB + stringA;
      if (parseInt(stringC) >= parseInt(stringD)) {
        return -1;
      }
      if (parseInt(stringC) < parseInt(stringD)) {
        return 1;
      }
      // 같은 경우
      // find Zero
      //   if (stringA.length > 1) {
      //     for (let i = 1; i < stringA.length; i++) {
      //       if (stringA[i] === "0") {
      //         aZero++;
      //       } else {
      //         break;
      //       }
      //     }
      //   }
      //   if (stringB.length > 1) {
      //     for (let i = 1; i < stringB.length; i++) {
      //       if (stringB[i] === "0") {
      //         bZero++;
      //       } else {
      //         break;
      //       }
      //     }
      //   }
      //   if (aZero === bZero) {
      //     return b - a;
      //   } else if (aZero > bZero) {
      //     return a - b;
      //   } else {
      //     return b - a;
      //   }
      // }
    }
  });
  return numbers.join("")[0] === "0" ? "0" : numbers.join("");
}

// function solution(numbers) {
//   let answer = numbers
//     .map((item) => String(item))
//     .sort((a, b) => b + a - (a + b));

//   return answer[0] === "0" ? "0" : answer;
// }
console.log(solution([0, 0, 0]));
