const { StdOut, StdRandom } = require('../../../libs')

/**
 * Exercise 1.1.11
 */
class Exercise {
  /**
   * Returns a matrix of `x` columns
   * and `y` rows with random boolean values.
   * @param {number} x Total of columns
   * @param {number} y Total of rows
   * @returns {[[]]} A matrix `y` · `x` with random booleans.
   */
  static createMatrix (x, y) {
    const m = []

    for (let i = 0; i < y; i++) {
      m[i] = []
      for (let j = 0; j < x; j++) {
        m[i][j] = StdRandom.bernoulli()
      }
    }

    return m
  }

  /**
   * Converts a matrix to string
   * representing `true` values as `*`
   * and `false` values as ` ` (whitespace).
   * It also prints row and columns numbers.
   * @param {[]} m The matrix of booleans to be converted to string.
   */
  static matrixToString (m) {
    let cols = ' '
    let s = ''

    for (let i = 0; i < m.length; i++) {
      s += (i + 1)

      for (let j = 0; j < m[i].length; j++) {
        if (i === 0) {
          cols += ` ${j + 1} `
        }

        s += m[i][j] ? ' * ' : '   '
      }

      if (i === 0) {
        cols += '\n'
      }

      s += '\n'
    }

    return cols + s
  }

  /**
   * Solution Exercise 1.1.11
   * @param {[]} args [x, y] Cols, Rows
   * @example
   * ```shell
   * $ node ex-1.1.11.js 5 5
   *   1  2  3  4  5
   * 1 *        *
   * 2    *     *
   * 3    *  *  *  *
   * 4       *  *  *
   * 5 *  *        *
   * ```
   */
  static solution (args) {
    const x = parseInt(args[0], 10)
    const y = parseInt(args[1], 10)

    const m = this.createMatrix(x, y)
    const sm = this.matrixToString(m)

    StdOut.println(sm)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
