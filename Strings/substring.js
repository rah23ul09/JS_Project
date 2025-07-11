/*
Find position (index) of a substring in main string
*/
let str1 = "ABCDEFG"
console.log(str1.indexOf("G"))
console.log(str1.indexOf("D"))

// index of words from sentence
// will return first index of word
let str2 = "I like skills learning skills new skills"
console.log(str2.indexOf("skills", 0))              // First occurence of word
console.log(str2.lastIndexOf("skills"))             // Last occurence of word

let pos = str2.indexOf("skills")
console.log(str2.indexOf("skills", pos + 1))        // Word occurence after first