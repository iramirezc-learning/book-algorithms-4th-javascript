const { StdIn } = require('../../libs')
const Shell = require('./shell-sort')

/**
 * ShellSortClient
 * @classdesc Shell Sort Test Client.
 * @see p. 245, 259
 */
class ShellSortClient {
  /**
   * Runs the Shell Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * ```sh
   * $ node shell-sort.client.js < ~/algs4-data/tiny.txt
   * A E E L M O P R S T X
   * ```
   * @example <caption>Words3 Example</caption>
   * ```sh
   * $ node shell-sort.client.js < ~/algs4-data/words3.txt
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
        Shell.sort(array)

        if (!Shell.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        Shell.show(array)
      })
  }
}

// Execution
// ==============================
ShellSortClient.main()
