const MaxPQ = require('./max-priority-queue')
const { StdIn, StdOut } = require('../../libs')
const { Stack, Transaction } = require('../index')

/**
 * LowestM
 * @classdesc Max Priority Queue Test client.
 * @see p. 311
 */
class LowestM {
  /**
   * Prints the lowest `m` transactions from the StdIn.
   * @param {[]} args [m]
   * @example <caption>Print the lowest 5 transactions</caption>
   * ```sh
   * $ node max-priority-queue.client.js 5 < algs4-data/tinyBatch.txt
   * Turing 1/11/2002 66.1
   * Turing 6/17/1990 644.08
   * Dijkstra 9/10/2000 708.95
   * Dijkstra 11/18/1995 837.42
   * Hoare 8/12/2003 1025.7
   * ```
   */
  static main(args) {
    const m = parseInt(args[0], 10)
    const pq = new MaxPQ(m + 1)

    StdIn.read()
      .on('line', (line) => {
        pq.insert(new Transaction(line.trim()))

        if (pq.size() > m) {
          pq.delMax()
        }
      })
      .on('close', () => {
        const stack = new Stack()

        while (!pq.isEmpty()) {
          stack.push(pq.delMax())
        }

        for (const transaction of stack) {
          StdOut.println(String(transaction))
        }
      })
  }
}

// Execution
// ==============================
if (require.main === module) LowestM.main(process.argv.slice(2))
