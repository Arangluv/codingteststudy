function solution(begin, target, words) {
  let answer = 0;
  let wordLength = words[0].length;
  let wordItems = words.map((item) => item.split(""));
  let splitBegin = begin.split("");
  let visited = Array(words.length).fill(false);
  const queue = [[splitBegin, visited, 0]];
  while (queue.length) {
    let [item, visitedArr, cnt] = queue.shift();

    if (item.join("") === target) {
      if (answer === 0) {
        answer = cnt;
      } else {
        answer = Math.min(answer, cnt);
      }
    }
    for (let i = 0; i < words.length; i++) {
      let count = 0;
      // 최소 조건 만족 검사
      for (let j = 0; j < wordLength; j++) {
        if (wordItems[i][j] === item[j] && !visitedArr[i]) {
          count++;
        }
      }
      if (count === wordLength - 1 && !visitedArr[i]) {
        visitedArr[i] = true;
        queue.push([wordItems[i], visitedArr, cnt + 1]);
      }
    }
  }
  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
