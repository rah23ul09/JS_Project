/*
    In JS, the argument object is a special array-like object
    that is available within regular [non-arrow] functions.
    It provides a way to access the argument passed to a funtion, even if
    those arguments were not explicitly defined as parameters int he function parameter list.
*/

function calculateSum() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(calculateSum(10, 20, 30))