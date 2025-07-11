/*
    1. What if we proved less or more number of arguments
    while calling a function?
    2. Setting default value in argument
*/

function abc(num1=34, num2=50) {
    console.log(num1)
    console.log(num2)
}

abc(10, 20)
abc(10)
abc(undefined, 30)
abc(10,20, 30)