const fs = require("fs")

const data = fs.readFileSync("./num.txt").toString().split("\n")
let depth = 0;
let horizontal = 0;
let aim = 0;

for(let i = 0; i < data.length; i++){
  let dataI = data[i].split(" ")
  let val = parseInt(dataI[1])
  switch(dataI[0]){
    case "forward": horizontal += val;
      depth = depth + (aim*val);
      break;
    case "up": aim -= val;
      break;
    case "down": aim += val;
      break;
    default: console.log("error occured at " + i);
  }
}

console.log(depth * horizontal);