// For...of loop is used to iterate over array
// For....each loop 

let number = [5, 13, 9, 3, 88]
for (const num of number) {
    console.log(num)
}

console.log("------------------------------------")

number.forEach(function (item, indexOf, array) {
    console.log("Index : " + indexOf + " || Test : " + item + " || Array : " + array)
})