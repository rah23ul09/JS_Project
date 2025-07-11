/*
    program to create object using function
*/

function createStudent(name, age, country, company) {
    const student = {}
    student["name"] = name,
    student["age"] =age,
    student["country"] = country,
    student["company"] = company
    return student
}

const s1 = createStudent("Rahul Singh", 33, "IN", "Mphasis")
const s2 = createStudent("Vicky Singh", 33, "UK", "Apple")

console.log(s1)
console.log(s2)