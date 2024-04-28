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
  let cache = cities.slice(0, cacheSize).reverse();
  console.log("실행");
  if (cacheSize === 0) {
    console.log("여기가 실행");
    return cities.length * 5;
  }
  for (let i = cacheSize; i < cities.length; i++) {
    let idx = -1;
    for (let j = 0; j < cacheSize; j++) {
      // cache 안에 있는지 검사
      console.log("여기?");
      if (cache[j].toUpperCase() === cities[i].toUpperCase()) {
        idx = j;
        break;
      }
    }
    if (idx !== -1) {
      // cache 안에 city가 존재
      let temp = cache[idx];
      for (let x = idx - 1; x >= 0; x--) {
        cache[x + 1] = cache[x];
      }
      cache[0] = temp;
      console.log(`캐시 없음 : ${cache}`);
      size += 1;
    } else {
      // cache안에 없음
      for (let x = cacheSize - 2; x >= 0; x--) {
        cache[x + 1] = cache[x];
      }
      cache[0] = cities[i];
      console.log(`캐시 있음 : ${cache}`);
      size += 5;
    }
  }

  return size + INITIAL_SIZE;
}
console.log(solution(5, ["a", "b", "c", "b", "a"]));
