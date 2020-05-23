const { StdOut, StdRandom } = require('../../libs')
const { Accumulator } = require('../../adts')

/**
 * TestAccumulator
 * @classdesc Accumulator Client
 * @see p. 93
 */
class TestAccumulator {
  /**
   * Accumulates a total of `trials` numbers
   * @param {[]} args [trials]
   * @example
   * ```sh
   * $ node accumulator.client.js 100000
   * Mean (100000 values): 0.49879
   * ```
   */
  static main (args) {
    const trials = parseInt(args[0], 10)
    const accumulator = new Accumulator()

    for (let t = 0; t < trials; t++) {
      accumulator.addDataValue(StdRandom.uniform(0, 0.999))
    }

    StdOut.println(String(accumulator))
  }
}

// Execution
// ==============================
TestAccumulator.main(process.argv.slice(2))
