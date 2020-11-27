const { StdIn, StdOut } = require('../../libs')
const { Bag } = require('../../adts')

/**
 * BagClient
 * @classdesc Bag Test client.
 * @see p. 125
 */
class BagClient {
  /**
   * Create a bag and reads doubles from the StdIn.
   * Then it calculates the Mean and the Standard Deviation.
   * @example <caption>Mean & StdDev</caption>
   * ```sh
   * $ node bag.client.js
   * > 100
   * > 99
   * > 101
   * > 120
   * > 98
   * > 107
   * > 109
   * > 81
   * > 101
   * > 90
   * <ctrl+d>
   * Mean: 100.60
   * Stddev: 10.51
   * ```
   */
  static main () {
    const bag = new Bag()

    StdIn.read()
      .on('line', line => {
        bag.add(parseFloat(line))
      })
      .on('close', () => {
        const n = bag.size()
        let sum = 0

        for (const x of bag) {
          sum += x
        }

        const mean = sum / n

        sum = 0

        for (const x of bag) {
          sum += (x - mean) * (x - mean)
        }

        const stddev = Math.sqrt(sum / (n - 1))

        StdOut.printf('Mean: %f\n', mean.toFixed(2))
        StdOut.printf('Stddev: %f\n', stddev.toFixed(2))
      })
  }
}

// Execution
// ==============================
if (require.main === module) BagClient.main()
