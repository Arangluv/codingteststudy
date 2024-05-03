// 뉴스 클러스터링 - kakao blind 채용
// https://school.programmers.co.kr/learn/courses/30/lessons/17677
const generateClustering = (strArr, dictionary) => {
  let cluster = [];
  for (let i = 0; i < strArr.length - 1; i++) {
    let firstChar = strArr[i];
    let lastChar = strArr[i + 1];
    if (dictionary.get(firstChar) && dictionary.get(lastChar)) {
      cluster.push(`${firstChar}${lastChar}`);
    }
  }
  return cluster;
};
function solution(str1, str2) {
  //대소문자 같은 취급
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let alphabetMap = new Map();
  for (let char of alphabet) {
    alphabetMap.set(char, "1");
  }

  let firstStr = str1.toUpperCase().split("");
  let secondStr = str2.toUpperCase().split("");
  // 각각의 문자열 clustering을 구한다
  let firstCluster = generateClustering(firstStr, alphabetMap);
  let secondCluster = generateClustering(secondStr, alphabetMap);
  let intersection = [];

  let firstMap = new Map();
  let secondMap = new Map();
  for (let cluster of firstCluster) {
    if (firstMap.get(cluster)) {
      firstMap.set(cluster, firstMap.get(cluster) + 1);
    } else {
      firstMap.set(cluster, 1);
    }
  }
  for (let cluster of secondCluster) {
    if (secondMap.get(cluster)) {
      secondMap.set(cluster, secondMap.get(cluster) + 1);
    } else {
      secondMap.set(cluster, 1);
    }
  }
  let unionFirstMap = new Map(firstMap);

  for (let cluster of secondCluster) {
    if (!firstMap.get(cluster) || firstMap.get(cluster) === 0) {
      continue;
    } else {
      intersection.push(cluster);
      firstMap.set(cluster, firstMap.get(cluster) - 1);
    }
  }
  // 여기 까지 잘 구한게 맞음
  // union 구하는 과정에서 set 사용이 miss
  // 이 부분 로직 수정할 것
  for (let [key, value] of secondMap) {
    if (unionFirstMap.get(key)) {
      if (unionFirstMap.get(key) < value) {
        unionFirstMap.set(key, value);
      }
    } else {
      unionFirstMap.set(key, value);
    }
  }
  let union = [];
  for (let [key, value] of unionFirstMap) {
    for (let i = 1; i <= value; i++) {
      union.push(key);
    }
  }

  let answer = union.length !== 0 ? intersection.length / union.length : 1;
  return Math.floor(answer * 65536);
}
console.log(solution("handshake", "shake hands"));
