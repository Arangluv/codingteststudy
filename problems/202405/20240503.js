// n진수 게임 - kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  // n = 진법
  // t = 미리 구할 개수
  // m = 참가인원
  // p = 나의 순서

  //게임은 0부터 시작
  //str length는 m * t를 넘지 않는다
  let answer = "";
  let count = 0;
  let speaker = 1;
  let myTurn = m === p ? 0 : p;

  while (answer.length !== t) {
    // 이번턴에 말해야하는 n진수 숫자
    let turnNumber = count.toString(n);
    for (let i = 0; i < turnNumber.length; i++) {
      if (speaker % m === myTurn) {
        answer += turnNumber[i].toUpperCase();
      }
      if (answer.length === t) return answer;
      speaker++;
    }
    // 턴 증가
    count++;
  }
}
console.log(solution(2, 4, 2, 1));
