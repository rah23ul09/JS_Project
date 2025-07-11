/*
    1. Converting array to string : JOIN
    2. Get string representation of array : TOSTRING
    3. Converting string to array : SPLIT
    4. Reversing an array : REVERSE
    5. Get section of array : SLICE
*/

let color = ["Red", "Blue", "Green", "Black", "Lavender"]

// difference between "join()" and "toString()" is 
// we can use delimiter with join
console.log(color.join(" _ "))
console.log(color.toString())
console.log(color.reverse())
console.log(color.slice(1))

let a = "A_B_C_D"
console.log(a.split("_"))
