const fs = require("fs");
const data = fs.readFileSync("./num.txt").toString().trim().split("\n").map(x => x.trim())

const input = data.shift()
data.shift()

const obj = {}

for(let i = 0; i < data.length; i++){
  const split = data[i].split("->")
  obj[split[0].trim()] = split[1].trim()
}

const steps = 40
let inputArr = input.split('')

for(let i = 0; i < steps; i++){
  console.log(i);
  let newArr = []
  for(let a = 0; a < inputArr.length; a++){
    if(inputArr[a+1] === undefined) continue;
    let f = inputArr[a]
    let s = inputArr[a+1]
    let d = obj[inputArr[a]+inputArr[a+1]]
    if(a === 0) newArr.push(f)
    newArr.push(d)
    newArr.push(s)
  }
  inputArr = newArr
}
const counts = {};

for (const num of inputArr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);

//console.log(3372 - 1051);