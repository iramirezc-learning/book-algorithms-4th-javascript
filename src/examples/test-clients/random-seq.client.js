const { StdRandom, StdOut } = require('../../libs')

/**
 * RandomSeq
 * @classdesc Sample StdOut client
 * @see p. 37
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/RandomSeq.java.html}
 */
class RandomSeq {
  /**
   * Prints `n` random real numbers in range [lo, hi).
   * @param {[]} args [n, lo, hi]
   * @example <caption>Generating 5 random doubles between 100-199.99</caption>
   * ```sh
   * $ node random-seq.client.js 5 100.0 199.99
   * 166.29
   * 171.09
   * 199.85
   * 159.78
   * 165.14
   * ```
   * @example <caption>Streaming the StdOut to a file</caption>
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
  }
}

// Execution
// ==============================
RandomSeq.main(process.argv.slice(2))
