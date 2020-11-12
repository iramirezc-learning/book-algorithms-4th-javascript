const { StdOut, In } = require('../../libs')
const TwoSumFast = require('./two-sum-fast')

/**
 * TwoSumFastClient
 * @classdesc TwoSumFastClient.
 * @see p. 189
 */
class TwoSumFastClient {
  /**
   * Counts the non-duplicated pairs that sum to 0
   * @param {[]} args [tripletsFilePath]
   * @example <caption>1K ints</caption>
   * ```sh
   * $ node two-sum-fast.client.js algs4-data/1Kints.txt
   * 1
   * ```
   * @example <caption>2K ints</caption>
   * ```sh
   * $ node two-sum-fast.client.js algs4-data/2Kints.txt
   * 2
   * ```
   * @example <caption>4K ints</caption>
   * ```sh
   * $ node two-sum-fast.client.js algs4-data/4Kints.txt
   * 3
   * ```
   * @example <caption>8K ints</caption>
   * ```sh
   * $ node two-sum-fast.client.js algs4-data/8Kints.txt
   * 19
   * ```
   * @example <caption>1M ints</caption>
   * ```sh
   * $ node two-sum-fast.client.js algs4-data/1Mints.txt
   * 249838
   * ```
   */
  static main (args) {
    const input = new In(args[0])
    const a = input.readAllInts()

    StdOut.println(TwoSumFast.count(a))
  }
}

// Execution
// ==============================
if (require.main === module) TwoSumFastClient.main(process.argv.slice(2))
