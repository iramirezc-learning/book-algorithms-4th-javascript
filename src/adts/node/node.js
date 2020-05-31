/**
 * Node
 * @classdesc Generic Node element for Linked Lists
 * @see p. 142. 155
 */
class Node {
  constructor () {
    this._item = null
    this._next = null

    Object.seal(this)
  }
}

module.exports = Node
