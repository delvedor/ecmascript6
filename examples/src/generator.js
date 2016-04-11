'use strict'

// nodejs file system api
const fs = require('fs')

// runner function
function run (generator) {
  console.log('run')

  let it = generator(go)
  console.log('created generator')

  function go (err, result) {
    console.log('go')
    if (err) console.log(err)

    console.log('next', it.next(result))
  }

  console.log('called generator', go())
}

// runner function invocation with a generator
run(function * (done) {
  console.log('calling go')
  let examples = yield fs.readdir('test', done)
  console.log(examples)
})
