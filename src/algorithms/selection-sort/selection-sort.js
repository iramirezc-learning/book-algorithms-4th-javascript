const { GenericSort } = require('../../abstracts')

/**
 * Selection
 * @augments GenericSort
 * @classdesc Selection Sort Algorithm.
 * @see p. 245, 249
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Selection.java.html}
 */
class Selection extends GenericSort {
  /**
   * Sorts the `array` using the Selection Sort algorithm.
   * @param {[*]} array Array of values.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static sort (array, comparator) {
    const n = array.length

    for (let i = 0; i < n; i++) {
      let min = i

      for (let j = i + 1; j < n; j++) {
        if (this.less(array[j], array[min], comparator)) {
          min = j
        }
      }

      this.exchange(array, i, min)
    }
  }
}

module.exports = Selection
