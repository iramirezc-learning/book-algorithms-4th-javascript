/**
 * Generic Node element for Queue.
 * @see pg.142,155
 */
class Node {
  /**
   * Creates a new Node that holds
   * a single item and a pointer to
   * the next node in the Queue.
   */
  constructor() {
    /**
     * The node's holding item.
     * @private
     * @type {*}
     */
    this.item = null

    /**
     * Pointer to the next node in the Queue.
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
   * @param {Node} [node=null] - The first node to start the iteration.
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
   * @returns {Object} The object iterator.
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
 * Generic Queue implementation based on linked-lists.
 * @implements {NodeIterator}
 * @see pg.151,155
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Queue.java.html}
 */
class Queue {
  constructor() {
    this.n = 0
    this.first = null
    this.last = null

    Object.seal(this)
  }

  /**
   * Returns if the Queue is empty.
   */
  isEmpty() {
    return this.first === null
  }

  /**
   * Returns the Queue's size.
   */
  size() {
    return this.n
  }

  /**
   * Inserts an item to the end of the Queue.
   * @param {*} item The item to be stored.
   */
  enqueue(item) {
    const oldLast = this.last

    this.last = new Node()
    this.last.item = item
    this.last.next = null

    if (this.isEmpty()) {
      this.first = this.last
    } else {
      oldLast.next = this.last
    }

    this.n++
  }

  /**
   * Removes and returns the first item
   * inserted to the Queue.
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new ReferenceError('Queue is empty.')
    }

    const removedItem = this.first.item

    this.first = this.first.next
    this.n--

    if (this.isEmpty()) {
      this.last = null
    }

    return removedItem
  }

  /**
   * Returns an NodeIterator to traverse the Queue.
   * @returns {NodeIterator}
   */
  [Symbol.iterator]() {
    return new NodeIterator(this.first)
  }
}

Queue.Node = Node
Queue.NodeIterator = NodeIterator

module.exports = Queue
