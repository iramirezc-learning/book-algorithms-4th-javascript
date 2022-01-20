const GenericSort = require('../generic-sort/generic-sort')

/**
 * Insertion Sort.
 * @augments GenericSort
 * @see pg.245,251
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Insertion.java.html}
 */
class Insertion extends GenericSort {
  /**
   * Sorts the `array` using the Insertion Sort algorithm.
   * @param {Array<number>} array Array of numbers.
   * @returns {void}
   */
  static sort(array) {
    const n = array.length

    for (let i = 1; i < n; i++) {
      for (let j = i; j > 0 && this.less(array[j], array[j - 1]); j--) {
        this.exchange(array, j, j - 1)
      }
    }
  }
}

module.exports = Insertion
