// Purpose of the this coding challenge is to write a code that given a number, returns the corresponding
// Fibonacci number.
// Problem Statement
// Create a function that, given a number, returns the corresponding Fibonacci number.
// Examples:
// fibonacci(7) ➞ 21
// fibonacci(12) ➞ 233
// The first number in the sequence starts at 1 (not 0)


// SOLUTION1
let fibo = prompt("which rank of fibonacci number do you want?")

let num1 =0;
let num2 =1;
let total;
for (let i = 0; i < fibo; i++) {
    total = num1 + num2;
    num1 = num2;
    num2 = total;
}

console.log("fibonacci(" + fibo + ") --> " + total);




//SOLUTION2
let myNum = prompt("which rank of fibonacci number do you want?")
let myArray = [1, 1]
function fibonacci(myNum) {
    while (myNum != (myArray.length - 1)){
    myArray.push(myArray[myArray.length -1] + myArray[myArray.length -2])
    }
    console.log(`fibonacci(${myNum}) --> ${myArray[myArray.length - 1]}`)
}
fibonacci(myNum)
