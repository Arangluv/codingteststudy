function solution(people, limit) {
  let answer = 1;
  let peopleArr = people.sort((a, b) => a - b);
  let temp = limit;
  for (let i = 0; i <= peopleArr.length - 2; i++) {
    temp -= peopleArr[i];
    if (temp - peopleArr[i + 1] < 0) {
      temp = limit;
      answer++;
    }
  }

  return answer;
}
solution([30, 40, 60, 70], 100);
