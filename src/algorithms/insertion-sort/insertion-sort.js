const { GenericSort } = require('../../abstracts')

/**
 * Insertion
 * @augments GenericSort
 * @classdesc Insertion Sort Algorithm.
 * @see p. 245, 251
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Insertion.java.html}
 */
class Insertion extends GenericSort {
  /**
   * Sorts the `array` using the Insertion Sort algorithm.
   * @param {[*]} array Array of values.
   * @param {*} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static sort (array, comparator) {
    const n = array.length

    for (let i = 1; i < n; i++) {
      for (let j = i; j > 0 && this.less(array[j], array[j - 1], comparator); j--) {
        this.exchange(array, j, j - 1)
      }
    }
  }
}

module.exports = Insertion
