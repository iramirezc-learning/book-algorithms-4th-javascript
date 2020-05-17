const { StdOut, StdRandom } = require('../../../libs')
const { newArrayOf } = require('../../../utils')
const E1136 = require('./ex-1.1.36')

/**
 * Exercise 1.1.37
 */
class Exercise {
  /**
   * Bad Shuffle
   * Re-arranges the elements in an array
   * with a random number of position [0, n - 1]
   * @param {[]} a The array to shuffle.
   */
  static badShuffle (a) {
    const n = a.length

    for (let i = 0; i < n; i++) {
      const r = StdRandom.uniform(n)
      const temp = a[i]

      a[i] = a[r]
      a[r] = temp
    }
  }

  /**
   * Solution Exercise 1.1.37
   * @param {[]} args [n, m] Total Shuffles, Array Size
   * @example <caption>Shuffle 1000000 times an array of length 8</caption>
   * ```shell
   * $ node ex-1.1.37.js 1000000 8
   * Total Shuffles (n): 1000000
   * Array Size (m): 8
   * n/m: 125000
   * Empirical Shuffle Check:
   * [ [ 125299, 124872, 124950, 124873, 125005, 124918, 125324, 124759 ],
   *   [ 158490, 116214, 117597, 118574, 119977, 121945, 122777, 124426 ],
   *   [ 145264, 152077, 110716, 113209, 115089, 117981, 120964, 124700 ],
   *   [ 133463, 139622, 147941, 107661, 111606, 115190, 119939, 124578 ],
   *   [ 122071, 129006, 137590, 146929, 107696, 112262, 118985, 125461 ],
   *   [ 112930, 120827, 127813, 137649, 147519, 110772, 117444, 125046 ],
   *   [ 104681, 112054, 119879, 129232, 140385, 151971, 116317, 125481 ],
   *   [ 97802, 105328, 113514, 121873, 132723, 144961, 158250, 125549 ] ]
   * ```
   * @example <caption>Shuffle 10000000 times an array of length 5</caption>
   * ```shell
   * $ node ex-1.1.37.js 10000000 5
   * Total Shuffles (n): 10000000
   * Array Size (m): 5
   * n/m: 2000000
   * Empirical Shuffle Check:
   * [ [ 1999227, 2000590, 2001535, 2001214, 1997434 ],
   *   [ 2418983, 1807283, 1856140, 1917140, 2000454 ],
   *   [ 2101861, 2302360, 1739774, 1856223, 1999782 ],
   *   [ 1842858, 2047940, 2303887, 1805369, 1999946 ],
   *   [ 1637071, 1841827, 2098664, 2420054, 2002384 ] ]
   * ```
   */
  static solution (args) {
    const n = parseInt(args[0], 10)
    const m = parseInt(args[1], 10)

    const matrix = newArrayOf(m, () => newArrayOf(m, 0))

    // BAD shuffle array `n` times
    for (let i = 0; i < n; i++) {
      const array = newArrayOf(m, i => i)

      this.badShuffle(array)
      E1136.shuffleTest(array, matrix)
    }

    StdOut.println(`Total Shuffles (n): ${n}`)
    StdOut.println(`Array Size (m): ${m}`)
    StdOut.println(`n/m: ${n / m}`)
    StdOut.println('Empirical Shuffle Check:')
    StdOut.println(matrix)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
