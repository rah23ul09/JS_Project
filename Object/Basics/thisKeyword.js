/*
     "this" refer the object which calling the function
*/
let obj2 = {
    firstName : "Bacchan",
    lastName : "Pandey",
    age : "5",
    class : "KG",
    details() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and in ${this.class} grade`)
        console.log(this)
    }
}

let obj3 = obj2
obj3.firstName = "Bikku"
obj3.age = "42"

obj3.details()
obj2.details()