/*
Functions:
    1. Block of code which perform specific task
    2. Can be called multiple times
    3. Return the value
*/

function addNumbers(num1, num2) {
    return num1 + num2
}

function abc() {
    console.log("I am function without argument")
}


let x = addNumbers(10, 20)
console.log(x)
abc()