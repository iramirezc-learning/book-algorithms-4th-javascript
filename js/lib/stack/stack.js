/**
 * Generic Node element for Stack.
 * @see pg.142,155
 */
class Node {
  /**
   * Creates a new Node that holds
   * a single item and a pointer to
   * the next node in the Stack.
   */
  constructor() {
    /**
     * The node's holding item.
     * @private
     * @type {*}
     */
    this.item = null

    /**
     * Pointer to the next node in the Stack.
     * @private
     * @type {Node}
     */
    this.next = null

    // Prevent unintentional changes.
    Object.seal(this)
  }
}

/**
 * Iterator for Node elements.
 * @see p.155
 * @see [Symbol.iterator]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator}
 */
class NodeIterator {
  /**
   * Creates a new NodeIterator.
   * @param {Node} [node=null] The first node to start the iteration.
   */
  constructor(node = null) {
    /**
     * The current node of the iterator.
     * @private
     * @type {Node}
     */
    this.current = node

    Object.seal(this)
  }

  /**
   * Returns if there are more elements in the iterator.
   * @returns {boolean} Returns whether the current node is null or not.
   */
  hasNext() {
    return this.current !== null
  }

  /**
   * It is best not to modify Data Structures when iterating.
   * @see p.139
   */
  remove() {
    /* do nothing */
  }

  /**
   * Returns an object implementing the iterator protocol.
   * @see [The iterator protocol]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol}
   * @returns {object} The object iterator.
   */
  next() {
    if (this.hasNext()) {
      const value = this.current.item

      this.current = this.current.next

      return { value, done: false }
    }

    return { done: true }
  }
}

/**
 * Generic Stack implementation based on linked-lists.
 * @implements {NodeIterator}
 * @see p.147,149,155
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Stack.java.html}
 */
class Stack {
  constructor() {
    this.n = 0
    this.first = null

    Object.seal(this)
  }

  /**
   * Returns if the Stack is empty.
   */
  isEmpty() {
    return this.first === null
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
    const oldFirst = this.first

    this.first = new Node()
    this.first.item = item
    this.first.next = oldFirst
    this.n++
  }

  /**
   * Removes and returns the last inserted
   * item from the Stack.
   */
  pop() {
    if (this.isEmpty()) {
      throw new ReferenceError('Stack is empty.')
    }

    const removedItem = this.first.item

    this.first = this.first.next
    this.n--

    return removedItem
  }

  /**
   * Returns an NodeIterator to traverse the stack.
   * @returns {NodeIterator}
   */
  [Symbol.iterator]() {
    return new NodeIterator(this.first)
  }
}

Stack.Node = Node
Stack.NodeIterator = NodeIterator

module.exports = Stack
