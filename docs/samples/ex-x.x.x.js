/** @module samples */

const { StdOut } = require('../../src/libs')

/**
 * @summary Exercise x.x.x
 */
class Exercise {
  /**
   * Code solution for Exercise x.x.x
   * @param {[number, number]} args - [x, y]
   * @example <caption>example 1</caption>
   * ```shell
   * $ node ex-x.x.x.js 0.5 0.9
   * x: 0.5
   * y: 0.9
   * x * y = 0.45
   * ```
   */
  static solution (args) {
    const x = parseFloat(args[0])
    const y = parseFloat(args[1])

    StdOut.println('x:', x)
    StdOut.println('y:', y)
    StdOut.println('x * y =', parseFloat(x) * parseFloat(y))
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
