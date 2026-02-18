/*for(let i = 0 ; i < 5 ; i++){
    console.log(i)
}

for(let i = 0; i < 500; i++){
    console.log(i+1)
}



//Program to add n natural numbers

let sum=0;
let n = prompt("Enter any natural number :");

n = Number.parseInt(n);
for (let i = 1; i < n; i++){
    sum += i ;
}
*/
//for in loop
let obj = {
    Ali : 54,
    Zain: 23,
    Sara: 76,
}
for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}