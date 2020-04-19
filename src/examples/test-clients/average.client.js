const { StdIn, StdOut } = require('../../libs')

/**
 * Average
 * @desc Sample StdIn client
 * @see p. 39
 */
class Average {
  /**
   * main
   * @desc Computes the average of the numbers
   * read from the StdIn.
   * @example
   * ```sh
   * $ node average.client.js
   * > 1.23456
   * > 2.34567
   * > 3.45678
   * > 4.56789
   * $ <ctrl-d>
   * Average is 2.90123
   * ```
   * @example
   * ```sh
   * $ node random-seq.client.js 1000 100 199.99 | node average.client.js
   * Average is 150.25505
   * ```
   */
  static main () {
    let sum = 0
    let count = 0

    StdIn.on('line', line => {
      sum += parseFloat(line)
      count++
    })

    StdIn.on('close', () => {
      const avg = sum / count

      StdOut.printf('Average is %f\n', avg.toFixed(5))
    })
  }
}

// Execution
// ==============================
Average.main()
