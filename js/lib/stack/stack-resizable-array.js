const assert = require('assert')

/**
 * A generic Resizable Array Stack.
 * @implements {ReversedArrayIterator}
 * @see p.141
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/ResizingArrayStack.java.html}
 */
class StackResizableArray {
  constructor() {
    this.a = new Array(1) // it should start with length of 1
    this.n = 0

    Object.seal(this)
  }

  /**
   * Returns if the Stack is empty.
   * @returns {boolean} Whether the stack is empty or not.
   */
  isEmpty() {
    return this.n === 0
  }

  /**
   * Returns the number of the elements in the stack.
   * @returns {number} Stack's size.
   */
  size() {
    return this.n
  }

  /**
   * Resizes the internal array `a` copying the elements from [0, n).
   * @param {number} max New size for the internal array in the stack.
   */
  resize(max) {
    assert(max, `'max' is required. Given: ${max}`)

    const temp = new Array(max)

    for (let i = 0; i < this.n; i++) {
      temp[i] = this.a[i]
    }

    this.a = temp
  }

  /**
   * Inserts an item to the Stack.
   * @param {*} item The item to be stored.
   */
  push(item) {
    if (this.n === this.a.length) {
      this.resize(2 * this.n)
    }

    this.a[this.n++] = item
  }

  /**
   * Removes and returns the last item inserted in the Stack.
   * @returns {*} The item at the top of the Stack.
   */
  pop() {
    if (this.isEmpty()) {
      throw new ReferenceError('Stack is empty.')
    }

    const item = this.a[--this.n]

    this.a[this.n] = undefined // avoid loitering

    if (this.n > 0 && this.n === Math.floor(this.a.length / 4)) {
      this.resize(Math.floor(this.a.length / 2))
    }

    return item
  }

  /**
   * Returns an iterator to traverse the stack.
   * @returns {ReversedArrayIterator}
   */
  [Symbol.iterator]() {
    return new ReversedArrayIterator(this.a, this.n)
  }
}

/**
 * Iterable interface for Array elements in reversed order.
 * @see p.141
 * @see [Symbol.iterator]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator}
 */
class ReversedArrayIterator {
  /**
   * Creates a new ReversedArrayIterator.
   * @param {Array<*>} array The array to iterate.
   * @param {number} n The length of the array.
   */
  constructor(array, n) {
    /**
     * The current index position in the array of the iterator.
     * @private
     * @type {number}
     */
    this.current = n - 1

    /**
     * A copy of the array.
     * @private
     * @type {Array<*>}
     */
    this.a = [...array]

    Object.seal(this)
  }

  /**
   * Returns if there are more elements in the iterator.
   * @returns {boolean} Returns whether the current index is greater than or equal to 0.
   */
  hasNext() {
    return this.current >= 0
  }

  /**
   * Is best not to modify Data Structures when iterating.
   * @see p.139
   */
  remove() {
    /* do nothing */
  }

  /**
   * Returns an object implementing the iterator protocol.
   * @see [The iterator protocol]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol}
   * @returns {object} The iterator protocol.
   */
  next() {
    if (this.hasNext()) {
      const value = this.a[this.current--]

      return { value, done: false }
    }

    return { done: true }
  }
}

StackResizableArray.ReversedArrayIterator = ReversedArrayIterator

module.exports = StackResizableArray
