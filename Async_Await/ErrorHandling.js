/*
    'async' and 'await' are modern JS features that simplify working with asynchronous code,
    making it look and behave more like synchronous code. They are built on top of JS Promises
*/

function getUserID(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching userID for user : ${email}`)
            reject("UserId not found")
        },3000)
    })
}

// getUserID("rahul@gmail.com")
//     .then(id => {
//         console.log(`User ID : ${id}`)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// using async_await
async function getId(email) {
    try {
        const Id = await getUserID(email)
        console.log(`User ID : ${id}`)
    }catch(err) {
        console.log(err)
    }
    
}

getUserID("rahul@gmail.com")

console.log("Execution Continues.....")