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

// 좋은 정답코드
// map을 순회할때 for of 를 사용할 수 있고, 그 값을 초기화할때 let [ley, value] 이런식으로 할당가능하다,
// let a = ...,
//     b = ...;
// 이런식으로 코드를 작성하는것도 깔끔하다

// function solution(participant, completion) {
//     const map = new Map();

//     for(let i = 0; i < participant.length; i++) {
//         let a = participant[i], 
//             b = completion[i];

//         map.set(a, (map.get(a) || 0) + 1);
//         map.set(b, (map.get(b) || 0) - 1);
//     }

//     for(let [k, v] of map) {
//         if(v > 0) return k;
//     }

//     return 'nothing';
// }