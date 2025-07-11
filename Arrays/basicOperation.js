/*
    Add one or more items in the end of array - PUSH
    Remove the last item from the array -POP
    Add one or more item to the start of array - UNSHIFT
    Remove teh first item from an array - SHIFT
    Search element in array - Includes, indexOf, lastIndexof
*/

let a = [10, 20, 30, 40, 50, 60, 30]

a.push(70, 80)
console.log(a)
console.log("------------------------------------")
a.pop()
console.log(a)
console.log("------------------------------------")
a.unshift(8, 9)
console.log(a)
console.log("------------------------------------")
a.shift()
console.log(a)

// Search element in array
console.log(a.includes(10))
console.log(a.indexOf(40))
console.log(a.lastIndexOf(30))