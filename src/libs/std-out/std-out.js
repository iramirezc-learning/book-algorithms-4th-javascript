const format = require('util').format

class StdOut {
  /**
   * Prints formatted data in the `stdout`.
   * @param {*} any
   */
  static printf () {
    process.stdout.write(format(...arguments))
  }

  /**
   * Prints formatted data with a new line in the `stdout`.
   */
  static println () {
    process.stdout.write(format(...arguments, '\n'))
  }
}

module.exports = StdOut
