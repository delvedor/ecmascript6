function append (value = null, array = []) {
  array.push(value)
  return array
}

console.log(append(5))
console.log(append(7, append(2)))
