const { StdOut } = require('../../libs')
const { defaultComparator } = require('../../common')

/**
 * GenericSort
 * @classdesc Abstract Class for Sorting Algorithms.
 */
class GenericSort {
  /**
   * Returns whether `a` is less than `b`
   * based on a comparing function.
   * @param {*} a Comparable object `a`
   * @param {*} b Comparable object `b`
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static less (a, b, comparator = this.defaultComparator) {
    return comparator(a, b) < 0
  }

  /**
   * Interchanges the values located in indexes `i` and `j`
   * for the given `array`.
   * @param {[*]} array Array of values.
   * @param {number} i Index 1
   * @param {number} j Index 2
   */
  static exchange (array, i, j) {
    const temp = array[i]

    array[i] = array[j]
    array[j] = temp
  }

  /**
   * Returns `true` if the provided array is sorted,
   * `false` otherwise.
   * @param {[*]} array Array of values
   * @param {function} comparator A comparing function that
   * returns -1 when `a` is less than `b`,
   * returns 1 when `a` is greater than `b` or
   * returns 0 when `a` is equal to `b`.
   */
  static isSorted (array, comparator = this.defaultComparator) {
    for (let i = 1; i < array.length; i++) {
      if (this.less(array[i], array[i - 1], comparator)) {
        return false
      }
    }

    return true
  }

  /**
   * A function that prints to the StdOut
   * the contents of the `array` provided.
   * @param {[*]} array Array of values.
   */
  static show (array) {
    StdOut.println(array.join(' '))
  }

  /**
   * Should sorts the `array` using the Sorting algorithm of your choice.
   * @abstract
   * @throws SyntaxError This function should be implemented by the client.
   */
  static sort () {
    throw new SyntaxError('sort method not implemented')
  }
}

// public final defaultComparator
Object.defineProperty(GenericSort, 'defaultComparator', { value: defaultComparator })

module.exports = GenericSort
