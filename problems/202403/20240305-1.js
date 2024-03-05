// 완주하지 못한 선수 - 해시
// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  let participantMap = new Map();
  participant.forEach((people) => {
    if (participantMap.get(people)) {
      participantMap.set(people, participantMap.get(people) + 1);
    } else {
      participantMap.set(people, 1);
    }
  });
  completion.forEach((people) => {
    if (participantMap.has(people)) {
      participantMap.set(people, participantMap.get(people) - 1);
      if (participantMap.get(people) === 0) {
        participantMap.delete(people);
      }
    }
  });
  const keys = participantMap.keys();
  let answer = "";
  for (let key of keys) {
    answer = key;
  }
  return answer;
}
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
