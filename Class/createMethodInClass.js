/*
    Program to create method in class
*/

class Car {
    constructor(make, model) {
        this.make = make,
        this.model = model
    }

    start() {
        console.log("Car starts")
        return this
    }

    stop() {
        console.log("Car Stop")
    }
}

let car1 = new Car("Honda", "CRV")
car1.start().stop()