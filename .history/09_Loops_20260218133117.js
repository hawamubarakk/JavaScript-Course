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
} //var is used for global variables and let is for block variable 



let obj = {
    Ali : 54,
    Zain: 23,
    Sara: 76,
}

//for in loop

for (let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

//for of loop

for (let b of "Zain") {
    console.log(b)
}


// While loops

let n = prompt("Enter any number");
n = Number.parseInt(n)

let i = 0;
while(i < n){
    console.log(i);
    i++;
}
*/

// Do while loop 

let num = prompt("Enter any number");
num = Number.parseInt(num)

let i = 0;

do{
    console.log(i)
    i++
}while(i < num)

