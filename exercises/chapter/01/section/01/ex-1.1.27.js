const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.27
 */
class Exercise {
  /**
   * Solution Exercise 1.1.27
   * @example <caption>binomial(100, 50, 0.25)</caption>
   * ```shell
   * $ node ex-1.1.27.js 100 50 0.25
   * { n: 100, k: 50, p: 0.25 }
   * binomial(100, 50, 0.25) = ???
   * ```
   * @example <caption>binomial(10, 5, 0.25)</caption>
   * ```shell
   * $ node ex-1.1.27.js 10 5 0.25
   * { n: 10, k: 5, p: 0.25 }
   * binomial(10, 5, 0.25) = 0.058399200439453125
   * ```
   * @param {[]} args [n, k, p]
   */
  static solution(args) {
    const n = parseInt(args[0], 10)
    const k = parseInt(args[1], 10)
    const p = parseFloat(args[2], 10)

    StdOut.println({ n, k, p })

    const result = this.binomial(n, k, p)

    StdOut.println(`binomial(${n}, ${k}, ${p}) = ${result}`)
  }

  /**
   * Binomial distribution
   * @param {number} n Integer `n`
   * @param {number} k Integer `k`
   * @param {number} p Float `p`
   */
  static binomial(n, k, p) {
    if (n === 0 && k === 0) return 1.0
    if (n < 0 || k < 0) return 0.0
    return (
      (1 - p) * this.binomial(n - 1, k, p) + p * this.binomial(n - 1, k - 1, p)
    )
  }

  /**
   * My implementation of Binomial
   * using memoization.
   * @todo implementation
   */
  static myBinomial(/* n, k, p */) {}
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
