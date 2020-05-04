const { In, StdIn, StdOut } = require('../../../libs')
const { BinarySearch } = require('../../../algorithms')

/**
 * Exercise 1.1.28
 */
class Exercise {
  /**
   * Returns new array with unique keys.
   * @param {[]} a Sorted Array
   */
  static filterDuplicates (a) {
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

  /**
   * Solution Exercise 1.1.28.
   * Remove duplicates from whitelist after sort.
   * @param {[]} args [whitelist]
   * @example
   * ```shell
   * $ node ex-1.1.28.js ~/algs4-data/largeW.txt < ~/algs4-data/largeT.txt | more
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
   */
  static solution (args) {
    const input = new In(args[0])
    const whitelist = input.readAllInts()

    whitelist.sort((a, b) => a - b)

    const unique = this.filterDuplicates(whitelist)

    StdOut.println(`Whitelist length: ${whitelist.length}`)
    StdOut.println(`Unique length: ${unique.length}\n`)

    StdIn.read().on('line', line => {
      const key = StdIn.readInt(line)

      if (BinarySearch.indexOf(unique, key) === -1) {
        StdOut.println(key)
      }
    })
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
