const fs = require("fs")

const data = fs.readFileSync("./num.txt")
let num = data.toString().split("\n")
let count = 0;

for(let i = 0; i < num.length; i++){
  let a = parseInt(num[i]) + parseInt(num[i+1]) + parseInt(num[i+2])
	let b = parseInt(num[i+1]) + parseInt(num[i+2]) + parseInt(num[i+3])
	if(a < b) count++;
}

console.log(count);