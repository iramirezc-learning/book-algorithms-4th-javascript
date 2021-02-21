const { StdIn } = require('../../libs')
const Quick3way = require('./quick-3way-sort')

/**
 * Quick3waySortClient
 * @classdesc Quick3way Sort Test Client.
 * @see p. 245, 299
 */
class Quick3waySortClient {
  /**
   * Runs the Quick3way Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * ```sh
   * $ ./client Quick3waySortClient < algs4-data/tiny.txt
   * A E E L M O P R S T X
   * ```
   * @example <caption>Words3 Example</caption>
   * ```sh
   * $ ./client Quick3waySortClient < algs4-data/words3.txt
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
        Quick3way.sort(array)

        if (!Quick3way.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        Quick3way.show(array)
      })
  }
}

module.exports = { Quick3waySortClient }
