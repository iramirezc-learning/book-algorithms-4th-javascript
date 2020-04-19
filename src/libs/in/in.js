const path = require('path')
const fs = require('fs')

/**
 * Parses a line to Integer.
 * @param {string} line String representing a number
 * @returns {number} The integer number
 */
const toInt = (line) => parseInt(line, 10)

/**
 * In
 * @classdesc File reader.
 */
class In {
  /**
   * Constructs a new File reader.
   * @param {string} fileName The name of the file to read from.
   */
  constructor (fileName) {
    this.fileName = path.resolve(fileName)
    this.content = fs.readFileSync(this.fileName, 'utf8').toString().trim()
  }

  /**
   * Parses the file's contents to Integers
   * @returns {[number]} The array of parsed integers.
   */
  readAllInts () {
    return this.content.split('\n').map(toInt)
  }
}

module.exports = In
