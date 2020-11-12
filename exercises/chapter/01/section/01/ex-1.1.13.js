const { StdOut, StdRandom, Matrix } = require('../../../../../src/libs')
const { newArrayOf } = require('../../../../../src/utils')

/**
 * Exercise 1.1.13
 */
class Exercise {
  /**
   * Solution Exercise 1.1.13
   * @example
   * ```shell
   * $ node ex-1.1.13.js 4 3
   * [before]
   * 0,1,2,3
   * 1,3,0,2
   * 2,3,0,1
   *
   * [after]
   * 0,1,2
   * 1,3,3
   * 2,0,0
   * 3,2,1
   * ```
   * @param {[]} args [x, y] Cols, Rows
   */
  static solution (args) {
    const x = parseInt(args[0], 10)
    const y = parseInt(args[1], 10)

    const m = this.createMatrix(x, y)

    StdOut.println('[before]')
    StdOut.println(m.join('\n'), '\n')

    const t = Matrix.transpose(m)

    StdOut.println('[after]')
    StdOut.println(t.join('\n'))
  }

  /**
   * Creates a matrix of `x` · `y`
   * of random integer numbers.
   * @param {number} x Number of Cols
   * @param {number} y Number of Rows
   * @returns {[[]]} A matrix of `x` columns and `y` rows
   */
  static createMatrix (x, y) {
    return newArrayOf(y, () => {
      return newArrayOf(x, () => StdRandom.uniform(Math.max(x, y)))
    })
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
