const { In, StdIn, StdOut } = require('../../../../../src/libs')
const { BinarySearch } = require('../../../../../src/algorithms')
const { numbersByAscendingOrder } = require('../../../../../src/utils')

/**
 * Exercise 1.1.28
 */
class Exercise {
  /**
   * Solution Exercise 1.1.28.
   * Remove duplicates from whitelist after sort.
   * @example
   * ```shell
   * $ node ex-1.1.28.js algs4-data/largeW.txt < algs4-data/largeT.txt | more
   * Whitelist length: 1000000
   * Unique length: 632469
   *
   * 499569
   * 984875
   * 295754
   * 207807
   * 140925
   * 161828
   * 17672230
   * ... # truncated
   * ```
   * @param {[]} args [whitelist]
   */
  static solution(args) {
    const input = new In(args[0])
    const whitelist = input.readAllInts()

    whitelist.sort(numbersByAscendingOrder)

    const unique = this.filterDuplicates(whitelist)

    StdOut.println(`Whitelist length: ${whitelist.length}`)
    StdOut.println(`Unique length: ${unique.length}\n`)

    StdIn.read().on('line', (line) => {
      const key = StdIn.readInt(line)

      if (BinarySearch.indexOf(unique, key) === -1) {
        StdOut.println(key)
      }
    })
  }

  /**
   * Returns new array with unique keys.
   * @param {[]} a Sorted Array
   */
  static filterDuplicates(a) {
    const unique = []

    // filter duplicated keys
    for (let i = 0; i < a.length; i++) {
      const key = a[i]

      if (BinarySearch.indexOf(a, key) === i) {
        unique.push(key)
      }
    }

    return unique
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
