const { StdIn } = require('../../libs')
const MergeBU = require('./merge-sort-bu')

/**
 * MergeBUSortClient
 * @classdesc Bottom-Up Merge Sort Test Client.
 * @see p. 273, 278
 */
class MergeBUSortClient {
  /**
   * Runs the Bottom-Up Merge Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * ```sh
   * $ node merge-sort-bu.client.js < algs4-data/tiny.txt
   * A E E L M O P R S T X
   * ```
   * @example <caption>Words3 Example</caption>
   * ```sh
   * $ node merge-sort-bu.client.js < algs4-data/words3.txt
   * all bad bed bug dad ... yes yet zoo
   * ```
   */
  static main () {
    let array = []

    // read all strings from standard input.
    StdIn.read()
      .on('line', line => {
        array = array.concat(line.trim().split(' '))
      })
      .on('close', () => {
        MergeBU.sort(array)

        if (!MergeBU.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        MergeBU.show(array)
      })
  }
}

// Execution
// ==============================
if (require.main === module) MergeBUSortClient.main()
