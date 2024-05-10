// 오픈채팅방 - 2019 kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(arr) {
  // "Enter uid1234 Muzi" -> "Enter [유저아이디] [닉네임]"
  // "Leave uid1234" -> "Leave [유저아이디]"
  //  "Change uid1234 Muzi" -> "Change [유저아이디] [닉네임]"
  let answer = [];
  // ex ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

  let records = arr.map((item) => item.split(" "));
  let userMap = new Map();
  records.forEach((record) => {
    // record = [instruction, userId, nickname | null]
    let [command, userId, nickname = null] = record;
    if (command === "Enter") {
      if (!userMap.get(userId)) {
        userMap.set(userId, nickname);
      }
      if (userMap.get(userId) && userMap.get(userId) !== nickname) {
        userMap.set(userId, nickname);
      }
    }
    if (command === "Change" && userMap.get(userId)) {
      userMap.set(userId, nickname);
    }
  });
  records.forEach((record) => {
    let [command, userId] = record;
    if (command === "Enter") {
      answer.push(`${userMap.get(userId)}님이 들어왔습니다.`);
    }

    if (command === "Leave") {
      answer.push(`${userMap.get(userId)}님이 나갔습니다.`);
    }
  });
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
