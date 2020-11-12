const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.1
 */
class Exercise {
  /**
   * Solution Exercise 1.1.1
   * @example
   * ```sh
   * $ node ex-1.1.1.js
   * a) 7.5
   * b) 200.0000002
   * c) true
   * ```
   */
  static solution () {
    StdOut.println(`a) ${Exercise.a()}`)
    StdOut.println(`b) ${Exercise.b()}`)
    StdOut.println(`c) ${Exercise.c()}`)
  }

  static a () {
    return (0 + 15) / 2
  }

  static b () {
    return 2.0e-6 * 100000000.1
  }

  static c () {
    return true && false || true && true // eslint-disable-line
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution()
