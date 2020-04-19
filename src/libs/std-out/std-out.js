const format = require('util').format

class StdOut {
  /**
   * Prints formatted data in the `stdout`.
   * @see {@link https://nodejs.org/docs/latest-v12.x/api/util.html#util_util_format_format_args}
   * @param {*} any
   */
  static printf () {
    process.stdout.write(format(...arguments))
  }

  /**
   * Prints formatted data with a new line in the `stdout`.
   * @see {@link https://nodejs.org/docs/latest-v12.x/api/util.html#util_util_format_format_args}
   * @param {*} any
   */
  static println () {
    process.stdout.write(format(...arguments, '\n'))
  }
}

module.exports = StdOut
