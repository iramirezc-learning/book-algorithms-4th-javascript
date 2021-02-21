const { ReversedArrayIterator } = require('../../abstracts')

/**
 * FixedCapacityStack
 * @classdesc A Generic Fixed Capacity Stack based on arrays of limit size.
 * @implements {ReversedArrayIterator}
 * @see p. 133, 135, 141
 */
class FixedCapacityStack {
  constructor(size) {
    this._a = new Array(size)
    this._n = 0

    Object.seal(this)
  }

  /**
   * Returns if the Stack is empty
   */
  isEmpty() {
    return this._n === 0
  }

  /**
   * Returns the Stacks' size
   */
  size() {
    return this._n
  }

  /**
   * Inserts an item to the Stack
   * @param {*} item The item to be stored
   */
  push(item) {
    this._a[this._n++] = item
  }

  /**
   * Removes and returns the last inserted
   * item from the Stack.
   */
  pop() {
    if (this.isEmpty()) {
      throw new ReferenceError('stack is empty')
    }

    return this._a[--this._n]
  }

  /**
   * Returns a ReversedArrayIterator to traverse the stack.
   * @returns {ReversedArrayIterator}
   */
  [Symbol.iterator]() {
    return new ReversedArrayIterator(this._a, this._n)
  }
}

module.exports = FixedCapacityStack
