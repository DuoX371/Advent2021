const fs = require("fs")
const data = fs.readFileSync("./num.txt").toString().trim().split("\n")
const encode = data.map(d => {return d.split("|")[0].trim()})
const val = data.map(d => {return d.split("|")[1].trim()})

let sum = 0;
for(let i = 0; i < data.length; i++){
  let output ="";
  const encCheck = encode[i].split(" ")

  const one = encCheck.find(d => d.length === 2).split("");
  const four = encCheck.find(d => d.length === 4).split("");
  const seven = encCheck.find(d => d.length === 3).split("");
  const eight = encCheck.find(d => d.length === 7).split("");

  //top line
  const top = seven.filter(a => {return !one.includes(a)})
  //bottom and bottom left
  const botNL = eight.filter(a => {return (!four.includes(a) && !top.includes(a))})
  const botNLCount = botNL.map(d => {return encCheck.filter((a) => a.length ===5).reduce((t,c) => t + c.includes(d),0)})

  const bottom = botNLCount[0] === 3 ? botNL[0] : botNL[1]
  const bottomLeft = botNLCount[0] === 3 ? botNL[1] : botNL[0]

  const possibleMid = eight.filter(a => {return (!seven.includes(a) && !botNL.includes(a))})
  
  //2,3,5
  const midCount = possibleMid.map(d => {return encCheck.filter((a) => a.length === 5).reduce((t,c) => t + c.includes(d),0)})

  const mid = midCount[0] === 3 ? possibleMid[0] : possibleMid[1]
  const topL = midCount[0] === 3 ? possibleMid[1] : possibleMid[0]

  const zero = eight.filter(a => {return !mid.includes(a)})

  //0,6,9
  const upperRCount = one.map(d => {return encCheck.filter((a) => a.length === 6).reduce((t,c) => t + c.includes(d),0)})
  const bottomR = upperRCount[0] === 3 ? one[0] : one [1]
  const topR = upperRCount[0] === 2 ? one[0] : one[1]

  const two = eight.filter(a => {return !topL.includes(a) && !bottomR.includes(a)})
  const three = seven.concat(mid).concat(bottom)
  const five = eight.filter(a => {return !topR.includes(a) && !bottomLeft.includes(a)})
  const six = eight.filter(a => {return !topR.includes(a)})
  const nine = eight.filter(a => {return !bottomLeft.includes(a)})

  const valCheck = val[i].split(" ")

  for(let a = 0; a < valCheck.length; a++){
    const current = valCheck[a]
    switch(current.length){
      case 2: output += "1";break;
      case 4: output += "4";break;
      case 3: output += "7";break;
      case 7: output += "8";break;
      default: 
      //0 6 9
      const currentArr = current.split("")
      if(currentArr.length === 6){
        if(arraysEqual(currentArr,zero)) output += "0"
        else if(arraysEqual(currentArr,six)) output += "6"
        else if(arraysEqual(currentArr,nine)) output += "9"
      }
      //2 3 5
      else if(currentArr.length === 5){
        if(arraysEqual(currentArr,two)) output += "2"
        else if(arraysEqual(currentArr,three)) output += "3"
        else if(arraysEqual(currentArr,five)) output += "5"
      }
    }
  }
  sum += parseInt(output)
}
console.log(sum);
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  sortArr(a)
  sortArr(b)
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function sortArr(arr){
  arr.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
  })
}