const { In, StdIn, StdOut } = require('../../libs')
const { numbersByAscendingOrder } = require('../../utils')
const { BinarySearch } = require('../../../js/lib')

/**
 * BSClient
 * @classdesc BinarySearch Test client.
 * @see p. 47, 98, 99
 */
class BSClient {
  /**
   * Prints the keys from the StdIn that are not in the whitelist Input File.
   * @param {[]} args [whitelistFilePath]
   * @example <caption>Filtering a tiny whitelist</caption>
   * ```sh
   * $ ./client BSClient algs4-data/tinyW.txt < algs4-data/tinyT.txt | more
   * 50
   * 99
   * 13
   * ```
   * @example <caption>Filtering a large whitelist</caption>
   * ```sh
   * $ ./client BSClient algs4-data/largeW.txt < algs4-data/largeT.txt | more
   * 499569
   * 984875
   * 295754
   * 207807
   * 140925
   * 161828
   * ...
   * ```
   */
  static main(args) {
    const input = new In(args[0])
    const whitelist = input.readAllInts()

    whitelist.sort(numbersByAscendingOrder)

    StdIn.read().on('line', (line) => {
      const key = StdIn.readInt(line)

      if (BinarySearch.indexOf(whitelist, key) === -1) {
        StdOut.println(key)
      }
    })
  }
}

module.exports = { BSClient }
