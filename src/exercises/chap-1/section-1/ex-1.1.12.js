const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.12
 */
class Exercise {
  /**
   * Solution Exercise 1.1.12
   * @example
   * ```shell
   * $ node ex-1.1.12.js
   * [ 0, 1, 2, 3, 4, 4, 3, 2, 1, 0 ]
   * ```
   */
  static solution () {
    const a = []

    for (let i = 0; i < 10; i++) {
      a[i] = 9 - i
    }

    for (let i = 0; i < 10; i++) {
      a[i] = a[a[i]]
    }

    StdOut.println(a)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution()
