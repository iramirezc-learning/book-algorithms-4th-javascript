/** @module TestClients */

const { StdOut } = require('../../src/libs')

/**
 * An example of a TestClient class.
 * @memberof module:TestClients
 * @see page: n.
 * @see [edu.princeton.cs.algs4.CLASS_NAME.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/CLASS_NAME.java.html}
 */
class TestClient {
  /**
   * Main static function
   * @param {[number, number]} args - [n, m]
   * @returns {number} `n` * `m`
   * @example <caption>testing the client</caption>
   * ```sh
   * $ ./client TestClient 10 50
   * 500
   * ```
   */
  static main (args) {
    const n = parseInt(args[0])
    const m = parseInt(args[1])

    StdOut.println(n * m)
  }
}

module.exports = { TestClient }
