/**
 * Generic Node element for Linked Lists.
 * @see pages: 142, 155.
 */
class Node {
  /**
   * Creates a new Node that holds
   * a single item or a key-value pair and a pointer to
   * the next element in the Linked List.
   */
  constructor () {
    /**
     * The node's holding item.
     * @private
     * @type {*}
     */
    this._item = null

    /**
     * The node's holding key for the key-value pair.
     * @private
     * @type {*}
     */
    this._key = null

    /**
     * The node's holding value for the key-value pair.
     * @private
     * @type {*}
     */
    this._val = null

    /**
     * Pointer to the next element in the Linked List.
     * @private
     * @type {null|Node}
     */
    this._next = null

    Object.seal(this)
  }
}

module.exports = Node
