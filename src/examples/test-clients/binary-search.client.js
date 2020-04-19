const { In, StdIn, StdOut } = require('../../libs')
const { BinarySearch } = require('../../algorithms')

/**
 * BSClient
 * @desc BinarySearch Test client.
 * @see p. 47
 */
class BSClient {
  /**
   * main
   * @desc Prints the keys from the StdIn that are not in the whitelist File.
   * @param {[]} args [whitelistFilePath]
   * @example
   * ```sh
   * $ node binary-search.client.js ~/algs4-data/tinyW.txt < ~/algs4-data/tinyT.txt | more
   * 50
   * 99
   * 13
   * ```
   */
  static main (args) {
    const input = new In(args[0])
    const whitelist = input.readAllInts()

    whitelist.sort((a, b) => a - b)

    StdIn.on('line', line => {
      const key = StdIn.readInt(line)

      if (BinarySearch.indexOf(whitelist, key) === -1) {
        StdOut.println(key)
      }
    })

    StdIn.on('close', () => process.exit(0))
  }
}

// Execution
// ==============================
BSClient.main(process.argv.slice(2))
