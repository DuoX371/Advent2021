const fs = require("fs")
const data = fs.readFileSync("./num.txt").toString().split('\n')
let dataI = data.map(function(x){
  return x.replace("\r",'')
})

const input = dataI.map((d) => 
  d.split("->").map((coord) =>{
    const [x, y] = coord.split(",")
    return {x: +x, y: +y}
  })
)
let covered = []
for(let i = 0; i < input.length; i++){
  const current = input[i]
  let cX, cY, bX,bY;
  cX = current[0].x
  cY = current[0].y
  bX = current[1].x
  bY = current[1].y

  let cS = [], cS2 = []
  if(cX != bX && cY != bY) continue;

  if(cX === bX){
    let lowEnd = cY;
    let highEnd = bY;
    if(cY > bY) {lowEnd = bY; highEnd = cY}
    for(let i = lowEnd; i <= highEnd; i++){
      cS2.push(i)
    }
    cS.push(cX)
  }

  if(cY === bY){
    let lowEnd = cX;
    let highEnd = bX;
    if(cX > bX) {lowEnd = bX; highEnd = cX}
    for(let i = lowEnd; i <= highEnd; i++){
      cS.push(i)
    }
    cS2.push(cY)
  }
  
  const cv = cS.flatMap(d => cS2.map(v=> {return {x:d,y:v}}));
  for(let k in cv){
    covered.push(cv[k])
  }
}

const comb = covered.map(values => values.x + "-" + values.y)
var dupl = comb.reduce(function(list, item, index, array) { 
  if (array.indexOf(item, index + 1) !== -1 && list.indexOf(item) === -1) {
    list.push(item);
  }
  return list;
}, []);
console.log(dupl);
console.log(dupl.length);
