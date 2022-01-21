const GenericSort = require('./generic-sort')

/**
 * Shell Sort.
 * @augments GenericSort
 * @see pg.245,259
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Shell.java.html}
 */
class ShellSort extends GenericSort {
  /**
   * Sorts the `array` using the Shell Sort algorithm.
   * @param {Array<*>} array Array of values.
   * @returns {void}
   */
  static sort(array) {
    const n = array.length
    let h = 1

    while (h < Math.floor(n / 3)) {
      h = 3 * h + 1 // 1, 4, 13, 40, 121, 364, 1093
    }

    while (h >= 1) {
      for (let i = h; i < n; i++) {
        for (let j = i; j >= h && this.less(array[j], array[j - h]); j -= h) {
          this.exchange(array, j, j - h)
        }
      }

      h = Math.floor(h / 3)
    }
  }
}

module.exports = ShellSort
