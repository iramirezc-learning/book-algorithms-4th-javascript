const assert = require('assert')
const { ReversedArrayIterator } = require('../../abstracts')

/**
 * ResizableArrayStack
 * @classdesc A Resizable Generic Array Stack.
 * @implements {ReversedArrayIterator}
 * @see p. 141
 */
class ResizableArrayStack {
  constructor () {
    this._a = new Array(1) // it should start with length of 1
    this._n = 0

    Object.seal(this)
  }

  /**
   * Returns if the Stack is empty.
   * @returns {boolean} Whether the stack is empty or not.
   */
  isEmpty () {
    return this._n === 0
  }

  /**
   * Returns the number of the elements in the stack.
   * @returns {number} Stack's size.
   */
  size () {
    return this._n
  }

  /**
   * Resizes the internal array `_a` copying the elements from [0, _n)
   * @param {number} max New size for the internal array in the stack.
   */
  resize (max) {
    assert(max, `max is required. Given: ${max}`)

    const temp = new Array(max)

    for (let i = 0; i < this._n; i++) {
      temp[i] = this._a[i]
    }

    this._a = temp
  }

  /**
   * Inserts an item to the Stack.
   * @param {*} item The item to be stored
   */
  push (item) {
    if (this._n === this._a.length) {
      this.resize(2 * this._n)
    }

    this._a[this._n++] = item
  }

  /**
   * Removes and returns the last item inserted in the Stack.
   * @returns {*} The item at the top of the Stack.
   */
  pop () {
    if (this.isEmpty()) {
      throw new ReferenceError('stack is empty')
    }

    const item = this._a[--this._n]

    this._a[this._n] = undefined // avoid loitering

    if (this._n > 0 && this._n === Math.floor(this._a.length / 4)) {
      this.resize(Math.floor(this._a.length / 2))
    }

    return item
  }

  /**
   * Returns an Iterator to traverse the stack.
   * @returns {ReversedArrayIterator}
   */
  [Symbol.iterator] () {
    return new ReversedArrayIterator(this._a, this._n)
  }
}

module.exports = ResizableArrayStack
