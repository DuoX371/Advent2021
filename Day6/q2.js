const fs = require("fs")
let count = {}
const data = fs.readFileSync("./num.txt").toString().split(',').map(Number)

const days = 80;

//initialize fish count
for(let k of data){
  if(count[k] === undefined) count[k] = 0
  count[k] += 1
}
//console.log(count);
for(let i = 0; i < days; i++){
  let fish = {}
  for(let k in count){
    //get the current count value
    //k = key which is the count 0 - 8
    const v = count[k]
    // if i === 0 initialize new fish 6 and 8
    // if v fish is higher than 0, minus 1 and add the value
    if(k > 0){
      if(fish[k-1] === undefined) fish[k-1]=0;
      fish[k-1] += v;
    }else{
      //if fish is 0, a new fish is born
      //initialize 6 as reset timer, and 8 as new reset timer.
      if(fish[6] === undefined) fish[6] = 0;
      if(fish[8] === undefined) fish[8] = 0;
      fish[6] += v;
      fish[8] += v;
    }
  }
  count = fish;
}
console.log(Object.values(count).reduce((acc, cur) => {return acc + cur}));