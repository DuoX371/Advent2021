const fs = require("fs");
const data = fs.readFileSync("./num.txt").toString().trim().split("\n").map(x => x.trim())

const input = {"(":")","{":"}","[":"]","<":">"}
const points = {")":3,"]":57,"}":1197,">":25137}
const err = []
for(let i = 0; i < data.length; i++){
  const current = data[i].split("")
  const d = []
  for(let a = 0; a < current.length; a++){
    const cur = current[a]
    if(input[cur]) d.push(cur)
    else {
      const last = d.pop()
      if(input[last] != cur) err.push(cur)
    }
  }
}
const ans = err.reduce((t,data) => t+points[data],0)
console.log(ans);