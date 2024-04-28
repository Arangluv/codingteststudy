// 캐시
// 2018 kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/17680

/**
 *  input
 *  0 <= cacheSize <= 30
 *  cities -> 도시이름, 최대 개수 100,000
 *  city의 이름은 대소문자를 구별하지 않고 최대 20개로 이루어짐
 *
 *  output
 *  총 실행시간을 출력
 *
 *  캐시 교체 알고리즘은 LRU 사용 (Least Recently Used)
 *  cache hit일 경우 실행시간 1
 *  cache miss 일 경우 실행시간 5
 *  ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
 *  [5, 5, 5, 5, 5, 1, 1, 1, 1, 1]
 */
function solution(cacheSize, cities) {
  let INITIAL_SIZE = cacheSize * 5;
  let size = 0;
  let cache = cities.slice(0, cacheSize);
  for (let i = cacheSize; i < cities.length; i++) {
    let idx = -1;
    console.log(`cache ${cache}`);
    for (let j = 0; j < cacheSize; j++) {
      // cache 안에 있는지 검사
      if (cache[j] === cities[i]) {
        idx = j;
        break;
      }
    }
    if (idx !== -1) {
      // cache 안에 city가 존재
      let temp = cache[idx];
      for (let x = 0; x < idx; x++) {
        cache[x + 1] = cache[x];
      }
      cache[0] = temp;

      size += 1;
    } else {
      // cache안에 없음
      for (let x = 0; x < cacheSize; x++) {
        cache[x + 1] = cache[x];
      }
      cache[0] = cities[i];
      size += 5;
    }
  }

  return size + INITIAL_SIZE;
}
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
);
