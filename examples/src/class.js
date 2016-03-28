'use strict'

import moment from 'moment'

export default class TimerObj {
  constructor () {
    this.time = moment({
      millisecond: 0
    })
  }

  getHour () {
    return this.time.hour()
  }

  getMin () {
    return this.time.minute()
  }

  getSec () {
    return this.time.second()
  }

  addHour (hour = 1) {
    this.time.set('hour', this.getHour() + hour)
    return this
  }

  addMin (min = 1) {
    this.time.set('minute', this.getMin() + min)
    return this
  }

  addSec (sec = 1) {
    this.time.set('second', this.getSec() + sec)
    return this
  }

  remHour (hour = 1) {
    this.time.set('hour', this.getHour() - hour)
    return this
  }

  remMin (min = 1) {
    this.time.set('minute', this.getMin() - min)
    return this
  }

  remSec (sec = 1) {
    this.time.set('second', this.getSec() - sec)
    return this
  }

  setHour (newHour = 0) {
    this.time.set('hour', newHour)
    this.time.set('minute', 0)
    this.time.set('second', 0)
    return this
  }

  setMin (newMin = 0) {
    this.time.set('minute', newMin)
    this.time.set('second', 0)
    return this
  }

  setSec (newSec = 0) {
    this.time.set('second', newSec)
    return this
  }

  toString () {
    if (this.getHour()) return this.time.format('hh : mm : ss')
    return this.time.format('mm : ss')
  }
}

/**
 * Usage example
 */
// import TimerObj from './class'
const timer = new TimerObj()

timer.addHour()
console.log(timer.toString())

timer.addMin().addSec(30)
console.log(timer.toString())
