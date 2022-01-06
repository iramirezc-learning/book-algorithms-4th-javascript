/**
 * A generic Fixed Capacity Stack based on arrays of limited size.
 * @implements {ReversedArrayIterator}
 * @see pg.133,135,141
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Stack.java.html}
 */
class StackFixedCapacity {
  constructor(size) {
    this.a = new Array(size)
    this.n = 0

    Object.seal(this)
  }

  /**
   * Returns if the Stack is empty.
   */
  isEmpty() {
    return this.n === 0
  }

  /**
   * Returns the Stacks' size.
   */
  size() {
    return this.n
  }

  /**
   * Inserts an item to the Stack.
   * @param {*} item The item to be stored.
   */
  push(item) {
    this.a[this.n++] = item
  }

  /**
   * Removes and returns the last inserted
   * item from the Stack.
   */
  pop() {
    if (this.isEmpty()) {
      throw new ReferenceError('Stack is empty.')
    }

    return this.a[--this.n]
  }

  /**
   * Returns a ReversedArrayIterator to traverse the stack.
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

StackFixedCapacity.ReversedArrayIterator = ReversedArrayIterator

module.exports = StackFixedCapacity
