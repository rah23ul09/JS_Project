/*
    Hoisting is a behavior in JS where variabl and function declarations
    are moved to the top of their containing scope during the compilation phase
    before the code is executed.

    Functions are hoisted but function expression are not
*/

//calling function before declaration
abc()
xyz()

function abc() {
    console.log(200)
}

//declaring as function expression
let xyz = function (){
    console.log(300)
}