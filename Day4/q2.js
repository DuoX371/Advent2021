const fs = require("fs")

const data = fs.readFileSync("../num.txt").toString().split('\r\n')

const read = "17,58,52,49,72,33,55,73,27,69,88,80,9,7,59,98,63,42,84,37,87,28,97,66,79,77,61,48,83,5,94,26,70,12,51,82,99,45,22,64,10,78,13,18,15,39,8,30,68,65,40,21,6,86,90,29,60,4,38,3,43,93,44,50,41,96,20,62,19,91,23,36,47,92,76,31,67,11,0,56,95,85,35,16,2,14,75,53,1,57,81,46,71,54,24,74,89,32,25,34"
.split(",").map(el => +el)
const dataI = data.filter(e => {return e != ""})
//creating the grid
let grid = dataI.map(
  board =>  board.split('\n')
    .map(line => line.trim()
      .replace(/  /g, " ")
      .split(' ')
      .map(el => ({value: +el, marked: false}))
    )
);
let winningIndex, lastValue;

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
        winningIndex = v;
        lastValue = read[i];
        if(grid.length <= 5) win = true;
        else removeGridOnWin(winningIndex,grid)
       }
    }
  }

  //check for horizontal win
  for(let h = 0; h < grid[0][0].length; h++){
    let count = 0, line = grid.length/5;
    let ind = 0;
    let horizontal = 0;
    for(let gridData of grid){
      if(line === 100) {horizontal = 0; ind = 0}
      if(count === 5){count = 0; horizontal = 0;}
      const check = gridData[0][h]
      if(check.marked === true) horizontal++;
      if(horizontal === 5){
        winningIndex = ind
        lastValue = read[i]
        if(grid.length <= 5) win = true;
        else removeGridOnWin(winningIndex, grid)
      }
      count++;
      ind++;
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

function removeGridOnWin(index,grid){
  const num = Math.floor(index/10)
  if(index % 10 < 5){
    for(let i = 0; i < 5; i++){
      const winIndex = parseInt("" + num + 0)
      grid.splice(winIndex,1)
    }
  }else{
    for(let i = 5; i < 10; i++){
      const winIndex = parseInt("" + num + 5)
      grid.splice(winIndex,1)
    }
  }
}

