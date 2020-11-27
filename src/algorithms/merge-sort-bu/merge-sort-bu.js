const { GenericSort } = require('../../abstracts')

/**
 * MergeBU
 * @augments GenericSort
 * @classdesc Bottom-Up Merge Sort Algorithm,
 * @see p. 271, 278
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/MergeBU.java.html}
 */
class MergeBU extends GenericSort {
  /**
   * Merges two sorted arrays into one.
   * This function uses an `aux` array to
   * copy the original values to later
   * mutate the original array placing the
   * values in order.
   * @param {[*]} a The original array
   * @param {number} lo Index of the lower boundary indicating where the first half starts.
   * @param {number} mid Index of the middle to indicate where the first half ends and where the second half starts.
   * @param {number} hi Index of the higher boundary indicating where the second half ends.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static merge (a, lo, mid, hi, comparator) {
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
      } else if (this.less(this._aux[j], this._aux[i], comparator)) {
        a[k] = this._aux[j++]
      } else {
        a[k] = this._aux[i++]
      }
    }
  }

  /**
   * Sort method.
   * @param {[*]} array The array of values to be sorted.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static sort (array, comparator) {
    const n = array.length

    this._aux = new Array(n)

    for (let len = 1; len < n; len *= 2) {
      for (let lo = 0; lo < n - len; lo += len + len) {
        this.merge(array, lo, lo + len - 1, Math.min(lo + len + len - 1, n - 1), comparator)
      }
    }
  }
}

// static array _aux for `merge function`
Object.defineProperty(MergeBU, '_aux', { value: [], writable: true })

module.exports = MergeBU
