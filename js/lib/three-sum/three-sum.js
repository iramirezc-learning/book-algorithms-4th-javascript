/**
 * Counts the triplets in an array that sum 0.
 * @note Running Time: n^3
 * @see p.173
 */
class ThreeSum {
  /**
   * Returns the count of triplets in an array that sum 0.
   * @param {Array<number>} a The array of integers
   */
  static count(a) {
    const n = a.length
    let count = 0

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
          if (a[i] + a[j] + a[k] === 0) {
            count++
          }
        }
      }
    }

    return count
  }
}

module.exports = ThreeSum
