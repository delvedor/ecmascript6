'use strict'

function makeAPromise () {
  const myPromise = new Promise((resolve, reject) => {
    let ran = Math.random()
    setTimeout(() => {
      ran > 0.5 ? resolve(true) : reject({ error: 'Error', promise: 'first' })
    }, 1000)
  })
  return myPromise
}

function makeAnotherPromise () {
  const myPromise = new Promise((resolve, reject) => {
    let ran = Math.random()
    setTimeout(() => {
      ran < 0.5 ? resolve(false) : reject({ error: 'Error', promise: 'second' })
    }, 1000)
  })
  return myPromise
}

makeAPromise()
  .then((bool) => {
    console.log('1) First promise:', bool)
  })
  .catch((err) => {
    console.log('1) First promise error:', err.error, err.promise)
  })

makeAPromise()
  .then((bool) => {
    console.log('2) First promise:', bool)
    return makeAnotherPromise()
  })
  .then((bool) => {
    console.log('2) Second promise:', bool)
  })
  .catch((err) => {
    console.log('2) First or Second promise error:', err.error, err.promise)
  })
