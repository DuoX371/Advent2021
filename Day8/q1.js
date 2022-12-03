const fs = require("fs")
const data = fs.readFileSync("./num.txt").toString().trim().split("\n")
let dataI = data.map(d => {return d.split("|")[1].trim()})

let count = 0;
for(let i = 0; i < data.length; i++){
  const check = dataI[i].split(" ")
  for(let a = 0; a < check.length; a++){
    switch(check[a].length){
      case 2: count++;break;
      case 4: count++;break;
      case 3: count++;break;
      case 7: count++;break;
    }
  }
}
console.log(count);