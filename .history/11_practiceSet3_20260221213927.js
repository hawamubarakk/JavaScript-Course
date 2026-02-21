//To print the marks of students stored in an object using for loop

let marks = {
    harry: 90,
    shubham: 80,
    rohan: 70
}
for(let i=0; i<Object.keys(marks).length; i++){
    let key = Object.keys(marks)[i];
    console.log("Marks of " + key + " are " + marks[key])
}

//using for in loop to print the marks of students stored in an object

for(let key in marks){
    console.log("Marks of " + key + " are " + marks[key])
}


// Problem 3

let cn = 43
let i

while(i != cn) {
    console.log("Try again")
    i = prompt("Enter a number")
}

console.log("You have entered a correct number")

// Problem 4

function mean(a,b,c,d,e){
    return (a+b+c+d+e)/5
}

console.log(mean(2,4,6,8,10))

