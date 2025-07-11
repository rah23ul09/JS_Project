/*
Extracting part of string:
    1. substr -> begin index and length of the cut -> deprecated
    2. substring -> begin index and end index in the cut
    3. slice:
        a: slice with positive begin and end index
        b: slice with negative begin and end index
*/

let str1 = "Your order number : DFE:0342T:123"
let str2 = " order number : "
console.log(str1.substring(4, 14))
// console.log(str1.substring(-1, -5))
console.log(str1.indexOf(str2)+str2.length)

// slice
console.log(str1.slice(5))
console.log(str1.slice(-5))