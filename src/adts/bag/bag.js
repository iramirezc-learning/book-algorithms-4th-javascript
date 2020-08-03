const Node = require('../node/node')
const { Iterator } = require('../../abstracts')

/**
 * Bag
 * @classdesc Generic Bag implementation based on linked-lists.
 * @implements {Iterator}
 * @see p. 155
 */
class Bag {
  constructor () {
    this._n = 0
    this._first = null

    Object.seal(this)
  }

  /**
   * Returns if the Bag is empty
   */
  isEmpty () {
    return this._first === null
  }

  /**
   * Returns the Bags' size
   */
  size () {
    return this._n
  }

  /**
   * Inserts an item to the Bag
   * @param {*} item The item to be stored
   */
  add (item) {
    const oldFirst = this._first

    this._first = new Node()
    this._first._item = item
    this._first._next = oldFirst
    this._n++
  }

  /**
   * Returns an Iterator to traverse the bag.
   * @returns {Iterator}
   */
  [Symbol.iterator] () {
    return new Iterator(this._first)
  }
}

module.exports = Bag
