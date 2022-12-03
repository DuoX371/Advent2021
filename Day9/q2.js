const fs = require("fs");
const data = fs.readFileSync("./num.txt").toString().trim().split("\n").map(x=> x.trim())
const dataI = data.map(b =>  b.split('').map(Number));

const height = dataI.length;
const width = dataI[0].length;

let basins = [];
for(let x = 0; x < height; x++){
  for(let y = 0; y < width; y++){
   if(!getPoint(x,y)) continue;

   let arr = []
   arr.push([x,y])
   let size = 0;
   while(arr.length > 0){
    const [x1,y1] = arr.pop()
    if(!getPointB9(x1,y1)) continue;
    if(dataI[x1][y1] === false) continue;

    dataI[x1][y1] = false;
    arr = arr.concat(getPointB9(x1,y1))
    size++;
   }
   basins.push(size)
  }
}

const res = basins.sort((a,b)=> b-a).slice(0, 3).reduce((t, d) => t * d,1)
console.log(res);

function getPoint(x,y){
  const curr = dataI[x][y];
  const yprev = curr < (dataI[x]?.[y-1] != undefined ? dataI[x][y-1] : 9);
  const ynext = curr < (dataI[x]?.[y+1] != undefined ? dataI[x][y+1] : 9);
  const xprev = curr < (dataI[x-1]?.[y] != undefined ? dataI[x-1][y] : 9);
  const xnext = curr < (dataI[x+1]?.[y] != undefined ? dataI[x+1][y] : 9);

  return (yprev && ynext && xprev && xnext);
}

function getPointB9(x,y){
  const curr = dataI[x][y];
  let arr = []
  if(curr >= 9) return false;
  if(dataI[x]?.[y-1] != undefined) {arr.push([x,y-1])}
  if(dataI[x]?.[y+1] != undefined) {arr.push([x,y+1])}
  if(dataI[x-1]?.[y] != undefined) {arr.push([x-1,y])}
  if(dataI[x+1]?.[y] != undefined) {arr.push([x+1,y])}
  return arr;
}