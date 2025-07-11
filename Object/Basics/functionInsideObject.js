// Adding function inside object
let obj2 = {
    firstName : "Bacchan",
    lastName : "Pandey",
    age : "5",
    class : "KG",
    displayDetails : function details() {
        console.log(`${obj2.firstName} ${obj2.lastName} is ${obj2.age} years old and in ${obj2.class} grade`)
    },
    details2() {
        console.log(`${obj2.firstName} ${obj2.lastName} is ${obj2.age} years old and in ${obj2.class} grade`)
    }
}

obj2.displayDetails()
obj2.details2()
