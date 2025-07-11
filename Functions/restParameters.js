/*
    The rest parameters allow a function to accept an indefinite number of argument as an array
*/

function abc(a, b, ...numbers) {
    console.log(a)
    console.log(b)
    console.log(numbers)
    // for (let num of numbers) {
    //     console.log(num)
    // }
}

abc(90, 100, 10, 20, 30, 40 , 50 ,60)