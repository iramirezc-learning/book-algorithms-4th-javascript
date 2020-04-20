const { In, StdIn, StdOut } = require('../../libs')
const { LinearSearch } = require('../../algorithms')

/**
 * LSClient
 * @classdesc LinearSearch Test client.
 * @see p. 47
 */
class LSClient {
  /**
   * Prints the keys from the StdIn that are not in the whitelist Input File.
   * @param {[]} args [whitelistFilePath]
   * @example <caption>Filtering a tiny whitelist</caption>
   * ```sh
   * $ node linear-search.client.js ~/algs4-data/tinyW.txt < ~/algs4-data/tinyT.txt | more
   * 50
   * 99
   * 13
   * ```
   * @example <caption>Filtering a large whitelist</caption>
   * ```sh
   * $ node linear-search.client.js ~/algs4-data/largeW.txt < ~/algs4-data/largeT.txt | more
   * 499569
   * 984875
   * 295754
   * 207807
   * 140925
   * 161828
   * ...
   * ```
   */
  static main (args) {
    const input = new In(args[0])
    const whitelist = input.readAllInts()

    StdIn.read().on('line', line => {
      const key = StdIn.readInt(line)

      if (LinearSearch.indexOf(whitelist, key) === -1) {
        StdOut.println(key)
      }
    })
  }
}

// Execution
// ==============================
LSClient.main(process.argv.slice(2))
