const fs = require("fs")

const data = fs.readFileSync("../num.txt").toString().split("\n")
let dataI = data.map(function(x){
  return x.replace("\r",'')
})

let output = "";
for(let i = 0; i< dataI[0].length; i++){
  let arr = []
  //dataI.map((f) =>{
    //arr.push(f[i])
  //})
  arr = dataI.map(f => f[i])
  output += mode(arr)
}

let oup2 = output.split('').map(x =>{
  return(x ==1)? 0:1;
}).join('');

console.log(parseInt(output,2) * parseInt(oup2,2));


function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  ).pop();
}
