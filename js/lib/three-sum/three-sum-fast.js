const BinarySearch = require('../binary-search/binary-search-recursive')
const {
  arrays: { sortNumbersByAscendingOrder }
} = require('../../util')

/**
 * Counts the non-duplicate triplets in an array that sum 0.
 * @note Running Time: n^2log(n)
 * @see p.190
 */
class ThreeSumFast {
  /**
   * Returns the count of triplets in an array that sum 0.
   * @param {Array<number>} a The array of integers.
   * @returns {number}
   */
  static count(a) {
    a.sort(sortNumbersByAscendingOrder)

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
