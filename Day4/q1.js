const fs = require("fs")

const data = fs.readFileSync("./num.txt").toString().split('\r\n')

const read =  "50,68,2,1,69,32,87,10,31,21,78,23,62,98,16,99,65,35,27,96,66,26,74,72,45,52,81,60,38,57,54,19,18,77,71,29,51,41,22,6,58,5,42,92,85,64,94,12,83,11,17,14,37,36,59,33,0,93,34,70,97,7,76,20,3,88,43,47,8,79,80,63,9,25,56,75,15,4,82,67,39,30,89,86,46,90,48,73,91,55,95,28,49,61,44,84,40,53,13,24"
.split(",").map(el => +el)
const dataI = data.filter(e => {return e != ""})
//creating the grid
const grid = dataI.map(
  board =>  board.split('\n')
    .map(line => line.trim()
      .replace(/  /g, " ")
      .split(' ')
      .map(el => ({value: +el, marked: false}))
    )
);

let wonI, winningIndex, lastValue;

for(let i = 0; i <read.length; i++){
  for(let b = 0; b < grid.length; b++){
    const current = grid[b][0];
    for(let key in current){
      if(current.hasOwnProperty(key)){
        if(current[key].value === read[i]) current[key].marked = true;
      }
    }
  }

  let win = false;
  //check for vertical win
  for(let v = 0; v < grid.length; v++){
    let vertical = 0;
    const check = grid[v][0]
    for(let key in check){
      if(check[key].marked === true) vertical++;
      if(vertical === 5) {
        win = true; 
        winningIndex = v;
        lastValue = read[i];
        console.log("Vertical Win");
       }
    }
  }

  //check for horizontal win
  for(let h = 0; h < grid[0][0].length; h++){
    let horizontal = 0;
    let count = 0;
    for(let gridData of grid){
      const check = gridData[0][h]
      if(check.marked === true) horizontal++;
      else horizontal = 0;
      if(horizontal === 5){
        win = true;
        winningIndex = count;
        lastValue = read[i]
        console.log("Horizontal Win");
      }
      count++;
    }
  }

  if(win) break;
}

const sum = getWinningGridUnmarkedSum(winningIndex, grid);
const ans = sum * lastValue;
console.log(ans);

function getWinningGridUnmarkedSum(index, grid){
  let total = 0;
  const num = Math.floor(index/10)
  if(index % 10 < 5) {
    for(let i = 0; i < 5; i++){
      const winIndex = parseInt("" + num + i);
      const winningGrid = grid[winIndex][0]
      for(let key in winningGrid){
        if(winningGrid[key].marked === false) total += winningGrid[key].value
      }
    }
  }else{
    for(let i = 5; i < 10; i++){
      const winIndex = parseInt("" + num + i);     
      const winningGrid = grid[winIndex][0]
      for(let key in winningGrid){
        if(winningGrid[key].marked === false) total += winningGrid[key].value
      } 
    }
  }
  return total;
}