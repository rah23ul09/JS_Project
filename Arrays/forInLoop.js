/*
    for....in loop on object properties
*/

let periodicTable = {
    H : "Hydrogen",
    He : "Heliem",
    Li : "Lithium",
    Be : "Berylium",
    B : "Boron",
    C: "Carbon",
    N : "Nitrogen",
    O : "Oxygen"
}

for (const key in periodicTable) {
    // console.log(key)
    console.log(periodicTable[key])
}