/*let a = prompt("Hey whats your age?") //prompt needs input
a = Number.parseInt(a) //convert the string to a number

let b = alert("hello") //alert is a msg that appears in pop-up
//these all are for browsers ye vs mn work nhi krty
*/

let a = 5;
if(a <= 18){
    console.log("This is not valid age");
}
else if (a >= 18 && a < 50){
    console.log("This is the valid age");
}
else {
    console.log("not valid")
}

// Switch case practice
switch(a) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
}
