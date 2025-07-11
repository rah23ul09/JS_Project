/*
    An immediate invoke funtion expression is a Javascript desing
    patter that involved defining and executing function immediately after
    its creation. This pattern is commonly used to create a private scope for
    variables and functios withing the function, preventing them from polluting
    the global scope
*/

// making variables private using IIFE (Immediate Invokie Function Expression)
(function () {
    let a = 100
    console.log(a)
})()

