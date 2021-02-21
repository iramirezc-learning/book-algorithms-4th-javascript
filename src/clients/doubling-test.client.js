const { StdOut, StdRandom } = require('../libs')
const { pad } = require('../utils')
const { StopWatch } = require('../adts')
const { ThreeSum } = require('../algorithms')

/**
 * DoublingTest
 * @classdesc Runs experiments counting time for ThreeSum algorithm.
 * @see p. 177
 */
class DoublingTest {
  /**
   * Returns the time elapsed
   * counting the triplets in `n`
   * random ints.
   * @param {number} n Array size.
   */
  static timeTrial(n) {
    const MAX = 1000000
    const a = []

    for (let i = 0; i < n; i++) {
      a[i] = StdRandom.uniform(-MAX, MAX)
    }

    const timer = new StopWatch()
    ThreeSum.count(a)
    return timer.elapsedTime()
  }

  /**
   * Tracks the time of ThreeSum algorithm
   * doubling the size of array a every time.
   * @example
   * ```sh
   * $ ./client DoublingTest
   *     250   0.013
   *     500   0.043
   *    1000   0.298
   *    2000   2.418
   *    4000  19.371
   *    8000  96.712
   *   16000 722.276
   * ...
   * ```
   */
  static main() {
    for (let i = 250; ; i *= 2) {
      const time = this.timeTrial(i)
      StdOut.println(`${pad(i, 7)} ${pad(time, 7)}`)
    }
  }
}

module.exports = { DoublingTest }
