const { StdOut } = require('../../libs')
const { defaultComparator } = require('../../common')

/**
 * @callback ComparatorFn
 * @param {*} a - Comparable object `a`.
 * @param {*} b - Comparable object `b`.
 * @returns {number} Returns `-1` when `a` is less than `b`,
 * returns `1` when `a` is greater than `b` or
 * returns `0` when `a` is equal to `b`.
 */

/**
 * Abstract Generic Class for Sorting Algorithms.
 */
class GenericSort {
  /**
   * Returns whether `a` is less than `b`
   * based on the comparing function.
   * @param {*} a - Comparable object `a`.
   * @param {*} b - Comparable object `b`.
   * @param {ComparatorFn} [comparator=defaultComparator] - The comparator function.
   * @returns {boolean} Returns true if `a` is less than `b`.
   */
  static less (a, b, comparator = this.defaultComparator) {
    return comparator(a, b) < 0
  }

  /**
   * Interchanges the values located at indexes `i` and `j`
   * for the given array `a`.
   * @param {Array<*>} a - The array of values.
   * @param {number} i - The first index.
   * @param {number} j - The second index.
   */
  static exchange (a, i, j) {
    const temp = a[i]

    a[i] = a[j]
    a[j] = temp
  }

  /**
   * Returns `true` if the provided array is sorted.
   * @param {Array<*>} a - The array of values.
   * @param {ComparatorFn} [comparator=defaultComparator] - The comparator function.
   * @returns {boolean} Whether the array is sorted or not.
   */
  static isSorted (a, comparator = this.defaultComparator) {
    for (let i = 1; i < a.length; i++) {
      if (this.less(a[i], a[i - 1], comparator)) {
        return false
      }
    }

    return true
  }

  /**
   * Prints out the contents of the array `a`.
   * @param {Array<*>} a - The array of values.
   */
  static show (a) {
    StdOut.println(a.join(' '))
  }

  /**
   * Should sort the array `a` using the sorting algorithm of your choice.
   * @abstract
   * @throws SyntaxError This function should be implemented by the client.
   * @param {Array<*>} a - The array of values.
   */
  static sort (a) {
    throw new SyntaxError('sort method not implemented')
  }
}

/**
 * Default comparator function.
 * @method defaultComparator
 * @memberof GenericSort.
 * @param {*} a - Comparable object `a`.
 * @param {*} b - Comparable object `b`.
 * @returns {number} Returns `-1` when `a` is less than `b`,
 * returns `1` when `a` is greater than `b` or
 * returns `0` when `a` is equal to `b`.
 */
Object.defineProperty(GenericSort, 'defaultComparator', { value: defaultComparator })

module.exports = GenericSort
