console.log("Operators in JS")

let a = 45;
let b = 4;

console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a * b = ", a*b)
console.log("a / b = ", a/b)
console.log("a ** b = ", a**b) //a to the power b
console.log("a % b = ", a%b) //remainder

console.log("++a : ",++a) //46
console.log("a++ : ",a++)  // 46 //first a will be printed and then the increment is performed
console.log("--a : ",--a) //46
console.log("a-- : ",a--) // 46 //The same case as before
console.log("a = ",a) //45
console.log("a-- : ", a--) //45

//Assignment Operators

let assignment = 1;
assignment += 5; //same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 //same as assignment = assignment - 5
console.log("a is now = ", a)

// Comparison Operators

let comp1 = 6;
let comp2 = 7;

console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

//  Logical Operators

let x = 5;
let y = 6;

console.log(x < y && x == 5 )
console.log(x > y || x == 6)
console.log(!false)