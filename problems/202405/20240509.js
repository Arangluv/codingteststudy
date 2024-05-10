// 파일명 정렬 - kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/17686

const findIndex = (str) => {
  // 숫자로 시작하는 부분의 시작과 끝 index를 찾는다
  // 첫글자는 무조건  문자로 시작하므로 flg를 선언한다 -> false가 되면 반복문 탈출
  let startFlg = true;
  let endFlg = true;
  let startIndex = -1;
  let endIndex = -1;
  for (let i = 0; i < str.length; i++) {
    if (startFlg && endFlg) {
      if (parseInt(str[i]) || parseInt(str[i]) === 0) {
        startIndex = i;
        startFlg = false;
      }
    } else if (!startFlg && endFlg) {
      if (!parseInt(str[i]) && parseInt(str[i]) !== 0) {
        endIndex = i - 1;
        endFlg = false;
      }
    }
    if (!startFlg && !endFlg) {
      break;
    }
  }
  // 마지막 index 검사
  if (
    startIndex !== -1 &&
    (parseInt(str[str.length - 1]) || parseInt(str[str.length - 1]) === 0)
  ) {
    endIndex = str.length - 1;
  }
  if (startIndex !== -1 && endIndex === -1) {
    endIndex = startIndex;
  }
  return [startIndex, endIndex];
};
function solution(files) {
  files.sort((a, b) => {
    let [firstNumberStartIndex, firstNumberEndIndex] = findIndex(a);
    let [secondNumberStartIndex, secondNumberEndIndex] = findIndex(b);
    let firstHead =
      firstNumberStartIndex === -1 ? a : a.substr(0, firstNumberStartIndex);
    let secondHead =
      secondNumberStartIndex === -1 ? b : b.substr(0, secondNumberStartIndex);
    let firstNumber = parseInt(
      a.substr(firstNumberStartIndex, firstNumberEndIndex + 1)
    );
    let secondNumber = parseInt(
      b.substr(secondNumberStartIndex, secondNumberEndIndex + 1)
    );
    let localeNumber = firstHead
      .toUpperCase()
      .localeCompare(secondHead.toUpperCase());
    if (localeNumber === 0) {
      if (firstNumber > secondNumber) {
        return 1;
      } else if (firstNumber < secondNumber) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return localeNumber;
    }
    // if (firstHead.toUpperCase() > secondHead.toUpperCase()) {
    //   return 1;
    // } else if (firstHead.toUpperCase() < secondHead.toUpperCase()) {
    //   return -1;
    // } else {
    //   // 두 head가 같은 경우
    //   if (firstNumber > secondNumber) {
    //     return 1;
    //   } else if (firstNumber < secondNumber) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // }
  });

  return files;
}

console.log(solution(["aa14", "aa"]));
// ["aa", "a a", "aaa aa", "a aa aaa", "a aaa a"] -> 기대값
// [ 'aa', 'a a', 'aaa aa', 'a aaa a', 'a aa aaa' ] -> 결과값
console.log("a aa aaa".localeCompare("a aaa aa"));
