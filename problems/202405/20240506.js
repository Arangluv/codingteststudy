// 롤케이크 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  let answer = 0;
  let brother = new Set();
  let toppingMap = new Map();
  for (let item of topping) {
    toppingMap.has(item)
      ? toppingMap.set(item, toppingMap.get(item) + 1)
      : toppingMap.set(item, 1);
  }

  for (let i = 0; i < topping.length; i++) {
    let count = toppingMap.get(topping[i]) - 1;
    brother.add(topping[i]);
    if (count === 0) {
      toppingMap.delete(topping[i]);
    } else {
      toppingMap.set(topping[i], count);
    }
    if (toppingMap.size === brother.size) {
      answer++;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 1, 2]));
