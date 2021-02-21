const { StdIn } = require('../../libs')
const Insertion = require('./insertion-sort')

/**
 * InsertionSortClient
 * @classdesc Insertion Sort Test Client.
 * @see p. 245, 251
 */
class InsertionSortClient {
  /**
   * Runs the Insertion Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * ```sh
   * $ ./client InsertionSortClient < algs4-data/tiny.txt
   * A E E L M O P R S T X
   * ```
   * @example <caption>Words3 Example</caption>
   * ```sh
   * $ ./client InsertionSortClient < algs4-data/words3.txt
   * all bad bed bug dad ... yes yet zoo
   * ```
   */
  static main() {
    let array = []

    // read all strings from standard input.
    StdIn.read()
      .on('line', (line) => {
        array = array.concat(line.trim().split(' '))
      })
      .on('close', () => {
        Insertion.sort(array)

        if (!Insertion.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        Insertion.show(array)
      })
  }
}

module.exports = { InsertionSortClient }
