'use strict'

let array = ['javascript', 'is', 'good']

// with destructuring
let [one, two, three] = array
console.log(one, two, three)

// swapping
let a = 1
let b = 2
;[a, b] = [b, a]
console.log(a, b)

let obj = {
  name: 'foo',
  value: 42
}

let {name, value} = obj
let {name: n, value: v} = obj

console.log(name, value)
console.log(n, v)
