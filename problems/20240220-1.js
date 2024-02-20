// 모의고사 (완전탐색)
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 1번 수포자가 찍는 방식
// 1, 2, 3, 4, 5 ...
// 2번 수포자가 찍는 방식
// 2, 1, 2, 3, 2, 4, 2, 5 ...
// 3번 수포자가 찍는 방식
// 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ...
function solution(answers) {
  const first = {
    id: 1,
    arr: [1, 2, 3, 4, 5],
    idx: 0,
    count: 0,
  };
  const second = {
    id: 2,
    arr: [2, 1, 2, 3, 2, 4, 2, 5],
    idx: 0,
    count: 0,
  };
  const thrid = {
    id: 3,
    arr: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    idx: 0,
    count: 0,
  };

  answers.forEach((item) => {
    if (first.idx >= first.arr.length) first.idx = 0;
    if (second.idx >= second.arr.length) second.idx = 0;
    if (thrid.idx >= thrid.arr.length) thrid.idx = 0;

    if (item === first.arr[first.idx]) {
      first.count++;
      first.idx++;
    } else {
      first.idx++;
    }
    if (item === second.arr[second.idx]) {
      second.count++;
      second.idx++;
    } else {
      second.idx++;
    }
    if (item === thrid.arr[thrid.idx]) {
      thrid.count++;
      thrid.idx++;
    } else {
      thrid.idx++;
    }
  });

  let answer = [];
  let temp = [first, second, thrid];
  temp = temp.filter((item) => item.count !== 0);
  if (temp.length === 0) {
    return answer;
  }
  temp.sort((a, b) => b.count - a.count);
  answer.push(temp[0].id);
  let obj = temp[0];
  for (let i = 1; i < temp.length; i++) {
    if (obj.count === temp[i].count) {
      answer.push(temp[i].id);
    }
  }
  return answer;
}

console.log(solution([1, 3, 2, 4, 2]));

// 이런식으로 %를 활용하여 깔끔하게 풀 수 있다.

// function solution(answers) {
//     var answer = [];
//     const man1 = [1, 2, 3, 4, 5];
//     const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
//     const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     let count = [0, 0, 0];

//     for(let i = 0; i < answers.length; i++) {
//         if(answers[i] == man1[i % man1.length]) ★★★ count[0]++;
//         if(answers[i] == man2[i % man2.length]) count[1]++;
//         if(answers[i] == man3[i % man3.length]) count[2]++;
//     }

//     const max = Math.max(count[0], count[1], count[2]); ★★
//     for(let i = 0; i < count.length; i++) {
//         if(max == count[i]) answer.push(i + 1); ★
//     }

//     return answer;
// }
