const { StdOut, In } = require('../../libs')
const ThreeSumFast = require('./three-sum-fast')

/**
 * ThreeSumFastClient
 * @classdesc ThreeSumFastClient.
 * @see p. 190
 */
class ThreeSumFastClient {
  /**
   * Counts the Triplets that sum to 0
   * @param {[]} args [tripletsFilePath]
   * @example <caption>1K ints</caption>
   * ```sh
   * $ node three-sum-fast.client.js ~/algs4-data/1Kints.txt
   * 70
   * ```
   * @example <caption>2K ints</caption>
   * ```sh
   * $ node three-sum-fast.client.js ~/algs4-data/2Kints.txt
   * 528
   * ```
   * @example <caption>4K ints</caption>
   * ```sh
   * $ node three-sum-fast.client.js ~/algs4-data/4Kints.txt
   * 4039
   * ```
   * @example <caption>8K ints</caption>
   * ```sh
   * $ node three-sum-fast.client.js ~/algs4-data/8Kints.txt
   * 32074
   * ```
   */
  static main (args) {
    const input = new In(args[0])
    const a = input.readAllInts()

    StdOut.println(ThreeSumFast.count(a))
  }
}

// Execution
// ==============================
ThreeSumFastClient.main(process.argv.slice(2))
