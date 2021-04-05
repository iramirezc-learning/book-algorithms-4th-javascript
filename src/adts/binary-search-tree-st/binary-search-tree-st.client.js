const BinarySearchTreeST = require('./binary-search-tree-st')
const { StdIn, StdOut } = require('../../libs')

/**
 * BinarySearchTreeST test client.
 * @memberof module:test-clients
 * @see pages: 370, 398, 399, 407, 409, 411, 413.
 */
class BinarySearchTreeSTClient {
  /**
   * Reads a sequence of chars from the StdIn
   * and stores them as keys with an incremental value
   * starting from 0. Finally, it prints all the keys
   * inserted with their assigned value.
   * @example <caption>Inserting Example</caption>
   * {@lang bash}
   * $ ./client BinarySearchTreeSTClient < algs4-data/custom/search-example.txt
   * A 8
   * C 4
   * E 12
   * H 5
   * L 11
   * M 9
   * P 10
   * R 3
   * S 0
   * X 7
   */
  static main() {
    const bst = new BinarySearchTreeST()
    let i = 0

    StdIn.read()
      .on('line', (line) => {
        line
          .trim()
          .split(' ')
          .forEach((key) => {
            bst.put(key, i++)
          })
      })
      .on('close', () => {
        for (const s of bst.keys()) {
          StdOut.println(`${s} ${bst.get(s)}`)
        }
      })
  }
}

module.exports = { BinarySearchTreeSTClient }
