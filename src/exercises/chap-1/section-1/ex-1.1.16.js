const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.16
 */
class Exercise {
  /**
   * Mystery code
   * @param {number} int number
   * @returns {*} ???
   */
  static exR1 (n) {
    if (n <= 0) {
      return ''
    }

    return this.exR1(n - 3) + n + this.exR1(n - 2) + n
  }

  /**
   * Solution Exercise 1.1.16
   * @param {[]} args [n] int
   * @example <caption>exR1(6)</caption>
   * ```shell
   * $ node ex-1.1.16.js 6
   * exR1(6) = 311361142246
   * ```
   */
  static solution (args) {
    const n = parseInt(args[0])

    StdOut.println(`exR1(${n}) = ${this.exR1(n)}`)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
