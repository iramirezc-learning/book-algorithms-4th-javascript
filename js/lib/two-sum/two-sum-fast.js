const BinarySearch = require('../binary-search/binary-search-recursive')
const {
  arrays: { sortNumbersByAscendingOrder }
} = require('../../util')

/**
 * Counts the pair of numbers in an array that sum 0.
 * @note Running Time: n log(n)
 * @see p.189
 */
class TwoSumFast {
  /**
   * Returns the count of non duplicate pairs of numbers in an array that sum 0.
   * @param {Array<number>} a The array of integers.
   */
  static count(a) {
    a.sort(sortNumbersByAscendingOrder) // sort for binary search

    const n = a.length
    let count = 0

    for (let i = 0; i < n; i++) {
      if (BinarySearch.indexOf(a, -a[i]) > i) {
        count++
      }
    }

    return count
  }
}

module.exports = TwoSumFast
