const NodeIterator = require('../node-iterator/node-iterator')
const { defaultComparator } = require('../../common')

/**
 * Abstract Generic Class for Symbol Tables.
 */
class SymbolTable {
  /**
   * Creates a new SymbolTable.
   * @param {ComparatorFn} [comparator=defaultComparator] - The comparator function.
   */
  constructor (comparator = defaultComparator) {
    /**
     * Comparator function for the keys in the ST.
     * @type {ComparatorFn}
     */
    this.comparator = comparator

    /**
     * Size of the ST.
     * @private
     * @type {number}
     */
    this._n = 0
  }

  /**
   * Puts key-value pair into the table. Removes key from table if value is `null`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key that identifies the value.
   * @param {*} val - The value.
   */
  put (key, val) {
    throw new SyntaxError('put method is not implemented')
  }

  /**
   * Returns the value paired with the key
   * or returns `null` if the key is absent.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key to be searched.
   * @returns {*} Returns the value associated with the key.
   */
  get (key) {
    throw new SyntaxError('get method is not implemented')
  }

  /**
   * Removes the key and its value from the table.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key that will be deleted.
   */
  delete (key) {
    throw new SyntaxError('delete method is not implemented')
  }

  /**
   * Returns the number of key-value pairs in the table.
   * @returns {number} Returns the total key-value pairs in the table.
   */
  size () {
    return this._n
  }

  /**
   * Returns `true` if the table has no keys, `false` otherwise.
   * @returns {boolean} Returns whether the Symbol Table is empty or not.
   */
  isEmpty () {
    return this.size() === 0
  }

  /**
   * Returns `true` if the `key` has an associated value.
   * @param {*} key - The key to be inspected.
   * @returns {boolean} Returns whether the key has a value associated or not.
   */
  contains (key) {
    return this.get(key) !== null
  }

  /**
   * Returns all the keys in the table as an iterator.
   * @returns {NodeIterable} Returns an iterable object that will provide all the keys in the table as an iterator.
   */
  keys () {
    const first = this._first

    return {
      [Symbol.iterator] () {
        return new NodeIterator(first)
      }
    }
  }
}

module.exports = SymbolTable
