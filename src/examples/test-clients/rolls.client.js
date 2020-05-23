const { StdOut, StdRandom } = require('../../libs')
const { Counter } = require('../../adts')

/**
 * Rolls
 * @classdesc Counter client
 * @see p. 72
 */
class Rolls {
  /**
   * Simulates rolls of a die
   * @param {[]} args [trials]
   * @example
   * ```sh
   * $ node rolls.client.js 100000
   * 16399 1s
   * 16785 2s
   * 16661 3s
   * 16511 4s
   * 16904 5s
   * 16740 6s
   * ```
   */
  static main (args) {
    const trials = parseInt(args[0], 10)
    const SIDES = 6
    const rolls = new Array(SIDES + 1)

    for (let i = 1; i <= SIDES; i++) {
      rolls[i] = new Counter(`${i}s`)
    }

    for (let t = 0; t < trials; t++) {
      const result = StdRandom.uniform(1, SIDES + 1)
      rolls[result].increment()
    }

    for (let i = 1; i <= SIDES; i++) {
      StdOut.println(String(rolls[i]))
    }
  }
}

// Execution
// ==============================
Rolls.main(process.argv.slice(2))
