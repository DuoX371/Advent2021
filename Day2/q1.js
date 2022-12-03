const fs = require("fs")

const data = fs.readFileSync("./num.txt").toString().split("\n")
let depth = 0;
let horizontal = 0;
for(let i = 0; i < data.length; i++){
  let dataI = data[i].split(" ")
  switch(dataI[0]){
    case "forward": horizontal += parseInt(dataI[1]); break;
    case "up": depth -= parseInt(dataI[1]); break;
    case "down": depth += parseInt(dataI[1]); break;
    default: console.log("error occured at " + i);
  }
}

console.log(depth);
console.log(horizontal);
console.log(depth * horizontal);