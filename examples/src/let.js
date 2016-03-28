'use strict'

let myVar = 1

function myFunction () {
  let myVar = 2
  if (myVar === 2) {
    let myVar = 3
    console.log(myVar)
  }
  console.log(myVar)
}

console.log(myVar)
myFunction()
