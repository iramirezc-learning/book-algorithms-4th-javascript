const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.18
 */
class Exercise {
  /**
   * Mystery code
   * @param {number} a Integer number `a`
   * @param {number} b Integer number `b`
   */
  static mystery (a, b) {
    if (b === 0) {
      return 0
    }

    if (b % 2 === 0) {
      return this.mystery(a + a, Math.floor(b / 2))
    }

    return this.mystery(a + a, Math.floor(b / 2)) + a
  }

  /**
   * Mystery code with `*`
   * @param {number} a Integer number `a`
   * @param {number} b Integer number `b`
   */
  static mystery2 (a, b) {
    if (b === 0) {
      return 1
    }

    if (b % 2 === 0) {
      return this.mystery2(a * a, Math.floor(b / 2))
    }

    return this.mystery2(a * a, Math.floor(b / 2)) * a
  }

  /**
   * Solution Exercise 1.1.18
   * @param {[]} args [a, b] int a, int b
   * @example <caption>mystery(2, 25)</caption>
   * ```shell
   * $ node ex-1.1.18.js 2 25
   * mystery(2, 25) = 50
   * mystery2(2, 25) = 33554432
   * ```
   * @example <caption>mystery(3, 11)</caption>
   * ```shell
   * $ node ex-1.1.18.js 3 11
   * mystery(3, 11) = 33
   * mystery2(3, 11) = 177147
   * ```
   */
  static solution (args) {
    const a = parseInt(args[0])
    const b = parseInt(args[1])

    StdOut.println(`mystery(${a}, ${b}) = ${this.mystery(a, b)}`)
    StdOut.println(`mystery2(${a}, ${b}) = ${this.mystery2(a, b)}`)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
