// 할인행사
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

// ex
// 바나나 3 사과 2 쌀 2 돼고 2 냄비 1 -> 총 10개
// 치킨 > 사과 > 사과 > 바나나 > 쌀 > 사과 > 돼지고기 > 바나나 > 돼지고기
// > 쌀 > 냄비 > 바나나 > 사과 > 바나나 (14일 할인)

// 1일째 - 10일째 -> 냄비 미포함 -> 가입 x
// 2일째 - 11일째 -> 바나나를 전부구매 x -> 가입 x
// 3, 4, 5일부터의 10일은 조건을 충족 -> 가입
// return 3
function solution(want, number, discount) {
  let maps = new Map();
  let answer = 0;
  // 개별 아이템 mapping
  want.forEach((item, idx) => {
    maps.set(item, number[idx]);
  });
  for (let i = 0; i < discount.length; i++) {
    let tempMap = new Map([...maps]);
    if (i + 9 >= discount.length) {
      return answer;
    }
    for (let j = i; j < i + 10; j++) {
      if (tempMap.get(discount[j]) && tempMap.get(discount[j]) !== 0) {
        tempMap.set(discount[j], tempMap.get(discount[j]) - 1);
        if (tempMap.get(discount[j]) === 0) tempMap.delete(discount[j]);
      } else if (tempMap.get(discount[j]) === 0) {
        tempMap.delete(discount[j]);
      } else {
        continue;
      }
    }
    if (tempMap.size === 0) answer++;
  }
  return answer;
}
console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
