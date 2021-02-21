const { GenericSort } = require('../../abstracts')
const { StdRandom } = require('../../libs')

/**
 * Quick3way
 * @augments GenericSort
 * @classdesc Quick3way Sort Algorithm.
 * @see p. 299
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Quick3way.java.html}
 */
class Quick3way extends GenericSort {
  /**
   * Private Static Sort method.
   * Actual recursive implementation of the Quick3way Sort algorithm.
   * @param {[*]} array The array of values to be sorted.
   * @param {number} lo Index of the lower boundary where the `array` will be sorted.
   * @param {number} hi Index of the higher boundary where the `array` will be sorted.
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static _sort(array, lo, hi, comparator = this.defaultComparator) {
    if (hi <= lo) return

    let lt = lo //    [lo..lt-1] are less than v
    let i = lo + 1 // [lt..i-1] are equal to v; [i..gt] not yet examined
    let gt = hi //    [gt+1..hi] are greater than v
    const v = array[lo]

    while (i <= gt) {
      const compare = comparator(array[i], v)

      if (compare < 0) {
        // if array[i] is less than v
        // exchange lt with i; increment pointers lt and i
        this.exchange(array, lt++, i++)
      } else if (compare > 0) {
        // if array[i] is greater than v
        // exchange gt with i; decrement gt
        this.exchange(array, i, gt--)
      } else {
        // if array[i] is equal to v
        // increment i++
        i++
      }
    }

    this._sort(array, lo, lt - 1, comparator) // now sort all elements less than v
    this._sort(array, gt + 1, hi, comparator) // now sort all elements great than v
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
    StdRandom.shuffle(array)
    this._sort(array, 0, array.length - 1, comparator)
  }
}

module.exports = Quick3way
