// 7 primitive data types
/* Null , Number , String , Symbol , Boolean , BigInt, undefined */

let a = null;
let b = 345;
let c = true; //cal also be false
let d = BigInt("567") + BigInt("3")
let e = "Hello"
let f = Symbol("i am a nice symbol")
let g

console.log(a, b, c, d, e, f, g)
console.log(typeof d)

//objects in js
    
const student = {
  name: "Hawa",
  age: 20,
  course: "JavaScript",
  isEnrolled: true
}

console.log(student[name])
