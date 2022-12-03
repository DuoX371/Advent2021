const fs = require("fs")
let obj = {}
let c = 0;
const data = fs.readFileSync("./num.txt").toString().split(',').map(d => {c++;return obj[c] = +d})

const days = 80;
let dataArr = data;
for(let i = 0; i < days; i++){
  console.log(i);

  for(let k in obj){
    obj[k] -= 1
  }
  for(let k in obj){
    if(obj[k] < 0){
      c++;
      obj[k] = 6
      obj[c] = 8
    }
  }
}

console.log(Object.keys(obj).length);