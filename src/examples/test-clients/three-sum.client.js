const { StdOut, In } = require('../../libs')

/**
 * ThreeSum
 * @classdesc ThreeSum client.
 * @see p. 173
 */
class ThreeSum {
  /**
   * Returns the count of triplets in an array
   * @param {[]} a The array of integers
   */
  static count (a) {
    const n = a.length
    let count = 0

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
          if (a[i] + a[j] + a[k] === 0) {
            count++
          }
        }
      }
    }

    return count
  }

  /**
   * Counts the Triplets that sum to 0
   * @param {[]} args [tripletsFilePath]
   * @example <caption>1K ints</caption>
   * ```sh
   * $ node three-sum.client.js ~/algs4-data/1Kints.txt
   * 70
   * ```
   * @example <caption>2K ints</caption>
   * ```sh
   * $ node three-sum.client.js ~/algs4-data/2Kints.txt
   * 528
   * ```
   * @example <caption>4K ints</caption>
   * ```sh
   * $ node three-sum.client.js ~/algs4-data/4Kints.txt
   * 4039
   * ```
   * @example <caption>8K ints</caption>
   * ```sh
   * $ node three-sum.client.js ~/algs4-data/8Kints.txt
   * 32074
   * ```
   */
  static main (args) {
    const input = new In(args[0])
    const a = input.readAllInts()

    StdOut.println(this.count(a))
  }
}

// Execution
// ==============================
ThreeSum.main(process.argv.slice(2))
