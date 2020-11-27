const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.14
 */
class Exercise {
  /**
   * Solution Exercise 1.1.14
   * @example <caption>my initial implementation</caption>
   * ```shell
   * $ node ex-1.1.14.js 123456789
   * 123456789 -> 26
   * ```
   * @example <caption>alternative implementation</caption>
   * ```shell
   * $ node ex-1.1.14.js 123456789 -v2
   * [v2]
   * 123456789 -> 26
   * ```
   * @example <caption>math implementation</caption>
   * ```shell
   * $ node ex-1.1.14.js 123456789 -math
   * [math]
   * 123456789 -> 26
   * ```
   * @param {[]} args [n, -v] Integer number, version
   */
  static solution (args) {
    const n = parseInt(args[0], 10)
    const version = args[1]

    if (version === '-v2') {
      StdOut.println('[v2]')
      StdOut.println('%d -> %d', n, this.lgV2(n))
    } else if (version === '-math') {
      StdOut.println('[math]')
      StdOut.println('%d -> %d', n, this.lgMath(n))
    } else {
      StdOut.println('%d -> %d', n, this.lg(n))
    }
  }

  /**
   * Calculates the largest integer
   * not larger than the `base-2` logarithm of `n`.
   * @note This is my original implementation.</em>
   * @param {number} n Integer number
   * @returns {number} Integer not larger than `lg_2(n)`
   */
  static lg (n) {
    const BASE = 2
    let exp = 0
    let result = 1

    while (result * BASE <= n) {
      result *= BASE
      exp++
    }

    return exp
  }

  /**
   * Alternative to `lg`.
   * @note I was curious about other implementations.</em>
   * @see {@link https://stackoverflow.com/questions/53972220/calculating-the-largest-int-less-than-the-base-2-log-of-n}
   * @param {number} n Integer number
   * @returns {number} Integer not larger than `lg_2(n)`
   */
  static lgV2 (n) {
    let x = 0

    for (let i = n; i > 1; i = Math.floor(i / 2)) {
      x++
    }

    return x
  }

  /**
   * `lg` implementation using `Math`
   * @note The book states not to use the `Math` library!.<br>
   * I'm doing it for testing purposes only.
   * @param {number} n Integer number
   * @returns {number} Integer not larger than `lg_2(n)`
   */
  static lgMath (n) {
    return Math.floor(Math.log2(n))
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
