const { In, StdIn, StdOut } = require('../../../libs')
const { pad, numbersByAscendingOrder } = require('../../../utils')

/**
 * Exercise 1.1.22
 */
class Exercise {
  /**
   * Recursive implementation of BinarySearch
   */
  static indexOf (a, key, lo, hi, depth = 1) {
    const msg = `${depth}[${lo},${hi}]`
    StdOut.println(pad(msg, msg.length + depth))

    if (lo > hi) return -1

    const mid = Math.floor(lo + (hi - lo) / 2)

    if (key < a[mid]) {
      return Exercise.indexOf(a, key, lo, mid - 1, ++depth)
    } else if (key > a[mid]) {
      return Exercise.indexOf(a, key, mid + 1, hi, ++depth)
    } else {
      return mid
    }
  }

  /**
   * Solution Exercise 1.1.22
   * @param {[]} args [whitelistFilePath]
   * @example <caption>Filtering a tiny whitelist</caption>
   * ```sh
   * $ node ex-1.1.22.js ~/algs4-data/tinyW.txt < ~/algs4-data/tinyT.txt | more
   * key = 23
   *  1[0,14]
   *   2[0,6]
   *    3[4,6]
   * index = 5
   * key = 50
   *  1[0,14]
   *   2[8,14]
   *    3[8,10]
   *     4[8,8]
   *      5[9,8]
   * index = -1
   * ...
   * ```
   */
  static solution (args) {
    const input = new In(args[0])
    const whitelist = input.readAllInts()
    const len = whitelist.length - 1

    whitelist.sort(numbersByAscendingOrder)

    StdIn.read().on('line', line => {
      const key = StdIn.readInt(line)
      StdOut.println(`key = ${key}`)
      const index = Exercise.indexOf(whitelist, key, 0, len)
      StdOut.println(`index = ${index}`)
    })
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
