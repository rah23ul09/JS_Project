/*
    How to return and consume promise in jS
*/

function fetchData(url) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...")
        setTimeout(() => {
            const success = Math.random() >0.3
            if(success) {
                resolve(`Data received from ${url}`)
            } else {
                reject(new Error(`Data not received from ${url}`))
            }
        }, 3000)
    })
}

const url = "https://www.dezlearn.com/courses"
fetchData(url)
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej))
    .finally(() => console.log("promise is complete"))