/**
 * Generic Sized Node element for BSTs.
 * @see pages: 398.
 */
class Node {
  /**
   * Creates a new Node that represents a node in a BST.
   * @param {*} [key=null] - The key that identifies the value.
   * @param {*} [val=null] - The holding value.
   * @param {int} [n=0] - The size of the node (left children + right children).
   */
  constructor(key = null, val = null, n = 0) {
    /**
     * The Node's holding key for the key-value pair.
     * @private
     * @type {?*}
     */
    this._key = key

    /**
     * The Node's holding value for the key-value pair.
     * @private
     * @type {?*}
     */
    this._val = val

    /**
     * Size of this Node.
     * @private
     * @type {?int}
     */
    this._n = n

    Object.seal(this)
  }
}

module.exports = Node