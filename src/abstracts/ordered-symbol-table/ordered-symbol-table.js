const SymbolTable = require('../symbol-table/symbol-table')
const { isDefined } = require('../../common')

/**
 * Abstract Generic Class for Ordered Symbol Tables.
 * @augments SymbolTable
 * @see pages: 366, 368.
 */
class OrderedSymbolTable extends SymbolTable {
  /**
   * Returns the number of keys less than the `key`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key to be searched.
   * @returns {number} The number of keys less than the `key`.
   */
  rank(/* key */) {
    throw new SyntaxError('rank method is not implemented')
  }

  /**
   * Returns the smallest key in the table.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @returns {*} The smallest key.
   */
  min() {
    throw new SyntaxError('min method is not implemented')
  }

  /**
   * Returns the largest key in the table.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @returns {*} The largest key.
   */
  max() {
    throw new SyntaxError('max method is not implemented')
  }

  /**
   * Returns the largest key less than or equal to the `key`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key to be searched.
   * @returns {*} The largest key less than or equal to the `key`.
   */
  floor(/* key */) {
    throw new SyntaxError('floor method is not implemented')
  }

  /**
   * Returns the smallest key greater than or equal to the `key`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {*} key - The key to be searched.
   * @returns {*} The smallest key greater than or equal to the `key`.
   */
  ceiling(/* key */) {
    throw new SyntaxError('ceiling method is not implemented')
  }

  /**
   * Returns the key of rank `k`.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @param {number} k - The rank to be searched.
   * @returns {*} The key of rank `k`.
   */
  select(/* k */) {
    throw new SyntaxError('select method is not implemented')
  }

  /**
   * Deletes the smallest key in the table.
   */
  deleteMin() {
    this.delete(this.min()) // default implementation
  }

  /**
   * Deletes the largest key in the table.
   */
  deleteMax() {
    this.delete(this.max()) // default implementation
  }
  /**
   * Returns the number of key-value paris in [lo..hi] contained in the table.
   * @param {*} lo - The lowest key.
   * @param {*} hi - The largest key.
   * @returns {number} Returns the total key-value paris in [lo..hi].
   */

  /**
   * Returns the number of key-value pairs in the table.
   * @returns {number} Returns the total key-value pairs in the table.
   */ size(lo, hi) {
    if (isDefined(lo) && isDefined(hi)) {
      if (this.comparator(hi, lo) < 0) {
        return 0
      } else if (this.contains(hi)) {
        return this.rank(hi) - this.rank(lo) + 1
      } else {
        return this.rank(hi) - this.rank(lo)
      }
    } else {
      return super.size()
    }
  }

  /**
   * Returns all the keys in the table in sorted order as an iterator.
   * @abstract
   * @throws SyntaxError - This function should be implemented by the client.
   * @returns {*} Returns an iterable object that will provide all the keys in the table in sorted order.
   */
  keys() {
    throw new SyntaxError('keys method is not implemented')
  }
}

module.exports = OrderedSymbolTable
