const readline = require('readline')

// create a Readline Interface
const reader = readline.createInterface({
  input: process.stdin
})

/**
 * StdIn
 * @name StdIn
 * @desc Object StdIn with a Readline Interface as prototype
 */
const StdIn = Object.create(reader)

/**
 * Parses a string to a integer.
 * @name StdIn.readInt
 * @param {string} The string representing a number.
 * @returns {number} The parsed number to integer.
 */
StdIn.readInt = function readInt (line) {
  return parseInt(line, 10)
}

module.exports = StdIn
