const fs = require("fs")

const data = fs.readFileSync("../num.txt").toString().split("\n")
let dataI = data.map(function(x){
  return x.replace("\r",'')
})
let dataI2 = dataI
let dataI3 = dataI

let oxygenR = "";
let co2R = "";
for(let i = 0; i< dataI[0].length; i++){
  let arr = []
  arr = dataI2.map(f => f[i])

  let o;
  if(modeArray(arr).length > 1) o = "1"
  else o = modeArray(arr)[0]
  dataI2 = dataI2.filter((d) => {if(d.charAt(i) === o) return d} ) 
  if(dataI2.length <= 1) {oxygenR = dataI2[0]; break;}
}

for(let i = 0; i< dataI[0].length; i++){
  let arr = []
  arr = dataI3.map(f => f[i])
  let o;
  if(modeArray(arr).length > 1) o = "0"
  else {
    if(modeArray(arr)[0] === '0') o = "1"
    else o = '0'
  }
  dataI3 = dataI3.filter((d) => {if(d.charAt(i) === o) return d} )
  if(dataI3.length <= 1) {co2R = dataI3[0]; break;}
}

console.log(oxygenR);
console.log(co2R);
console.log(parseInt(oxygenR,2) * parseInt(co2R,2));

function modeArray(array) {
  if (array.length == 0) return null;
  var modeMap = {},
    maxCount = 1,
    modes = [];

  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  return modes;
}
