const { StdOut, StdRandom } = require('../../../../../src/libs')
const { newArrayOf } = require('../../../../../src/utils')

/**
 * Exercise 1.1.15
 */
class Exercise {
  /**
   * Solution Exercise 1.1.15
   * @example <caption>histogram of an array of size `5`</caption>
   * ```shell
   * $ node ex-1.1.15.js 5
   * array: 4,0,1,4,3
   * array.length: 5
   * histogram: 1,1,0,1,2
   * sum(histogram): 5
   * ```
   * @param {[]} args [n] ArraySize
   */
  static solution(args) {
    const m = parseInt(args[0])

    const a = this.createArrayOfRandomInt(m)
    const h = this.histogram(a, m)

    StdOut.println(`array: ${a}`)
    StdOut.println(`array.length: ${a.length}`)
    StdOut.println(`histogram: ${h}`)
    StdOut.println(`sum(histogram): ${h.reduce((acc, n) => acc + n)}`)
  }

  /**
   * Creates an array of `n` size
   * with random integer values in range [0, n)
   * @param {number} n Array size
   * @returns {[]} Array of random ints.
   */
  static createArrayOfRandomInt(n) {
    return newArrayOf(n, () => StdRandom.uniform(n))
  }

  /**
   * Returns a histogram array.
   * @todo Design new implementation as
   * this one is really slow.
   * @example
   * ```js
   * histogram([3, 3, 4, 2, 0])
   * // returns [1, 0, 1, 2, 1]
   * ```
   * @param {[]} a The array of integer values.
   * @param {number} n The size of the array.
   * @returns {[]} The histogram array.
   */
  static histogram(a, n) {
    const h = newArrayOf(n, 0)

    for (let i = 0; i < a.length; i++) {
      h[a[i]]++
    }

    return h
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
