const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const lines = [];

rl.on("line", (line) => {
    lines.push(line)
}).on("close", () => {
   let strArr = lines.slice(1, lines.length).map((str) => str.split(" "));
let answer = [];
    
for (const value of strArr) {
    const [pre, next] = value;
    const idx = pre.toUpperCase().indexOf("X");
    answer.push(next[idx].toUpperCase());
}

console.log(answer.join(""));
})
