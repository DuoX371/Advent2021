const input = "5 6 1 9 8 7".split(" ").map(Number).sort((a,b) => {return a-b})


let left = [], right = [];
let leftSum, rightSum, diff;
const inputLength = input.length;

for(let i = 0; i < inputLength; i++){
    if(leftSum === undefined) leftSum = 0
    if(rightSum === undefined) rightSum = 0
    if(diff === undefined) diff = 0
    
    if(diff > 0) right.push(input.pop())
    else left.push(input.pop())
    leftSum = left.reduce((sum, val) => {return sum + val},0)
    rightSum = right.reduce((sum, val) => {return sum + val},0)
    diff = leftSum - rightSum
}
left.sort((a,b) => {return a-b})
right.sort((a,b) => {return a-b})

let a,b;
for(let x = 0; x < left.length; x++){
    for(let y = 0; y < right.length; y++){
        const findDiff = left[x] - right[y]
        if(findDiff !== diff/2) continue;
        a = x
        b = y
    }
}

let t = left[a];
left[a] = right[b]
right[b] = t

const fSumL = left.reduce((sum, val) => {return sum + val},0)
const fSumR = right.reduce((sum, val) => {return sum + val},0)

//console.log(left + " " + fSumL)
//console.log(right + " " + fSumR)
if(fSumL === fSumR) console.log(true)
else console.log(false)
