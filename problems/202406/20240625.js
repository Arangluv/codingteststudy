const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

rl.on("line", (line) => {
  lines.push(line);
}).on("close", () => {
  const [N, M] = lines[0];
  const scores = lines[1].split(" ");
  const sections = lines
    .slice(2, lines.length - 1)
    .map((str) => str.split(" "));
  let answer = [];
  for (let [pre, next] of sections) {
    pre = parseInt(pre);
    next = parseInt(next);
    let totalScore = 0;
    for (let i = pre - 1; i < next; i++) {
      totalScore += parseInt(scores[i]);
    }
    const average = (totalScore / (next - pre + 1)).toFixed(2);
    answer.push(average);
  }
  answer.forEach((str) => {
    console.log(str);
  });
});

// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let lines = fs.readFileSync(filePath).toString().split("\n");

// const [N, M] = lines[0];
// const scores = lines[1].split(" ");
// const sections = lines.slice(2, lines.length - 1).map((str) => str.split(" "));
// let answer = [];
// console.log("sections");
// console.log(sections);
// for (let [pre, next] of sections) {
//   pre = parseInt(pre);
//   next = parseInt(next);
//   console.log("pre");
//   console.log(pre);
//   console.log("next");
//   console.log(next);
//   let totalScore = 0;
//   for (let i = pre - 1; i < next; i++) {
//     totalScore += parseInt(scores[i]);
//   }
//   const average = (totalScore / (next - pre + 1)).toFixed(2);
//   answer.push(average);
// }
// console.log("answer ? ");
// console.log(answer);
