const { StdOut, StdRandom } = require('../../../libs')

/**
 * Exercise 1.1.13
 */
class Exercise {
  /**
   * Creates a matrix of `x` · `y`
   * of random integer numbers.
   * @param {number} x Number of Cols
   * @param {number} y Number of Rows
   * @returns {[[]]} A matrix of `x` columns and `y` rows
   */
  static createMatrix (x, y) {
    const m = []

    for (let i = 0; i < y; i++) {
      m[i] = []
      for (let j = 0; j < x; j++) {
        m[i][j] = StdRandom.uniform(Math.max(x, y))
      }
    }

    return m
  }

  /**
   * Transposes a matrix.
   * @param {[[]]} m The matrix to be transposed
   * @returns {[[]]} The matrix transposed
   */
  static transpose (m) {
    const t = []
    const rows = m.length
    const cols = m[0].length

    for (let i = 0; i < cols; i++) {
      t[i] = []
      for (let j = 0; j < rows; j++) {
        t[i][j] = m[j][i]
      }
    }

    return t
  }

  /**
   * Solution Exercise 1.1.13
   * @param {[]} args [x, y] Cols, Rows
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
   */
  static solution (args) {
    const x = parseInt(args[0], 10)
    const y = parseInt(args[1], 10)

    const m = this.createMatrix(x, y)

    StdOut.println('[before]')
    StdOut.println(m.join('\n'), '\n')

    const t = this.transpose(m)

    StdOut.println('[after]')
    StdOut.println(t.join('\n'))
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
