const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.16
 */
class Exercise {
  /**
   * Solution Exercise 1.1.16
   * @example <caption>exR1(6)</caption>
   * ```shell
   * $ node ex-1.1.16.js 6
   * exR1(6) = 311361142246
   * ```
   * @param {[]} args [n] int
   */
  static solution (args) {
    const n = parseInt(args[0])

    StdOut.println(`exR1(${n}) = ${this.exR1(n)}`)
  }

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
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
