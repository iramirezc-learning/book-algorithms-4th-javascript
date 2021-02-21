const { StdIn, StdOut } = require('../libs')
const { Queue } = require('../adts')

/**
 * QueueClient
 * @classdesc Queue Test client.
 * @see p. 150
 */
class QueueClient {
  /**
   * Create a queue and enqueue/dequeue strings from the StdIn.
   * @example <caption>To be or not to be</caption>
   * ```sh
   * $ node queue.client.js < algs4-data/tobe.txt
   * to be or not to be (2 left on queue)
   * ```
   */
  static main() {
    const queue = new Queue()

    StdIn.read()
      .on('line', (line) => {
        line.split(' ').forEach((item) => {
          if (item === '-' && !queue.isEmpty()) {
            StdOut.printf(queue.dequeue() + ' ')
          } else {
            queue.enqueue(item)
          }
        })
      })
      .on('close', () => {
        StdOut.println(`(${queue.size()} left on queue)`)
      })
  }
}

// Execution
// ==============================
if (require.main === module) QueueClient.main()
