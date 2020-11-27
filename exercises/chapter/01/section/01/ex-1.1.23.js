const { In, StdIn, StdOut } = require('../../../../../src/libs')
const { BinarySearch } = require('../../../../../src/algorithms')
const { numbersByAscendingOrder } = require('../../../../../src/utils')

/**
 * Exercise 1.1.23
 */
class Exercise {
  /**
   * Solution Exercise 1.1.23
   * @example <caption>Filtering whitelist with +</caption>
   * ```sh
   * $ node ex-1.1.23.js algs4-data/tinyW.txt + < algs4-data/tinyT.txt | more
   * 50
   * 99
   * 13
   * ```
   * @example <caption>Filtering whitelist with -</caption>
   * ```sh
   * $ node ex-1.1.23.js algs4-data/tinyW.txt - < algs4-data/tinyT.txt | more
   * 23
   * 10
   * 18
   * 23
   * 98
   * ... # truncated
   * ```
   * @param {[]} args [whitelistFile, sign(+/-)]
   */
  static solution (args) {
    const input = new In(args[0])
    const sign = args[1]
    const whitelist = input.readAllInts()

    whitelist.sort(numbersByAscendingOrder)

    StdIn.read().on('line', line => {
      const key = StdIn.readInt(line)
      const index = BinarySearch.indexOf(whitelist, key)

      if (sign === '+' && index === -1) {
        // print numbers that are NOT in the whitelist
        StdOut.println(key)
      } else if (sign === '-' && index >= 0) {
        // print numbers that are in the whitelist
        StdOut.println(key)
      }
    })
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
