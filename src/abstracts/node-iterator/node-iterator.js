/**
 * @typedef NodeIterable
 * @type {Object}
 * @property {function} Symbol.iterator - Returns a NodeIterator.
 */

/**
 * Iterator for Node elements.
 * @see page: 155.
 * @see [Symbol.iterator]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator}
 */
class NodeIterator {
  /**
   * Creates a new NodeIterator.
   * @param {?Node} element - The first element to start the iteration.
   */
  constructor (element = null) {
    /**
     * The current element of the iterator.
     * @private
     * @type {?Node}
     */
    this._current = element

    Object.seal(this)
  }

  /**
   * Returns if there are more elements in the Iterator.
   * @returns {boolean} Returns whether the current element is null or not.
   */
  hasNext () {
    return this._current !== null
  }

  /**
   * It is best not to modify Data Structures when iterating.
   * @see page: 139.
   */
  remove () {
    /* do nothing */
  }

  /**
   * Returns an object implementing the Iterator protocol.
   * @see [The iterator protocol]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol}
   * @returns {Object} The object iterator.
   */
  next () {
    if (this.hasNext()) {
      const item = this._current._item || this._current._key

      this._current = this._current._next

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

module.exports = NodeIterator
