const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.9
 */
class Exercise {
  /**
   * Solution Exercise 1.1.9
   * @example
   * ```shell
   * $ node ex-1.1.9.js 50
   * 50 to binary -> 110010
   * ```
   * @param {[]} args [n]
   */
  static solution(args) {
    const n = parseInt(args[0], 10)

    StdOut.printf('%d to binary -> %s\n', n, this.toBinaryString(n))
  }

  /**
   * Converts a positive number to
   * its binary string representation.
   * @param {number} n The positive number
   * @returns {string} The binary string representation of `n`
   */
  static toBinaryString(n) {
    let s = ''

    for (let k = n; k > 0; k = Math.floor(k / 2)) {
      s = String(k % 2) + s
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
