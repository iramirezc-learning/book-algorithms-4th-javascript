const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin
})

const StdIn = Object.create(reader)

module.exports = StdIn
