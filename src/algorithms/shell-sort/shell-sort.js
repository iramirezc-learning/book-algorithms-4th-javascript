const { GenericSort } = require('../../abstracts')

/**
 * Shell
 * @augments GenericSort
 * @classdesc Shell Sort Algorithm.
 * @see p. 245, 259
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Shell.java.html}
 */
class Shell extends GenericSort {
  /**
   * Sorts the `array` using the Shell Sort algorithm.
   * @param {[*]} array Array of values.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static sort (array, comparator) {
    const n = array.length
    let h = 1

    while (h < Math.floor(n / 3)) {
      h = 3 * h + 1 // 1, 4, 13, 40, 121, 364, 1093
    }

    while (h >= 1) {
      for (let i = h; i < n; i++) {
        for (let j = i; j >= h && this.less(array[j], array[j - h], comparator); j -= h) {
          this.exchange(array, j, j - h)
        }
      }

      h = Math.floor(h / 3)
    }
  }
}

module.exports = Shell
