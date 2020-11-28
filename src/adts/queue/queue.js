const { Node, NodeIterator } = require('../../abstracts')

/**
 * Queue
 * @classdesc Generic Queue implementation based on linked-lists.
 * @implements {NodeIterator}
 * @see p. 151, 155
 */
class Queue {
  constructor () {
    this._n = 0
    this._first = null
    this._last = null

    Object.seal(this)
  }

  /**
   * Returns if the Queue is empty
   */
  isEmpty () {
    return this._first === null
  }

  /**
   * Returns the Queue's size
   */
  size () {
    return this._n
  }

  /**
   * Inserts an item to the end of the Queue
   * @param {*} item The item to be stored
   */
  enqueue (item) {
    const oldLast = this._last

    this._last = new Node()
    this._last._item = item
    this._last._next = null

    if (this.isEmpty()) {
      this._first = this._last
    } else {
      oldLast._next = this._last
    }

    this._n++
  }

  /**
   * Removes and returns the first item
   * inserted to the Queue.
   */
  dequeue () {
    if (this.isEmpty()) {
      throw new ReferenceError('queue is empty')
    }

    const removedItem = this._first._item

    this._first = this._first._next
    this._n--

    if (this.isEmpty()) {
      this._last = null
    }

    return removedItem
  }

  /**
   * Returns an NodeIterator to traverse the Queue.
   * @returns {NodeIterator}
   */
  [Symbol.iterator] () {
    return new NodeIterator(this._first)
  }
}

module.exports = Queue
