// 스킬트리 - summer winter coding
// https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  // ex) ["A", "B", "C"]
  let skillOrder = skill.split("");
  let answer = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    // skill Order의 index를 초기화
    let idx = 0;
    let flg = true;
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skillOrder[idx] === skill_trees[i][j]) {
        idx++;
      } else {
        // 같지 않은 경우
        if (skillOrder.includes(skill_trees[i][j])) {
          flg = false;
          break;
        } else {
          continue;
        }
      }
    }
    answer = flg ? answer + 1 : answer;
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
