const SequentialSearchST = require('./sequential-search-st')
const { StdIn, StdOut } = require('../../libs')

/**
 * SequentialSearchST test client.
 * @memberof module:test-clients
 * @see pages: 370, 375.
 */
class SequentialSearchSTClient {
  /**
   * Reads a sequence of chars from the StdIn
   * and stores them as keys with an incremental value
   * starting from 0. Finally, it prints all the keys
   * inserted with their assigned value.
   * @example <caption>Inserting Example</caption>
   * {@lang bash}
   * $ ./client SequentialSearchSTClient < algs4-data/custom/search-example.txt
   * L 11
   * P 10
   * M 9
   * X 7
   * H 5
   * C 4
   * R 3
   * A 8
   * E 12
   * S 0
   */
  static main() {
    const st = new SequentialSearchST()
    let i = 0

    StdIn.read()
      .on('line', (line) => {
        line
          .trim()
          .split(' ')
          .forEach((key) => {
            st.put(key, i++)
          })
      })
      .on('close', () => {
        for (const s of st.keys()) {
          StdOut.println(`${s} ${st.get(s)}`)
        }
      })
  }
}

module.exports = { SequentialSearchSTClient }
