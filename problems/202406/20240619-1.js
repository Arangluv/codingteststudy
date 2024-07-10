const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const arr = input[1].split(" ").map((char) => parseInt(char));
let answer = 1;

for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % i === 0) count++;
  }
  answer = Math.max(count, answer);
}
console.log(answer);
