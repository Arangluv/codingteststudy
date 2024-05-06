// 뒤에 있는 큰 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers) {
  var answer = [];
  var stack = []; // 가장 가까이 있는 큰수를 찾기 위해 비교 스택 생성
  while (numbers.length) {
    if (!stack.length) {
      // 비교 스택에 값이 없다.
      answer.push(-1);
      stack.push(numbers.pop());
    } else {
      // 비교 스택에 값이 있다.
      if (numbers[numbers.length - 1] < stack[stack.length - 1]) {
        // 가장 최근 스택에 쌓인 값이 numbers의 마지막 원소보다 크다면
        answer.push(stack[stack.length - 1]);
        stack.push(numbers.pop());
      } else {
        // 그렇지 않다면 스택 원소를 하나 뺀다
        // 가장 가까이 있는 큰 수를 찾는 것이기 때문에 최근 저장한 stack의 값이 현재 자신보다
        // 작다면 해당 stack 값은 버린다. 어차피 현재 값보다 작기 때문에 비교 대상에서 제외된다.

        stack.pop();
      }
    }
  }
  // 뒤에서부터 비교 했으므로 reverse를 통해 뒤집는다.
  return answer.reverse();
}

console.log(solution([9, 1, 5, 3, 6, 2]));
