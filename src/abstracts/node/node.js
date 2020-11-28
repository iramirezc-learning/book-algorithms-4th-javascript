/**
 * Generic Node element for Linked Lists.
 * @see pages: 142, 155.
 */
class Node {
  /**
   * Creates a new Node that holds
   * a single item or a key-value pair and a pointer to
   * the next element in the Linked List.
   * @param {*} [key=null] - The key for the holding value.
   * @param {*} [val=null] - The holding value.
   * @param {?Node} [next=null] - The next element in the Linked List.
   */
  constructor (key = null, val = null, next = null) {
    /**
     * The node's holding item.
     * @note You would either use the `_item` or the combination of the `_key` and `_val` props,
     * but not the three of them. That will depend on the ADT implementation.
     * @private
     * @type {?*}
     */
    this._item = null

    /**
     * The node's holding key for the key-value pair.
     * @note You would use this prop in combination with the `_val` prop.
     * @private
     * @type {?*}
     */
    this._key = key

    /**
     * The node's holding value for the key-value pair.
     * @note You would use this prop in combination with the `_key` prop.
     * @private
     * @type {?*}
     */
    this._val = val

    /**
     * Pointer to the next element in the Linked List.
     * @private
     * @type {?Node}
     */
    this._next = next

    Object.seal(this)
  }
}

module.exports = Node
