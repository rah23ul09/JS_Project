/*
1. Validating the presence of sub-string in main string 
using "includes" method
2. Validate start and end string
*/

let str1 = "it always seems impossible until it's done always"
let str2 = "always"
let str3 = "it always"
let str4 = "done always"
let pos = str1.indexOf(str2)

console.log("First occurence: " ,str1.includes(str2))            // First occurence
console.log("Second occurence: " ,str1.includes(str2, pos+1))     // Second occurence

console.log("Starts with: " ,str1.startsWith(str3))
console.log("Ends with: ", str1.endsWith(str4))