/** @module samples */

const { StdOut } = require('../src/libs')

/**
 * @summary Client
 * @classdesc A Test Client
 * @page n
 */
class Client {
  /**
   * Main static function
   * @param {[number, number]} args - [n, m]
   * @returns {number} `n` * `m`
   * @example <caption>testing the client</caption>
   * ```sh
   * $ node test.client.js 10 50
   * 500
   * ```
   */
  static main (args) {
    const n = parseInt(args[0])
    const m = parseInt(args[1])

    StdOut.println(n * m)
  }
}

// Execution
// ==============================
Client.main(process.argv.slice(2))
