const SymbolTable = require('../symbol-table/symbol-table')

/**
 * Abstract Generic Class for Ordered Symbol Tables.
 */
class OrderedSymbolTable extends SymbolTable {
  /**
   * Returns the smallest key in the table.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @returns {*} The smallest key.
   */
  min () {
    throw new SyntaxError('min method is not implemented')
  }

  /**
   * Returns the largest key in the table.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @returns {*} The largest key.
   */
  max () {
    throw new SyntaxError('max method is not implemented')
  }

  /**
   * Returns the largest key less than or equal to the `key`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key to be searched.
   * @returns {*} The largest key less than or equal to the `key`.
   */
  floor (key) {
    throw new SyntaxError('floor method is not implemented')
  }

  /**
   * Returns the smallest key greater than or equal to the `key`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key to be searched.
   * @returns {*} The smallest key greater than or equal to the `key`.
   */
  ceiling (key) {
    throw new SyntaxError('ceiling method is not implemented')
  }

  /**
   * Returns the number of keys less than the `key`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key to be searched.
   * @returns {number} The number of keys less than the `key`.
   */
  rank (key) {
    throw new SyntaxError('rank method is not implemented')
  }

  /**
   * Returns the key of rank `k`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {number} k - The rank to be searched.
   * @returns {*} The key of rank `k`.
   */
  select (k) {
    throw new SyntaxError('select method is not implemented')
  }

  /**
   * Deletes the smallest key in the table.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   */
  deleteMin () {
    throw new SyntaxError('deleteMin method is not implemented')
  }

  /**
   * Deletes the largest key in the table.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   */
  deleteMax () {
    throw new SyntaxError('deleteMax method is not implemented')
  }
}

module.exports = OrderedSymbolTable
