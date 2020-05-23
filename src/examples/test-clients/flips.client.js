const { StdOut, StdRandom } = require('../../libs')
const { Counter } = require('../../adts')

/**
 * Flips
 * @classdesc Counter Client
 * @see p. 70, 71, 85, 89
 */
class Flips {
  /**
   * Returns the counter with the max tally.
   * @param {Counter} counterX Counter X
   * @param {Counter} counterY Counter Y
   */
  static max (counterX, counterY) {
    if (counterX.tally() > counterY.tally()) {
      return counterX
    } else {
      return counterY
    }
  }

  /**
   * Simulates the flips of a coin and computes the delta.
   * @param {[]} args [trials]
   * @example
   * ```sh
   * $ node flips.client.js 1000
   * 490 heads
   * 510 tails
   * delta: 20
   * 510 tails wins
   * ```
   */
  static main (args) {
    const trials = parseInt(args[0], 10)
    const heads = new Counter('heads')
    const tails = new Counter('tails')

    for (let i = 0; i < trials; i++) {
      if (StdRandom.bernoulli(0.5)) {
        heads.increment()
      } else {
        tails.increment()
      }
    }

    StdOut.println(heads.toString())
    StdOut.println(tails.toString())

    const delta = heads.tally() - tails.tally()

    StdOut.println(`delta: ${Math.abs(delta)}`)

    if (heads.tally() === tails.tally()) {
      StdOut.println(`It's a Tie!`)
    } else {
      StdOut.println(`${Flips.max(heads, tails)} wins`)
    }
  }
}

// Execution
// ==============================
Flips.main(process.argv.slice(2))
