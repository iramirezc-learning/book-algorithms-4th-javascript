const { StdOut, StdRandom } = require('../../libs')
const { StopWatch } = require('../../adts')
const ThreeSum = require('./three-sum.client')

/**
 * StopWatchClient
 * @classdesc StopWatch test client.
 * @see p. 175
 */
class StopWatchClient {
  /**
   * Tracks the time of ThreeSum algorithm.
   * @param {[]} args [n]
   * @example <caption>time counting the triplets in 1000 random ints</caption>
   * ```sh
   * $ node stop-watch.client.js 1000
   * 61 triplets 0.374 seconds
   * ```
   * @example <caption>time counting the triplets in 2000 random ints</caption>
   * ```sh
   * $ node stop-watch.client.js 2000
   * 474 triplets 2.807 seconds
   * ```
   */
  static main (args) {
    const n = parseInt(args[0])
    const a = []

    for (let i = 0; i < n; i++) {
      a[i] = StdRandom.uniform(-1000000, 1000000)
    }

    const timer = new StopWatch()
    const count = ThreeSum.count(a)
    const time = timer.elapsedTime()
    StdOut.println(`${count} triplets ${time} seconds`)
  }
}

// Execution
// ==============================
StopWatchClient.main(process.argv.slice(2))
