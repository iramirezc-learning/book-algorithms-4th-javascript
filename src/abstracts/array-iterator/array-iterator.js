/**
 * ArrayIterator
 * @classdesc Iterable interface for Array elements
 * @abstract
 * @see p. 135 (This is my custom implementation), 141
 */
class ArrayIterator {
  constructor (array, n) {
    this._current = 0
    this._a = [...array]
    this._n = n

    Object.seal(this)
  }

  /**
   * Returns if there are more elements in the iterator.
   */
  hasNext () {
    return this._current < this._n
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
