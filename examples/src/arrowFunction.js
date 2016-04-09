'use strict'

const Beers = function (text, beers) {
  this.text = text
  this.beers = beers
  this.listBeers = function () {
    return this.beers.map((beer) => `${this.text} ${beer}`)
  }
}

let beer = new Beers('I like', ['Moretti', 'Lasko'])
console.log(beer.listBeers())

/*
const Beers = function (text, beers) {
  this.text = text
  this.beers = beers
  this.listBeers = function () {
    return this.beers.map(function (beer) {
      return `${this.text} ${beer}`
    }.bind(this))
  }
}
*/

/*
const Beers = function (text, beers) {
  this.text = text
  this.beers = beers
  this.listBeers = function () {
    return this.beers.map(function (beer) {
      return `${this.text} ${beer}`
    })
  }
}
 */
