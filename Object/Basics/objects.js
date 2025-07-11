/* object in JS 
    Difference between . and [] which accessing properties of object:
        In case, key is declared as number in object that it cannot be accessed by . operator.
        for eg. declaring as 24 : "new".
        This property cannot be retrieve as obj.24. 
        this will give error. Hence, [] is must usable to access properties.
*/

//defining empty object
let obj = {}

obj.prop1 = "Rahul"
obj.prop2 = "Singh"

console.log("Object is : ", obj)

// definting object with properties
let obj2 = {
    firstName : "Bacchan",
    lastName : "Pandey",
    age : "5",
    class : "KG"
}

obj2.height = 3.5

console.log("Object is : ", obj2)

// fetching the properties of object
console.log("Name of the student is ", obj2.firstName + " " + obj2.lastName)
console.log("Name of the student is ", obj2["firstName"] + " " + obj2["lastName"])