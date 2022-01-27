const GenericSort = require('./generic-sort')

/**
 * Merge Sort Bottom Up.
 * @augments GenericSort
 * @see p.271,278
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/MergeBU.java.html}
 */
class MergeBU extends GenericSort {
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
   * Sorts the `array` using the Merge Sort Bottom Up algorithm.
   * @param {Array<*>} array The array of values to be sorted.
   * @returns {void}
   */
  static sort(array) {
    const n = array.length
    // @ts-ignore
    this._aux = new Array(n)

    for (let len = 1; len < n; len *= 2) {
      for (let lo = 0; lo < n - len; lo += len + len) {
        this.merge(array, lo, lo + len - 1, Math.min(lo + len + len - 1, n - 1))
      }
    }
  }
}

module.exports = MergeBU
