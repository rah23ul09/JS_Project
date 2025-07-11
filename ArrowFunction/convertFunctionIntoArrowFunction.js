/*
    convert normal function into Arrow Function
*/

let multiply = function(num1, num2) {
    return num1 * num2
}


//Arrow function are similar to lambda function in java
let multiply1 = (num1, num2) => num1 * num2


// create arrow function with single argument
let sqrtAndDivide = num3 => num3*num3/2

// create arrow function with no argument
let greet = () => console.log("Gut Morgan")


console.log(multiply(10, 30))
console.log(multiply1(20, 30))
console.log(sqrtAndDivide(14))
greet()
