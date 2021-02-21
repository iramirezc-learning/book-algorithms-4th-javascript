const { StdOut } = require('../../../../../src/libs')

/**
 * Exercise 1.1.26
 */
class Exercise {
  /**
   * Solution Exercise 1.1.26
   * @example <caption>sorting of a, b & c</caption>
   * ```shell
   * $ node ex-1.1.26.js 3 2 1
   * a = 3; b = 2; c = 1
   * a = 1; b = 2; c = 3
   * ```
   * @param {[]} args [a, b, c]
   */
  static solution(args) {
    let a = args[0]
    let b = args[1]
    let c = args[2]
    let t = null

    StdOut.println(`a = ${a}; b = ${b}; c = ${c}`)

    if (a > b) {
      t = a
      a = b
      b = t
    }

    if (a > c) {
      t = a
      a = c
      c = t
    }

    if (b > c) {
      t = b
      b = c
      c = t
    }

    StdOut.println(`a = ${a}; b = ${b}; c = ${c}`)
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
