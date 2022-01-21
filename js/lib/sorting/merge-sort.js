const GenericSort = require('./generic-sort')

/**
 * Merge Sort.
 * @augments GenericSort
 * @see pg.271,273
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Merge.java.html}
 */
class Merge extends GenericSort {
  /**
   * Merges two sorted arrays into one.
   * This function uses an `_aux` array to
   * copy the original values to later
   * mutate the original array placing the
   * values in order.
   * @param {Array<*>} a The original array.
   * @param {number} lo Index of the lower boundary indicating where the first half starts.
   * @param {number} mid Index of the middle to indicate where the first half ends and where the second half starts.
   * @param {number} hi Index of the higher boundary indicating where the second half ends.
   * @returns {void}
   */
  static merge(a, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) {
      this._aux[k] = a[k]
    }

    let i = lo
    let j = mid + 1

    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        a[k] = this._aux[j++]
      } else if (j > hi) {
        a[k] = this._aux[i++]
      } else if (this.less(this._aux[j], this._aux[i])) {
        a[k] = this._aux[j++]
      } else {
        a[k] = this._aux[i++]
      }
    }
  }

  /**
   * Actual recursive implementation of the Merge Sort algorithm.
   * @private
   * @param {Array<*>} array The array of values to be sorted.
   * @param {number} lo Index of the lower boundary where the `array` will be sorted.
   * @param {number} hi Index of the higher boundary where the `array` will be sorted.
   * @returns {void}
   */
  static _sort(array, lo, hi) {
    if (hi <= lo) return

    const mid = lo + Math.floor((hi - lo) / 2)

    this._sort(array, lo, mid)
    this._sort(array, mid + 1, hi)
    this.merge(array, lo, mid, hi)
  }

  /**
   * Sorts the `array` using the Merge Sort algorithm.
   * @param {Array<*>} array The array of values to be sorted.
   * @returns {void}
   */
  static sort(array) {
    // @ts-ignore
    this._aux = new Array(array.length)
    this._sort(array, 0, array.length - 1)
  }
}

module.exports = Merge
