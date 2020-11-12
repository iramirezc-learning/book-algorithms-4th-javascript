const { StdOut, Matrix } = require('../../../../../src/libs')
const {
  arrayToString,
  isMatrix,
  isVector
} = require('../../../../../src/utils')

/**
 * Exercise 1.1.33
 */
class Exercise {
  /**
   * Solution Exercise 1.1.33
   * @example <caption>Transpose of a Matrix</caption>
   * ```shell
   * $ node ex-1.1.33.js [[1,2,3],[4,5,6],[7,8,9]]
   * Transpose:
   * [[1,4,7],[2,5,8],[3,6,9]]
   * ```
   * @example <caption>Vector Dot Product</caption>
   * ```shell
   * $ node ex-1.1.33.js [9,2,7] [4,8,10]
   * Vector Dot Product:
   * 122
   * ```
   * @example <caption>Matrix-Matrix Product</caption>
   * ```shell
   * $ node ex-1.1.33.js [[0,4,-2],[-4,-3,0]] [[0,1],[1,-1],[2,3]]
   * Matrix-Matrix Product:
   * [[0,-10],[-3,-1]]
   * ```
   * @example <caption>Matrix-Vector Product</caption>
   * ```shell
   * $ node ex-1.1.33.js [[1,-1,2],[0,-3,1]] [2,1,0]
   * Matrix-Vector Product:
   * [1,-3]
   * ```
   * @example <caption>Vector-Matrix Product</caption>
   * ```shell
   * $ node ex-1.1.33.js [2,1,3] [[1,2,3],[4,5,6],[7,8,9]]
   * Vector-Matrix Product:
   * [13,31,49]
   * ```
   */
  static solution (args) {
    const a = JSON.parse(args[0] || null)
    const b = JSON.parse(args[1] || null)

    if (a && b) {
      if (isVector(a) && isVector(b)) {
        StdOut.println('Vector Dot Product:')
        StdOut.println(Matrix.dot(a, b))
      } else if (isMatrix(a) && isMatrix(b)) {
        StdOut.println('Matrix-Matrix Product:')
        StdOut.println(arrayToString(Matrix.multMatrixMatrix(a, b)))
      } else if (isMatrix(a) && isVector(b)) {
        StdOut.println('Matrix-Vector Product:')
        StdOut.println(arrayToString(Matrix.multMatrixVector(a, b)))
      } else if (isVector(a) && isMatrix(b)) {
        StdOut.println('Vector-Matrix Product:')
        StdOut.println(arrayToString(Matrix.multVectorMatrix(a, b)))
      }
    } else {
      if (isMatrix(a)) {
        StdOut.println('Transpose:')
        StdOut.println(arrayToString(Matrix.transpose(a)))
      }
    }
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
