'use strict'

function multiply (n, ...args) {
  return args.map((ele) => ele * n)
}

console.log(multiply(2, 3, 4, 5, 6, 7, 8, 9))

function echo (a, b, ...args) {
  console.log(a, b, args)
}

echo('c', 'i', 'a', 'o')
