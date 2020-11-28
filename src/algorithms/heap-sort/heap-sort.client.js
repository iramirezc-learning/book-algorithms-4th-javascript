const Heap = require('./heap-sort')
const { StdIn } = require('../../libs')

/**
 * Heap Sort Test Client.
 * @memberof module:test-clients
 * @see page: 324.
 * @see [edu.princeton.cs.algs4.Heap.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Heap.java.html}
 */
class HeapSortClient {
  /**
   * Runs the Heap Sort Algorithm
   * with the input provided.
   * @example <caption>Tiny Example</caption>
   * {@lang bash}
   * $ ./client HeapSortClient < algs4-data/tiny.txt
   * A E E L M O P R S T X
   * @example <caption>Words3 Example</caption>
   * {@lang bash}
   * $ ./client HeapSortClient < algs4-data/words3.txt
   * all bad bed bug dad ... yes yet zoo
   */
  static main () {
    let array = []

    // read all strings from standard input.
    StdIn.read()
      .on('line', line => {
        array = array.concat(line.trim().split(' '))
      })
      .on('close', () => {
        Heap.sort(array)

        if (!Heap.isSorted(array)) {
          throw new Error('array is NOT sorted')
        }

        Heap.show(array)
      })
  }
}

module.exports = { HeapSortClient }
