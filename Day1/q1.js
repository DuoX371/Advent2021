const fs = require("fs")

const data = fs.readFileSync("../num.txt")
let num = data.toString().split("\n")
let count = 0;

for(let i = 0; i < num.length; i++){
  if(parseInt(num[i]) < parseInt(num[i+1])) count++
}

console.log(count);