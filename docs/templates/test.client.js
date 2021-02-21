/** @module test-clients */

const { StdOut } = require('../src/libs')

/**
 * An example of a TestClient class.
 * @memberof module:test-clients
 * @see page: n.
 * @see [edu.princeton.cs.algs4.CLASS_NAME.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/CLASS_NAME.java.html}
 */
class TestClient {
  /**
   * Outputs the multiplication of `n * m`.
   * @example <caption>Multiplying 10 * 50</caption>
   * {@lang bash}
   * $ ./client TestClient 10 50
   * 500
   * @param {...string} args - Params: `[n, m]`
   * * @type {number} `args[0]` - Number `n`.
   * * @type {number} `args[1]` - Number `m`.
   */
  static main(args) {
    const n = parseInt(args[0])
    const m = parseInt(args[1])

    StdOut.println(n * m)
  }

  /**
   * Other methods go after `main` method.
   */
  static otherMethod() {
    // your code goes here
  }
}

module.exports = { TestClient }
