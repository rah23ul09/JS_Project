function getPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts Fetched")
            resolve()
        }, 3000)
    })
}

function getcomment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Comment Fetched")
            resolve()
        }, 3000)
    })
}

async function getPostAndComment() {
    await Promise.all([
        getPost(),
        getcomment()
    ])
    console.log("Proess completed!!!")
}


getPostAndComment()