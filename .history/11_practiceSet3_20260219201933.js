let marks = {
    harry: 90,
    shubham: 80,
    rohan: 70
}
for(let i=0; i<Object.keys(marks).length; i++){
    let key = Object.keys(marks)[i];
    console.log("Marks of " + key + " are " + marks[key])
}