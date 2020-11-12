const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.7
 */
class Exercise {
  /**
   * Solution Exercise 1.1.7
   * @example
   * ```shell
   * $ node ex-1.1.7.js
   * a) 3.00009
   * b) 499500
   * c) 10000
   * ```
   */
  static solution () {
    StdOut.println(`a) ${this.a().toFixed(5)}`)
    StdOut.println(`b) ${this.b()}`)
    StdOut.println(`c) ${this.c()}`)
  }

  /**
   * Mystery code a)
   */
  static a () {
    let t = 9.0

    while (Math.abs(t - 9.0 / t) > 0.001) {
      t = (9.0 / t + t) / 2.0
    }

    return t
  }

  /**
   * Mystery code b)
   */
  static b () {
    let sum = 0

    for (let i = 1; i < 1000; i++) {
      for (let j = 0; j < i; j++) {
        sum++
      }
    }

    return sum
  }

  /**
   * Mystery code c)
   */
  static c () {
    let sum = 0

    for (let i = 1; i < 1000; i *= 2) {
      for (let j = 0; j < 1000; j++) {
        sum++
      }
    }

    return sum
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution()
