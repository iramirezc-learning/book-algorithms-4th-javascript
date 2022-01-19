/**
 * Generic Bag implementation based on linked-lists.
 * @see p.155
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Bag.java.html}
 */
class Bag {
  constructor() {
    /**
     * The count of items in the bag.
     * @type {number}
     */
    this.n = 0

    /**
     * The first element in the bag.
     * @type {Node}
     */
    this.first = null

    Object.seal(this)
  }

  /**
   * Returns if the bag is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return this.first === null
  }

  /**
   * Returns the bags' size.
   * @returns {number}
   */
  size() {
    return this.n
  }

  /**
   * Inserts an item to the bag.
   * @param {*} item The item to be inserted.
   * @returns {void}
   */
  add(item) {
    const oldFirst = this.first

    this.first = new Node()
    this.first.item = item
    this.first.next = oldFirst
    this.n++
  }

  /**
   * Returns a NodeIterator to traverse the bag.
   * @returns {NodeIterator}
   */
  [Symbol.iterator]() {
    return new NodeIterator(this.first)
  }
}

/**
 * Generic Node element for Bags.
 * @ignore
 * @see pg.142,155
 */
class Node {
  /**
   * Creates a new Node that holds
   * a single item and a pointer to
   * the next node in the Bag.
   */
  constructor() {
    /**
     * The node's holding item.
     * @type {*}
     */
    this.item = null

    /**
     * Pointer to the next node in the Bag.
     * @type {Node}
     */
    this.next = null

    // Prevent unintentional changes.
    Object.seal(this)
  }
}

/**
 * Iterator for Node elements.
 * @ignore
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

Bag.Node = Node
Bag.NodeIterator = NodeIterator

module.exports = Bag
