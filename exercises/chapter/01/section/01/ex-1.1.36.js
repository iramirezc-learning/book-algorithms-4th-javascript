const { StdOut, StdRandom } = require('../../../../../src/libs')
const utils = require('../../../../../src/utils')
const { newArrayOf } = utils
/**
 * Exercise 1.1.36
 */
class Exercise {
  /**
   * Solution Exercise 1.1.36
   * @example <caption>Shuffle 1000000 times an array of length 8</caption>
   * ```shell
   * $ node ex-1.1.36.js 1000000 8
   * Total Shuffles (n): 1000000
   * Array Size (m): 8
   * n/m: 125000
   * Empirical Shuffle Check:
   * [ [ 125205, 124703, 124810, 125342, 124749, 124853, 124982, 125356 ],
   *   [ 124764, 125151, 125069, 125401, 125070, 125337, 124734, 124474 ],
   *   [ 125119, 125662, 125144, 124378, 124577, 124787, 125483, 124850 ],
   *   [ 124920, 124985, 125059, 124891, 124683, 124960, 125242, 125260 ],
   *   [ 125027, 124646, 124963, 125314, 125103, 125330, 124657, 124960 ],
   *   [ 124798, 124993, 124648, 125224, 125446, 125094, 125032, 124765 ],
   *   [ 125245, 124740, 125236, 124690, 125296, 124894, 124950, 124949 ],
   *   [ 124922, 125120, 125071, 124760, 125076, 124745, 124920, 125386 ] ]
   * ```
   * @example <caption>Shuffle 10000000 times an array of length 5</caption>
   * ```shell
   * $ node ex-1.1.36.js 10000000 5
   * Total Shuffles (n): 10000000
   * Array Size (m): 5
   * n/m: 2000000
   * Empirical Shuffle Check:
   * [ [ 1998646, 2000785, 2000112, 2000986, 1999471 ],
   *   [ 1999746, 2001194, 2000083, 1998939, 2000038 ],
   *   [ 2001169, 1999430, 2000780, 1998711, 1999910 ],
   *   [ 2001698, 1999479, 1999161, 1999547, 2000115 ],
   *   [ 1998741, 1999112, 1999864, 2001817, 2000466 ] ]
   * ```
   * @param {[]} args [n, m] Total Shuffles, Array Size
   */
  static solution(args) {
    const n = parseInt(args[0], 10)
    const m = parseInt(args[1], 10)

    const matrix = newArrayOf(m, () => newArrayOf(m, 0))

    // shuffle array `n` times
    for (let i = 0; i < n; i++) {
      const array = newArrayOf(m, (i) => i)
      StdRandom.shuffle(array)
      // uncomment for debugging
      // StdOut.println(`Shuffle ${utils.pad(i + 1, 5)}: ${utils.arrayToString(array)}`)
      this.shuffleTest(array, matrix)
    }

    StdOut.println(`Total Shuffles (n): ${n}`)
    StdOut.println(`Array Size (m): ${m}`)
    StdOut.println(`n/m: ${n / m}`)
    StdOut.println('Empirical Shuffle Check:')
    StdOut.println(matrix)
  }

  /**
   * Counts for every number `i`
   * the appearance in position `j`
   * for a shuffled array.
   * @param {[]} shuffled Shuffled Array
   * @param {[[]]} matrix Matrix that keep tracks of the new position of number `i`.
   */
  static shuffleTest(shuffled, matrix) {
    for (let j = 0; j < shuffled.length; j++) {
      matrix[shuffled[j]][j]++
    }
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
