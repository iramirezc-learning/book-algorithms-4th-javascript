/* eslint-disable no-unused-vars */
/**
 * A generic abstract class for sorting algorithms.
 * @abstract
 */
class GenericSort {
  /**
   * Returns whether `a` is less than `b`.
   * @note The book uses a comparator function to compare different objects.
   * For now, this comparator function works well with numbers and strings.
   * @param {*} a Value `a`.
   * @param {*} b Value `b`.
   * @returns {boolean} Returns if `a` is less than `b`.
   */
  static less(a, b) {
    return a < b
  }

  /**
   * Interchanges the values located at indexes `i` and `j` for the given array `a`.
   * @param {Array<*>} a The array of values.
   * @param {number} i Index of the first element.
   * @param {number} j Index of the second element.
   * @returns {void}
   */
  static exchange(a, i, j) {
    const temp = a[i]

    a[i] = a[j]
    a[j] = temp
  }

  /**
   * Returns if the provided array is sorted.
   * @param {Array<*>} a The array of values.
   * @returns {boolean} Whether the array is sorted or not.
   */
  static isSorted(a) {
    for (let i = 1; i < a.length; i++) {
      if (this.less(a[i], a[i - 1])) {
        return false
      }
    }

    return true
  }

  /**
   * Prints out the contents of the array `a`.
   * @param {Array<*>} a The array of values.
   * @returns {void}
   */
  static show(a) {
    console.log(a.join(' '))
  }

  /**
   * Should sort the array `a` using the sorting algorithm of your choice.
   * @abstract
   * @param {Array<*>} a The array of values to be sort.
   * @throws {SyntaxError} This function should be implemented by the client.
   */
  static sort(a) {
    throw new SyntaxError('sort method not implemented.')
  }
}

module.exports = GenericSort
