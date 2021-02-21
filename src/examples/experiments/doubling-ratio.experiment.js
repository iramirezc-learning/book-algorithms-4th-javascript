const { StdOut, StdRandom } = require('../../libs')
const { pad } = require('../../utils')
const { StopWatch } = require('../../adts')
const { ThreeSum } = require('../../algorithms')

/**
 * DoublingRatio
 * @classdesc Runs experiments counting time for ThreeSum algorithm.
 * @see p. 177, 192
 */
class DoublingRatio {
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
   * Calculates the ratio of each running time
   * with the previous when executing the ThreeSum
   * algorithm, doubling the input size every time.
   * @example
   * ```sh
   * $ node doubling-ratio.experiment.js
   *    250     0.0     2.8
   *    500     0.0     3.5
   *   1000     0.3     6.5
   *   2000     1.8     6.9
   *   4000    14.5     8.2
   *   8000    96.4     6.7
   *  16000   768.1     8.0
   * ...
   * ```
   */
  static main() {
    let prev = this.timeTrial(125)

    for (let n = 250; true; n *= 2) {
      const time = this.timeTrial(n)
      StdOut.println(
        `${pad(n, 7)} ${pad(time.toFixed(1), 7)} ${pad(
          (time / prev).toFixed(1),
          7
        )}`
      )
      prev = time
    }
  }
}

// Execution
// ==============================
DoublingRatio.main()
