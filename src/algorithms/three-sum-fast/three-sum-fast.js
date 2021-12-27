const { numbersByAscendingOrder } = require('../../utils')
const { BinarySearch } = require('../../../js/lib')

/**
 * ThreeSumFast
 * > Running Time: n^2log(n)
 * @classdesc Counts the non-duplicate triplets in an array that sum 0.
 * @see p. 190
 */
class ThreeSumFast {
  /**
   * Returns the count of triplets in an array that sum 0.
   * @param {[]} a The array of integers
   */
  static count(a) {
    a.sort(numbersByAscendingOrder)
    const n = a.length
    let count = 0

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (BinarySearch.indexOf(a, -(a[i] + a[j])) > j) {
          count++
        }
      }
    }

    return count
  }
}

module.exports = ThreeSumFast
