const BinarySearch = require('../binary-search/binary-search')
const { numbersByAscendingOrder } = require('../../utils')

/**
 * TwoSumFast
 * > Running Time: n log(n)
 * @classdesc Counts the pair of numbers in an array that sum 0.
 * @see p. 189
 */
class TwoSumFast {
  /**
   * Returns the count of non duplicate pairs of numbers in an array that sum 0.
   * @param {[]} a The array of integers
   */
  static count (a) {
    a.sort(numbersByAscendingOrder)
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
