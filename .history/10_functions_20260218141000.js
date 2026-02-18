//using functions to avoid writing the same code again and again

function average(x,y){
    return 1 + (x+y)/2
}

const sum = (p,q) => {
    return p+q;
}

let a = 3;
let b = 4;
let c = 5;

console.log("one plus Average of a, b is ", average(a,b))
console.log("one plus Average of a and c is", average(a,c))
console.log("one plus Average of b and c is", average(b,c))  

console.log("sum of a and b is ", sum(a,b))
console.log("sum of a and c is ", sum(a,c))
console.log("sum of b and c is ", sum(b,c))

