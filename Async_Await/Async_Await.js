/*
    'async' and 'await' are modern JS features that simplify working with asynchronous code,
    making it look and behave more like synchronous code. They are built on top of JS Promises
*/

function getUserID(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetching userID for user : ${email}`)
            resolve(456)
        
        },3000)
    })
}

getUserID("rahul@gmail.com")
    .then((id) => {
        console.log(`User ID : ${id}`)
    })

// using async_await
async function getId(email) {
    const Id = await getUserID(email)
    console.log(`User ID : ${id}`)
}

getUserID("rahul@gmail.com")

console.log("Execution Continues.....")