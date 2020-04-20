const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.3
 */
class Exercise {
  /**
   * Determines if 3 given numbers are equal.
   * @param {number} a Number 1
   * @param {number} b Number 2
   * @param {number} c Number 3
   * @returns {boolean} Whether the 3 numbers are equal or not.
   */
  static areEqual (a, b, c) {
    return a === b && b === c
  }

  /**
   * Solution Exercise 1.1.3
   * @param {[]} args [n1, n2, n3]
   * @example <caption>All numbers are equal</caption>
   * ```sh
   * $ node ex-1.1.3.js 3 3 3
   * equal
   * ```
   * @example <caption>All numbers are not equal</caption>
   * ```sh
   * $ node ex-1.1.3.js 1 2 3
   * not equal
   * ```
   */
  static solution (args) {
    const a = parseInt(args[0], 10)
    const b = parseInt(args[1], 10)
    const c = parseInt(args[2], 10)

    if (Exercise.areEqual(a, b, c)) {
      StdOut.println('equal')
    } else {
      StdOut.println('not equal')
    }
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
