// 프로세스 (queue / stack)
// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  // priorities = 중요도
  // location = 해당 인덱스가 언제 실행되는지
  // 아래 elements는 priorities 길이만큼 0부터  1씩 증가되는 배열을 갖는다

  let elements = Array.from({ length: priorities.length }, (value, idx) => idx);
  let answer = 0;

  while (priorities.length) {
    let curValue = priorities[0];
    let maxValue = Math.max(...priorities);
    if (curValue >= maxValue) {
      // 현재 curValue가 가장 값이 크거나 우선순위가 높다
      if (location === elements[0]) {
        answer++;
        return answer;
      } else {
        elements.shift();
        priorities.shift();
        answer++;
        continue;
      }
    } else {
      // 큐의 뒤로 보낸다
      let shiftedElement = elements.shift();
      let shiftedPriority = priorities.shift();
      elements.push(shiftedElement);
      priorities.push(shiftedPriority);
    }
  }
  return answer;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
