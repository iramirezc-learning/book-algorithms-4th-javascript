/**
 * ReversedArrayIterator
 * @classdesc Iterable interface for Array elements in reversed order.
 * @abstract
 * @see p. 141
 */
class ReversedArrayIterator {
  constructor (array, n) {
    this._current = n - 1
    this._a = [...array]

    Object.seal(this)
  }

  /**
   * Returns if there are more elements in the iterator.
   */
  hasNext () {
    return this._current >= 0
  }

  /**
   * Is best not to modify Data Structures
   * when iterating.
   * @see p. 139
   */
  remove () {
    /* do nothing */
  }

  /**
   * Returns an object implementing the iterator protocol.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
   * @returns {object} iterator protocol
   */
  next () {
    if (this.hasNext()) {
      const item = this._a[this._current--]

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

module.exports = ReversedArrayIterator
