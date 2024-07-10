const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let lines = fs.readFileSync(filePath).toString().split("\n");

const [N, maxWeight, K] = lines[0].split(" ");
const rails_weight = lines[1].split(" ");
const visited = Array(parseInt(N)).fill(false);

// 해당 레일 순서대로 일했을 때 최소 무게 구하기
function simulate(array, basket_weight, works) {
  let weight_sum = 0; // 총 택배 무게
  let basket = 0; // 현재 시점 바구니 무게 합
  let idx = 0;

  for (let cnt = 0; cnt < works; cnt++) {
    // 현재 시점 바구니 무게가 꽉 찰 때까지
    while (basket + array[idx] <= basket_weight) {
      basket += array[idx];
      idx = (idx + 1) % array.length;
    }
    weight_sum += basket;
    basket = 0; // 현재 시점 바구니 무게 reset
  }

  return weight_sum;
}
// 가능한 모든 레일 배치의 경우의 수 구하기
let minWeigth = Infinity;
const dfs = (list, n) => {
  if (n === parseInt(N)) {
    // 담겨진 list의 item의 수와 rails_weight의 수가 같다
    // 담긴 list를 rail에 push
    minWeigth = Math.min(
      minWeigth,
      simulate(list, parseInt(maxWeight), parseInt(K))
    );
    return;
  }
  for (let i = 0; i < parseInt(N); i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs([...list, parseInt(rails_weight[i])], n + 1);
      visited[i] = false;
    }
  }
};
// dfs 이후 모든 rails 배치가 나온다
dfs([], 0);
// 초기 minWeigth를 아주 큰 수로 초기화
console.log(minWeigth);
