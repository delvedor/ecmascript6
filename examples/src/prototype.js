'use strict'

Array.prototype.doublify = function doublify () { // eslint-disable-line
  for (let i = 0, len = this.length; i < len; i++) {
    this[i] = this[i] * 2
  }
  return this
}

Array.prototype.doubles = function doubles () { // eslint-disable-line
  let arr = []
  for (let i = 0, len = this.length; i < len; i++) {
    arr.push(this[i] * 2)
  }
  return arr
}

let a = [1, 2, 3]

a.doublify()

let b = a.doubles()

console.log(a, b)
