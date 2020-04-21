const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.8
 */
class Exercise {
  /**
   * Solution Exercise 1.1.8
   * @example
   * ```shell
   * $ node ex-1.1.8.js
   * b
   * bc
   * a4
   * ```
   */
  static solution () {
    StdOut.println('b')
    StdOut.println('b' + 'c')
    StdOut.println('a' + 4)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution()
