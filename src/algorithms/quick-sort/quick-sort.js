const { GenericSort } = require('../../abstracts')
const { StdRandom } = require('../../libs')

/**
 * Quick
 * @augments GenericSort
 * @classdesc Quick Sort Algorithm.
 * @see p. 289, 291
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Quick.java.html}
 */
class Quick extends GenericSort {
  /**
   * Choosing the array[lo] item as the partition item `v`,
   * this method interchanges the greater values to the right
   * and the lesser values to the left of the final position `j`
   * in the array for `v`.
   * @param {[*]} array The array of values to partition.
   * @param {number} lo Lower index bound.
   * @param {number} hi Higher index bound.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static _partition (array, lo, hi, comparator) {
    let i = lo
    let j = hi + 1

    const v = array[lo]

    while (true) {
      // increment `i` until array[i] is not longer less
      // than comparable `v`
      while (this.less(array[++i], v, comparator)) {
        // if index `i` reaches
        // `hi` index, break
        if (i === hi) {
          break
        }
      }

      // increment `j` until comparable `v` is not longer less
      // than array[j]
      while (this.less(v, array[--j], comparator)) {
        // it index `j` reaches
        // `lo` index, break
        if (j === lo) { // redundant test, as array[lo] is not les than `v`
          break
        }
      }

      // if the crossing index `i`
      // has reached or pass index `j`
      // break
      if (i >= j) {
        break
      }

      // exchange crossing indexes `i` and `j`
      // we assume that array[i] is greater than `v`
      // and that array[j] is lesser than `v`
      this.exchange(array, i, j)
    }

    // finally, we place `v` to the position of `j`
    // as this will be the corresponding place where
    // `v` >= array[i] and `v` <= array[j]
    this.exchange(array, lo, j)

    // we return the index of `v` comparator
    // that was exchanged with `j` being this
    // its final position of the sorted array.
    return j
  }

  /**
   * Private Static Sort method.
   * Actual recursive implementation of the Quick Sort algorithm.
   * @param {[*]} array The array of values to be sorted.
   * @param {number} lo Index of the lower boundary where the `array` will be sorted.
   * @param {number} hi Index of the higher boundary where the `array` will be sorted.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static _sort (array, lo, hi, comparator) {
    if (hi <= lo) return

    const j = this._partition(array, lo, hi, comparator)

    this._sort(array, lo, j - 1, comparator)
    this._sort(array, j + 1, hi, comparator)
  }

  /**
   * Public Static Sort method.
   * @param {[*]} array The array of values to be sorted.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static sort (array, comparator) {
    StdRandom.shuffle(array)
    this._sort(array, 0, array.length - 1, comparator)
  }
}

module.exports = Quick
