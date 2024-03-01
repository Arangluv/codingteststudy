const solution = (nums) => {
  const set = new Set();
  const arr = nums.split("");
  dfs(set, arr, "");
  return set.size;
};
const dfs = (set, arr, fixed) => {
  // 탈출조건
  if (arr.length >= 1) {
    for (let i = 0; i < arr.length; i++) {
      let newFixed = fixed + arr[i];
      let copiedArr = [...arr];
      copiedArr.splice(i, 1);
      if (isPrimeNum(parseInt(newFixed))) {
        set.add(parseInt(newFixed));
      }
      dfs(set, copiedArr, newFixed);
    }
  }
};
function isPrimeNum(num) {
  if (num === 1 || num === 0) {
    return false;
  }

  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++;
    }
    if (count !== 0) break;
  }
  // count가 0이면 소수
  return count === 0;
}
solution("17");
