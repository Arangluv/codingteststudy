// 택배상자
// https://school.programmers.co.kr/learn/courses/30/lessons/131704

// 서브 - 본컨테이너 옮겨다닐 수 있다
// [1,2,4,3,5] -> 5

function solution(order) {
  let truck = 0;
  let main_trail_index = 1;

  const sub_trail = [];

  for (const o of order) {
    while (main_trail_index <= o) {
      sub_trail.push(main_trail_index++);
    }
    if (sub_trail.at(-1) !== o) break;
    sub_trail.pop();
    truck++;
  }
  return truck;
}

console.log(solution([1, 2, 4, 3, 5]));
