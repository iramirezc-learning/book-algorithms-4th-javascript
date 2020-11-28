const { SymbolTable, Node } = require('../../abstracts')

/**
 * Sequential Search Symbol Table.
 * @augments SymbolTable
 * @memberof module:adts
 * @see page: 375.
 * @see [edu.princeton.cs.algs4.SequentialSearchST.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/SequentialSearchST.java}
 */
class SequentialSearchST extends SymbolTable {
  /**
   * Creates a new SequentialSearch client that implements
   * the SymbolTable interface.
   * @param {ComparatorFn} [comparator] - The comparator function for the keys.
   */
  constructor (comparator) {
    super(comparator)

    /**
     * First Node in the Linked List.
     * @private
     * @type {?Node}
     */
    this._first = null

    Object.seal(this)
  }

  /**
   * Puts key-value pair into the table.
   * @param {*} key - The key that identifies the value.
   * @param {*} val - The value.
   */
  put (key, val) {
    for (let x = this._first; x !== null; x = x._next) {
      if (key === x._key) {
        x._val = val
        return
      }
    }

    this._first = new Node(key, val, this._first)
  }

  /**
   * Returns the value paired with the key.
   * Returns `null` if the key is absent.
   * @param {*} key - The key to be searched.
   * @returns {*} Returns the value associated with the key or `null` if the key is absent.
   */
  get (key) {
    for (let x = this._first; x !== null; x = x._next) {
      if (key === x._key) {
        return x._val
      }
    }

    return null
  }
}

module.exports = SequentialSearchST
