/*
Basic string operation:
    1. String compare
    2. Upper/lower case
    3. Trim
    4. Concatenation
    5. Index and Length
*/

let str1 = "     My name is Rahul Singh    "
let str2 = "MY NAME IS RAHUL SINGH"
let str3 = "ABDCE"

// comparing string
console.log(str1 === str2)

// convert upper/ lower case
console.log(str1.toUpperCase === str2.toUpperCase)
console.log(str1.toLowerCase === str2.toLowerCase)

// trim the string- remove space at start and end
console.log(str1.trim())
console.log(str1.trimEnd())
console.log(str1.trimStart())

// concatenate string
console.log(str1.trim() + " / " + str2)
console.log(str1.trim().concat(" / ", str2))

//Index and Length
console.log(str3.length)
console.log(str3.indexOf("A"))