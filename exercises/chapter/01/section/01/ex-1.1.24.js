const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.24
 */
class Exercise {
  /**
   * Solution Exercise 1.1.24
   * @example <caption>gcd(1111111, 1234567)</caption>
   * ```shell
   * $ node ex-1.1.24.js 1111111 1234567
   * p = 1111111; q = 1234567; r = 1111111
   * p = 1234567; q = 1111111; r = 123456
   * p = 1111111; q = 123456; r = 7
   * p = 123456; q = 7; r = 4
   * p = 7; q = 4; r = 3
   * p = 4; q = 3; r = 1
   * p = 3; q = 1; r = 0
   * p = 1; q = 0
   *
   * gcd(1111111, 1234567) = 1
   * ```
   * @param {[]} args [p, q]
   */
  static solution(args) {
    const p = parseInt(args[0], 10)
    const q = parseInt(args[1], 10)
    const result = this.gcd(p, q)

    StdOut.println(`\ngcd(${p}, ${q}) = ${result}`)
  }

  /**
   * Recursive implementation of Euclidean Algorithm.
   */
  static gcd(p, q) {
    if (q === 0) {
      StdOut.println(`p = ${p}; q = ${q}`)
      return p
    }

    const r = p % q

    StdOut.println(`p = ${p}; q = ${q}; r = ${r}`)

    return this.gcd(q, r)
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
