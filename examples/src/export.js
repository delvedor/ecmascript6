'use strict'

export const config = Object.freeze({
  port: 3000,
  url: 'http://example.com',
  db: 'mongodb://example.com:27017/db'
})

export function sayHallo (name = null, callback) {
  if (!callback) return
  callback(name ? `Hi ${name}` : null)
}
