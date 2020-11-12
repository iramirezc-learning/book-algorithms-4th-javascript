const { StdOut, StdRandom } = require('../../../../../src/libs')
const { BinarySearch } = require('../../../../../src/algorithms')
const { newArrayOf, numbersByAscendingOrder } = require('../../../../../src/utils')

/**
 * Exercise 1.1.39
 */
class Exercise {
  /**
   * Solution Exercise 1.1.39
   * <br>Runs the total `trials` for BinarySearch of 2 random
   * arrays of 6 digits with size `n` = `10^3` to `10^6`.
   * @example <caption>Running 100 trials</caption>
   * ```shell
   * $ node ex-1.1.39.js 100
   * Running 100 trials for n = 1000
   * Duplicated keys: 102
   * Average: 1.02
   *
   * Running 100 trials for n = 10000
   * Duplicated keys: 10919
   * Average: 109.19
   *
   * Running 100 trials for n = 100000
   * Duplicated keys: 1051018
   * Average: 10510.18
   *
   * Running 100 trials for n = 1000000
   * Duplicated keys: 67079632
   * Average: 670796.32
   * ```
   * @param {[]} args [trials] Number of trials
   */
  static solution (args) {
    const trials = parseInt(args[0], 10)
    const base = 10
    const results = {}

    for (let exp = 3; exp <= 6; exp++) {
      const n = Math.pow(base, exp)

      StdOut.println(`Running ${trials} trials for n = ${n}`)

      results[n] = { total: 0 }

      for (let trial = 1; trial <= trials; trial++) {
        const source = this.newArrayOfSixDigits(n)
        const keys = this.newArrayOfSixDigits(n)

        source.sort(numbersByAscendingOrder)

        for (const key of keys) {
          if (BinarySearch.indexOf(source, key) >= 0) {
            results[n].total++
          }
        }
      }

      StdOut.println(`Duplicated keys: ${results[n].total}`)
      StdOut.println(`Average: ${results[n].total / trials}\n`)
    }
  }

  /**
   * Returns a 6 digits numbers random array of
   * length `size`.
   * @param {number} size Size for the new Array
   */
  static newArrayOfSixDigits (size) {
    const minSixDigit = 100000
    const maxSixDigit = 999999 + 1

    return newArrayOf(size, () => StdRandom.uniform(minSixDigit, maxSixDigit))
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
