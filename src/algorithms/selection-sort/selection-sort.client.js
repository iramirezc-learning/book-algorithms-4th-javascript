const { StdIn } = require('../../libs')
const Selection = require('./selection-sort')

/**
 * SelectionSortClient
 * @classdesc Selection Sort Test Client.
 * @see p. 245
 */
class SelectionSortClient {
  /**
   * Runs the Selection Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * ```sh
   * $ node selection-sort.client.js < ~/algs4-data/tiny.txt
   * A E E L M O P R S T X
   * ```
   * @example <caption>Words3 Example</caption>
   * ```sh
   * $ node selection-sort.client.js < ~/algs4-data/words3.txt
   *  all bad bed bug dad ... yes yet zoo
   * ```
   */
  static main () {
    let array = []

    // read all strings from standard input.
    StdIn.read()
      .on('line', line => {
        array = array.concat(line.split(' '))
      })
      .on('close', () => {
        Selection.sort(array)

        if (!Selection.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        Selection.show(array)
      })
  }
}

// Execution
// ==============================
SelectionSortClient.main()
