const { StdIn } = require('../../libs')
const Quick = require('./quick-sort')

/**
 * QuickSortClient
 * @classdesc Quick Sort Test Client.
 * @see p. 245, 289
 */
class QuickSortClient {
  /**
   * Runs the Quick Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * ```sh
   * $ node quick-sort.client.js < ~/algs4-data/tiny.txt
   * A E E L M O P R S T X
   * ```
   * @example <caption>Words3 Example</caption>
   * ```sh
   * $ node quick-sort.client.js < ~/algs4-data/words3.txt
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
        Quick.sort(array)

        if (!Quick.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        Quick.show(array)
      })
  }
}

// Execution
// ==============================
QuickSortClient.main()
