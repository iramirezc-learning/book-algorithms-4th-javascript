const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.10
 */
class Exercise {
  /**
   * Solution Exercise 1.1.10
   * @example
   * ```shell
   * $ node ex-1.1.10.js
   * [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
   * ```
   */
  static solution () {
    const a = []

    for (let i = 0; i < 10; i++) {
      a[i] = i * i
    }

    StdOut.println(a)
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution()
