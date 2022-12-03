const fs = require("fs")
const data = fs.readFileSync("./num.txt").toString().split(',').map(Number)
const min = Math.min.apply(Math, data)
const max = Math.max.apply(Math, data)
let lowestFeul;
for(let i = min; i < max; i++){

  const feul = data.reduce((t, d) => {return t + getDistanceCost(Math.abs(i-d))},0)

  if(lowestFeul === undefined) lowestFeul = feul
  if(lowestFeul > feul) lowestFeul = feul
}
console.log(lowestFeul);
function getDistanceCost(distance){
  let feulDistance = 0;
  for(let i = 1; i <= distance; i++) feulDistance += i
  return feulDistance;
}