const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.17
 */
class Exercise {
  /**
   * Solution Exercise 1.1.17
   * @example <caption>exR2(6)</caption>
   * ```shell
   * $ node ex-1.1.17.js 6
   * RangeError: Maximum call stack size exceeded
   * ```
   * @param {[]} args [n] int
   */
  static solution (args) {
    const n = parseInt(args[0])

    StdOut.println(`exR2(${n}) = ${this.exR2(n)}`)
  }

  /**
   * Mystery code
   * @param {n} int number
   * @returns {*} ???
   */
  static exR2 (n) {
    const s = this.exR2(n - 3) + n + this.exR2(n - 2) + n

    if (n <= 0) {
      return ''
    }

    return s
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
