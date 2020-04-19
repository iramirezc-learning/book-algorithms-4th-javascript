const { In, StdIn, StdOut } = require('../../libs')
const { LinearSearch } = require('../../algorithms')

/**
 * LSClient
 * @desc LinearSearch Test client.
 * @see p. 47
 */
class LSClient {
  /**
   * main
   * @desc Prints the keys from the StdIn that are not in the whitelist File.
   * @param {[]} args [whitelistFilePath]
   * @example
   * ```sh
   * $ node linear-search.client.js ~/algs4-data/tinyW.txt < ~/algs4-data/tinyT.txt | more
   * 50
   * 99
   * 13
   * ```
   * @example
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

    StdIn.on('line', line => {
      const key = StdIn.readInt(line)

      if (LinearSearch.indexOf(whitelist, key) === -1) {
        StdOut.println(key)
      }
    })

    StdIn.on('close', () => process.exit(0))
  }
}

// Execution
// ==============================
LSClient.main(process.argv.slice(2))
