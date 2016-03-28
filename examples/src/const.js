'use strict'

const myVar = { bool: true }
console.log(myVar)

myVar.bool = false // Totally fine here
console.log(myVar)

myVar = { bool: true } // TypeError: Assignment to constant variable.
