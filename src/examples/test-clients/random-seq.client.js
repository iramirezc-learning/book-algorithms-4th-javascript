const { StdRandom, StdOut } = require('../../libs')

/**
 * RandomSeq
 * @desc Sample StdOut client
 * @see p. 37
 */
class RandomSeq {
  /**
   * main
   * @desc Prints `n` random real numbers in range [lo, hi).
   * @param {[]} args [n, lo, hi]
   * @example
   * ```sh
   * $ node random-seq.client.js 5 100.0 199.99
   * 166.29
   * 171.09
   * 199.85
   * 159.78
   * 165.14
   * ```
   * @example
   * ```sh
   * $ node random-seq.client.js 1000 100.0 199.99 > data.txt
   * ```
   */
  static main (args) {
    const n = parseInt(args[0], 10)
    const lo = parseFloat(args[1])
    const hi = parseFloat(args[2])

    for (let i = 0; i < n; i++) {
      const x = StdRandom.uniform(lo, hi)

      StdOut.printf('%f\n', x.toFixed(2))
    }

    process.exit(0) // sometimes it gets stuck.
  }
}

// Execution
// ==============================
RandomSeq.main(process.argv.slice(2))
