const { StdOut, math } = require('../../../libs')
const { newArrayOf } = require('../../../utils')

/**
 * Exercise 1.1.19
 */
class Exercise {
  /**
   * Computes the `n`th Fibonacci.
   * @param {number} n
   */
  static fibonacci (n) {
    if (n === 0) {
      return 0
    }

    if (n === 1) {
      return 1
    }

    return math.add(math.bignumber(this.fibonacci(n - 1)), math.bignumber(this.fibonacci(n - 2)))
  }

  /**
   * Memoized Fibonacci
   * @param {[]} a Fib numbers already calculated.
   * @param {number} n
   */
  static fibonacciV2 (a, n) {
    if (a[n] === null) {
      a[n] = math.evaluate(`${this.fibonacciV2(a, n - 1)} + ${this.fibonacciV2(a, n - 2)}`)
    }

    return a[n]
  }

  /**
   * Solution Exercise 1.1.19
   * @example
   * ```shell
   * $ node ex-1.1.19.js
   * 0 0
   * 1 1
   * 2 1
   * 3 2
   * 4 3
   * 5 5
   * 6 8
   * 7 13
   * 8 21
   * 9 34
   * 10 55
   * ... # truncated
   * 89 1779979416004714189
   * ```
   */
  static solution () {
    const a = newArrayOf(90, null)

    a[0] = 0
    a[1] = 1

    for (let n = 0; n < 90; n++) {
      StdOut.println(`${n} ${this.fibonacciV2(a, n)}`)
    }
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution()
