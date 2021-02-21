/**
 * @typedef ArrayIterable
 * @type {Object}
 * @property {function} Symbol.iterator - Returns an ArrayIterator.
 */

/**
 * Iterator for Arrays in sorted order.
 * @see pages: 135 (This is my custom implementation), 141.
 * @see [Symbol.iterator]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator}
 */
class ArrayIterator {
  /**
   * Creates a new ArrayIterator.
   * @param {Array<*>} array - The sorted array to be iterated.
   * @param {number} n - The size of elements in the array.
   */
  constructor(array, n) {
    /**
     * Index of the current element in the iterator.
     * @private
     * @type {number}
     */
    this._current = 0

    /**
     * The array being iterated.
     * @private
     * @type {Array<*>}
     */
    this._a = [...array]

    /**
     * The number of elements in the array.
     * @private
     * @type {number}
     */
    this._n = n

    Object.seal(this)
  }

  /**
   * Returns if there are more elements in the iterator.
   * @returns {boolean} Returns if the current index
   * is less than the index of the last item in the array.
   */
  hasNext() {
    return this._current < this._n
  }

  /**
   * It is best not to modify Data Structures when iterating.
   * @see page: 139.
   */
  remove() {
    /* do nothing */
  }

  /**
   * Returns an object implementing the iterator protocol.
   * @see [The iterator protocol]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol}
   * @returns {Object} The object iterator.
   */
  next() {
    if (this.hasNext()) {
      const item = this._a[this._current++]

      return {
        value: item,
        done: false
      }
    } else {
      return {
        done: true
      }
    }
  }
}

module.exports = ArrayIterator
