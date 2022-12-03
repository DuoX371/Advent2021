const fs = require("fs");
const data = fs.readFileSync("./num.txt").toString().trim().split("\n").map(x => x.trim().split("").map(Number))
const steps = 100;

let flash = 0;

const addValue = (x,y) =>{
  if (y<0 || y>=data.length || x<0 || x>=data[0].length) return;
  data[x][y]++

  if(data[x][y] == 10){
    flash++;
  addValue(x-1,y-1)
  addValue(x-1,y)
  addValue(x-1,y+1)
  addValue(x,y-1)
  addValue(x,y+1)
  addValue(x+1,y-1)
  addValue(x+1,y)
  addValue(x+1,y+1)
  }
  
}

for(let i = 0; i < steps; i++){
  //add value
  for(let x = 0; x < data[0].length; x++){
    for(let y = 0; y < data.length; y++){
      addValue(x,y);
    }
  }
  
  //do checks
  for (let x=0;x<10;x++) {
    for (let y=0;y<10;y++) {
      if (data[x][y] > 9) data[x][y] = 0; 
    }
  }
}



console.log(flash);
