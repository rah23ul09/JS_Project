/*
    Program to create class in JS
    
*/

function Employee(name, id, email) {
    this.name = name,
    this.id = id,
    this.email = email
}

class User {
    constructor(name, id) {
        this.name = name,
        this.id = id
    }
}

let a = new Employee("Rahul", 232323, "rahulaksingh65@gmail.com")
let b = new User("Satish", 2342)

console.log(a)
console.log(b)