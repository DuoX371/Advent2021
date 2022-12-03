const fs = require("fs");
const { off } = require("process");
const data = fs.readFileSync("./num.txt").toString().trim().split("\n").map(x=> x.trim())
const dataI = data.map(b =>  b.split('').map(Number));

const height = dataI.length;
const width = dataI[0].length;
let total = 0;
for(let x = 0; x < height; x++){
  for(let y = 0; y < width; y++){
   if(getPoint(x,y)){
    total += dataI[x][y] + 1
   }
  }
}
console.log(total);

function getPoint(x,y){
  const curr = dataI[x][y];

  const yprev = curr < (dataI[x]?.[y-1] != undefined ? dataI[x][y-1] : 9);
  const ynext = curr < (dataI[x]?.[y+1] != undefined ? dataI[x][y+1] : 9);
  const xprev = curr < (dataI[x-1]?.[y] != undefined ? dataI[x-1][y] : 9);
  const xnext = curr < (dataI[x+1]?.[y] != undefined ? dataI[x+1][y] : 9);

  return (yprev && ynext && xprev && xnext);
}