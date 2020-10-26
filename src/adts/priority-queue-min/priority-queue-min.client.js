const MinPQ = require('./priority-queue-min')
const { StdIn, StdOut } = require('../../libs')
const { Stack, Transaction } = require('../index')

/**
 * TopM
 * @classdesc Min Priority Queue Test client.
 * @see p. 311
 */
class TopM {
  /**
   * Prints the top `m` transactions from the StdIn.
   * @param {[]} args [m]
   * @example <caption>Print the top 5 transactions</caption>
   * ```sh
   * $ node priority-queue-min.client.js 5 < ~/algs4-data/tinyBatch.txt
   * Thompson 2/27/2000 4747.08
   * vonNeumann 2/12/1994 4732.35
   * vonNeumann 1/11/1999 4409.74
   * Hoare 8/18/1992 4381.21
   * vonNeumann 3/26/2002 4121.85
   * ```
   */
  static main (args) {
    const m = parseInt(args[0], 10)
    const pq = new MinPQ(m + 1)

    StdIn.read()
      .on('line', line => {
        pq.insert(new Transaction(line.trim()))

        if (pq.size() > m) {
          pq.delMin()
        }
      })
      .on('close', () => {
        const stack = new Stack()

        while (!pq.isEmpty()) {
          stack.push(pq.delMin())
        }

        for (const transaction of stack) {
          StdOut.println(String(transaction))
        }
      })
  }
}

// Execution
// ==============================
TopM.main(process.argv.slice(2))
