const { StdOut } = require('../../libs')

/**
 * Client
 * @classdesc Client code
 * @see p. xx
 */
class Client {
  /**
   * What is the client doing
   * @param {[]} args [x, y]
   * @example <caption>test</caption>
   * ```sh
   * $ node test.client.js 10 50
   * TODO:
   * ```
   */
  static main (args) {
    StdOut.println('TODO', args)
  }
}

// Execution
// ==============================
Client.main(process.argv.slice(2))
