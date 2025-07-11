/*
    Arrow function do not have their own 'this' context;
    instead, they inherit value from the enclosing lexical (parent) scope
*/

const car = {
    make : "Toyota",
    model : "Land Cruiser",
    price : 60000,
    displayCar : function() {
        let displayMakeAndModel = () => {
            console.log(`${this.make} ${this.model}`)
        }
        let displayPrice = () => {
            console.log(`${this.price}`)
        }
        displayMakeAndModel()
        displayPrice()
    }
}

car.displayCar()