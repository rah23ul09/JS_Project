/*
    Concept of Promises: It represent the eventual result of asynchronous operation.

    Pending: The initial stage, indirecting that the promise is still working on its result.
    Fullfilled: The state when the operation has completed successfully, returning a value.
    Rejected: The state when the operation has failed, typically with an error

    Promise Methods :
    then(), catch() and finally()

*/ 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.random()
        console.log(num)
        if(num >= 0.2) {
            resolve(num)
        } else {
            reject(num)
        }
    }, 3000)
})

promise.then((res) => {
    console.log("Promise is resolved", res)
})

promise.catch((rej) => {
    console.log("Promise is rejected", rej)
})

promise.finally(() => {
    console.log("Promise is completed")
})

console.log("Program continues...")