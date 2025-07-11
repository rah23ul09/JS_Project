/*
    1. Promises are better than callback for complex operation
    2. getOrderDeatils(3sec) -> processOrder(3sec) -> createTrade(2 sec) -> processTrade(5sec) -> settleTrade(3sec)
*/

// function getOrderDeatils(callback) {
//     setTimeout(() => {
//         console.log("Order details received")
//         callback()
//     }, 3000)
// }

// function processOrder(callback) {
//     setTimeout(() => {
//         console.log("Order processed")
//         callback()
//     }, 3000)
// }

// function createTrade(callback) {
//     setTimeout(() => {
//         console.log("Trade created")
//         callback()
//     }, 2000)
// }

// function processTrade(callback) {
//     setTimeout(() => {
//         console.log("Trade processed")
//         callback()
//     }, 5000)
// }

// function settleTrade() {
//     setTimeout(() => {
//         console.log("Trade settled")
//     }, 3000)
// }


// // using callback
// getOrderDeatils(() => {
//     processOrder(() => {
//         createTrade(() => {
//             processTrade(() => {
//                 settleTrade()
//             })
//         })
//     })
// })

//======================================================================================
function getOrderDeatils() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Order details received")
            resolve("success")
        }, 3000)
    })   
}

function processOrder() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Order processed")
            resolve("success")
        }, 3000)
    })   
}

function createTrade() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Trade created")
            resolve("success")
        }, 3000)
    })   
}

function processTrade() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Trade processed")
            resolve("success")
        }, 3000)
    })   
}

function settleTrade() {
   return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Trade settled")
            resolve("success")
        }, 3000)
    })   
}

getOrderDeatils()
    .then(() => {
        return processOrder()
    })
    .then(() => {
        return createTrade()
    })
    .then(() => {
        return processOrder()
    })
    .then(() => {
        return settleTrade()
    })
    .then((res) => console.log(res))
    