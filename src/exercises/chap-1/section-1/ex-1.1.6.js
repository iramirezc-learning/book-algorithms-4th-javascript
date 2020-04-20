const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.6
 */
class Exercise {
  /**
   * Solution Exercise 1.1.6
   * @example
   * ```shell
   * $ node ex-1.1.6.js
   * 0
   * 1
   * 1
   * 2
   * 3
   * 5
   * 8
   * 13
   * 21
   * 34
   * 55
   * 89
   * 144
   * 233
   * 377
   * 610
   * ```
   */
  static solution () {
    let f = 0
    let g = 1

    for (let i = 0; i <= 15; i++) {
      StdOut.println(f)
      f = f + g
      g = f - g
    }
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution()
