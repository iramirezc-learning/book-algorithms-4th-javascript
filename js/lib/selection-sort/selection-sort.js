const GenericSort = require('../generic-sort/generic-sort')

/**
 * Selection Sort.
 * @augments GenericSort
 * @see pg.245,249
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Selection.java.html}
 */
class SelectionSort extends GenericSort {
  /**
   * Sorts the `array` using the Selection Sort algorithm.
   * @param {Array<*>} array Array of values.
   */
  static sort(array) {
    const n = array.length

    for (let i = 0; i < n; i++) {
      let min = i

      for (let j = i + 1; j < n; j++) {
        if (this.less(array[j], array[min])) {
          min = j
        }
      }

      this.exchange(array, i, min)
    }
  }
}

module.exports = SelectionSort
