/*
    Program to create object constructor
*/

function Student(name, age, country, company) {
    this["name"] = name,
    this["age"] =age,
    this["country"] = country,
    this["company"] = company
    this["address"] = "ChotiChota Road"
}

const s1 = new Student("Rahul Singh", 33, "IN", "Mphasis")
const s2 = new Student("Vicky Singh", 33, "UK", "Apple")

console.log(s1)
console.log(s2)