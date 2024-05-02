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
  for (let cluster of firstCluster) {
    if (firstMap.get(cluster)) {
      firstMap.set(cluster, firstMap.get(cluster) + 1);
    } else {
      firstMap.set(cluster, 1);
    }
  }
  for (let cluster of secondCluster) {
    if (!firstMap.get(cluster) || firstMap.get(cluster) === 0) {
      continue;
    } else {
      intersection.push(cluster);
      firstMap.set(cluster, firstMap.get(cluster) - 1);
    }
  }
  console.log("intersection");
  console.log(intersection);
  // 여기 까지 잘 구한게 맞음
  // union 구하는 과정에서 set 사용이 miss
  // 이 부분 로직 수정할 것

  let union = new Set([...firstCluster, ...secondCluster]); // 합집합을 구하기 위해
  console.log("union");
  console.log(union);
  let answer = union.size !== 0 ? intersection.length / union.size : 1;
  return Math.floor(answer * 65536);
}
console.log(solution("handshake", "shake hands"));
