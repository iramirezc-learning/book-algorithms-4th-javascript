const { StdIn } = require('../../libs')
const Merge = require('./merge-sort')

/**
 * MergeSortClient
 * @classdesc Merge Sort Test Client.
 * @see p. 245, 273
 */
class MergeSortClient {
  /**
   * Runs the Merge Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * ```sh
   * $ node merge-sort.client.js < ~/algs4-data/tiny.txt
   * A E E L M O P R S T X
   * ```
   * @example <caption>Words3 Example</caption>
   * ```sh
   * $ node merge-sort.client.js < ~/algs4-data/words3.txt
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
        Merge.sort(array)

        if (!Merge.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        Merge.show(array)
      })
  }
}

// Execution
// ==============================
if (require.main === module) MergeSortClient.main()
