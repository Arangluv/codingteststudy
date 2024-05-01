// [3차] 압축 - kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/17684

const dictionary = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26,
};
function solution(msg) {
  let answer = [];
  let wordMap = new Map();
  let addCount = 27;
  let msgArr = msg.split("");
  // 초기 맵 setting
  for (let char in dictionary) {
    wordMap.set(char, dictionary[char]);
  }
  for (let i = 0; i < msgArr.length; ) {
    let prevWord = msgArr[i];
    let flg = true;
    let sliceCount = i + 1;
    if (i === msgArr.length - 1) {
      answer.push(wordMap.get(msgArr[i]));
      break;
    }
    if (i >= msgArr.length) {
      break;
    }
    while (flg) {
      prevWord = msgArr.slice(i, sliceCount).join("");
      if (wordMap.get(prevWord)) {
        sliceCount++;
        continue;
      } else {
        flg = false;
        wordMap.set(prevWord, addCount++);
        answer.push(wordMap.get(msgArr.slice(i, sliceCount - 1).join("")));
      }
    }
    i = sliceCount - 1;
  }
  return answer;
}

console.log(solution("KAKAO"));
