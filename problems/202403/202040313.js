// 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  let answer = [0, 0];
  // 끝나지 않는경우 [0,0]
  // 잘못된 단어를 이야기하는 경우, 같은말을 반복한 경우 ->
  // [n번째 사람, 몇번째 턴에서]

  let wordMap = new Map();
  let count = 1;
  let prev = "";
  for (let word of words) {
    let nth = count % n === 0 ? n : count % n;
    if (count === 1) {
      prev = word[word.length - 1];
    }
    // 있는 단어를 이야기한 경우
    if (wordMap.get(word)) {
      return [nth, Math.ceil(count / n)];
    } else {
      // 없다면
      wordMap.set(word, 1);
    }
    // 끝말있기가 안된 경우
    if (count !== 1) {
      if (prev !== word[0]) {
        return [nth, Math.ceil(count / n)];
      }
    }
    count++;
    prev = word[word.length - 1];
  }

  return answer;
}
