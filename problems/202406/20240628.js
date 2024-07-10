const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let lines = fs.readFileSync(filePath).toString().split("\n");

const [N, M] = lines[0].split(" ").map((char) => parseInt(char));
const weigths = lines[1].split(" ").map((char) => parseInt(char));
// index 정보처리를 위해 -1
const relationships = lines
  .slice(2, lines.length)
  .map((rel) => rel.split(" ").map((char) => parseInt(char) - 1));
const maps = new Map();
const lossMemory = new Set();
// 관계가 없는 사람을 찾기위해 선언
const visited = Array(N).fill(false);
for (rel of relationships) {
  const [first, second] = rel;
  // 방문처리
  visited[first] = true;
  visited[second] = true;
  if (weigths[first] > weigths[second]) {
    // 첫번째 사람이 큰 경우
    maps.set(first, weigths[first]);
    if (maps.get(second)) {
      maps.delete(second);
    }
    lossMemory.add(second);
  }
  if (weigths[first] < weigths[second]) {
    // 두번째 사람이 큰 경우
    maps.set(second, weigths[first]);
    if (maps.get(first)) {
      maps.delete(first);
    }
    lossMemory.add(first);
  }
  if (weigths[first] === weigths[second]) {
    if (maps.get(first)) {
      maps.delete(first);
    }
    lossMemory.add(first);

    if (maps.get(second)) {
      maps.delete(second);
    }
    lossMemory.add(second);
  }
}
let noRelationshipsCount = 0;
for (let v of visited) {
  if (!v) {
    noRelationshipsCount++;
  }
}
for (let [k, _] of maps) {
  if (lossMemory.has(k)) {
    maps.delete(k);
  }
}
console.log(lossMemory);
console.log(noRelationshipsCount + maps.size);
