function getUserID(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetching userID for user : ${email}`)
            resolve(456)
        
        },3000)
    })
}

function getLatestPosts(userID) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetching latest post for user : ${userID}`)
            resolve({postId : 520, title : "Async Awai in JS", details : "Bla bla bla"})
        
        },2000)
    })
}

// getUserID("ahdlh@gmail.com")
//     .then(id => {
//         console.log(`User Id received ${id}`)
//         return getLatestPosts(id)
//     })
//     .then(post => {
//         console.log(post)
//     })
//     .then(() => {
//         console.log("Process complete!!!")
//     })

    async function getPost(email) {
        const id = await getUserID(email)
        console.log(`User Id received ${id}`)
        const post = await getLatestPosts(id)
        console.log(post)
        console.log("Process complete!!!")
    }

    getPost("abdkln@gmail.com")