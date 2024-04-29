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
  cities = cities.map((str) => str.toUpperCase());
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  let size = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    let idx = cache.indexOf(cities[i]);
    if (idx === -1) {
      // cache에 없는 경우
      if (cache.length !== cacheSize) {
        cache.unshift(cities[i]);
        size += 5;
        continue;
      }
      cache.pop();
      cache.unshift(cities[i]);
      size += 5;
      continue;
    } else {
      // cache에 있는 경우
      let temp = cache[idx];
      for (let j = idx - 1; j >= 0; j--) {
        cache[j + 1] = cache[j];
      }
      cache[0] = temp;
      size += 1;
      continue;
    }
  }
  return size;
}
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
