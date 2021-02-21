const { GenericSort } = require('../../abstracts')

/**
 * Merge
 * @augments GenericSort
 * @classdesc Merge Sort Algorithm.
 * @see p. 271, 273
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Merge.java.html}
 */
class Merge extends GenericSort {
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
  static merge(a, lo, mid, hi, comparator) {
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
   * Private Static Sort method.
   * Actual recursive implementation of the Merge Sort algorithm.
   * @param {[*]} array The array of values to be sorted.
   * @param {number} lo Index of the lower boundary where the `array` will be sorted.
   * @param {number} hi Index of the higher boundary where the `array` will be sorted.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static _sort(array, lo, hi, comparator) {
    if (hi <= lo) return

    const mid = lo + Math.floor((hi - lo) / 2)

    this._sort(array, lo, mid, comparator)
    this._sort(array, mid + 1, hi, comparator)
    this.merge(array, lo, mid, hi, comparator)
  }

  /**
   * Public Static Sort method.
   * @param {[*]} array The array of values to be sorted.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static sort(array, comparator) {
    this._aux = new Array(array.length)
    this._sort(array, 0, array.length - 1, comparator)
  }
}

// static array _aux
Object.defineProperty(Merge, '_aux', { value: [], writable: true })

module.exports = Merge
