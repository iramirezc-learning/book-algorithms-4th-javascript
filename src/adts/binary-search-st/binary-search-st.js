const { OrderedSymbolTable } = require('../../abstracts')
const Queue = require('../queue/queue')
const { isDefined } = require('../../common')

/**
 * Binary Search Ordered Symbol Table.
 * @augments OrderedSymbolTable
 * @memberof module:adts
 * @see pages: 141, 379, 381, 382.
 * @see [edu.princeton.cs.algs4.BinarySearchST.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/BinarySearchST.java}
 */
class BinarySearchST extends OrderedSymbolTable {
  /**
   * Creates a new BinarySearchST client that implements
   * the OrderedSymbolTable interface.
   * @param {number} capacity - The initial capacity for the ST.
   * @param {ComparatorFn} [comparator] - The comparator function for the keys.
   */
  constructor(capacity, comparator) {
    super(comparator)

    /**
     * Array holding the keys in sorted order.
     * @private
     * @type {Array<*>}
     */
    this._keys = new Array(capacity)

    /**
     * Parallel array holding the values for every key.
     * @private
     * @type {Array<*>}
     */
    this._vals = new Array(capacity)

    Object.seal(this)
  }

  /**
   * Resizes arrays `_keys` and `_vals` keeping their contents.
   * @private
   * @param {number} max - The new size for arrays `_keys` and `_vals`.
   */
  _resize(max) {
    const tempKeys = new Array(max)
    const tempVals = new Array(max)

    for (let i = 0; i < this.size(); i++) {
      tempKeys[i] = this._keys[i]
      tempVals[i] = this._vals[i]
    }

    this._keys = tempKeys
    this._vals = tempVals
  }

  /**
   * Returns the number of keys that are less than the `key`.
   * @param {*} key - The key which we need to get the rank for.
   * @returns {number} The number of keys less than the `key`.
   */
  rank(key) {
    let lo = 0
    let hi = this._n - 1
    let mid
    let cmp

    while (lo <= hi) {
      mid = Math.floor(lo + (hi - lo) / 2)
      cmp = this.comparator(key, this._keys[mid])

      if (cmp < 0) {
        hi = mid - 1
      } else if (cmp > 0) {
        lo = mid + 1
      } else {
        return mid
      }
    }

    return lo
  }

  /**
   * Puts key-value pair into the table in sorted order.
   * @todo Implement resizing code.
   * @param {*} key - The key that identifies the value.
   * @param {*} val - The value.
   */
  put(key, val) {
    // find the rank of the key.
    const i = this.rank(key)

    // if rank is less than size and the key is duplicated...
    if (i < this.size() && this.comparator(this._keys[i], key) === 0) {
      // ...update the value of the key
      this._vals[i] = val
      return
    }

    // resize if the arrays are full
    if (this.size() === this._keys.length) {
      this._resize(2 * this._keys.length)
    }

    // if the key is new, then make some room to the right
    for (let j = this.size(); j > i; j--) {
      this._keys[j] = this._keys[j - 1]
      this._vals[j] = this._vals[j - 1]
    }

    // finally, insert the new key
    this._keys[i] = key
    this._vals[i] = val

    // increment the ST size
    this._n++
  }

  /**
   * Returns the value paired with the key
   * or returns `null` if the key is absent.
   * @param {*} key - The key to be searched.
   * @returns {*} Returns the value associated with the key.
   */
  get(key) {
    if (this.isEmpty()) {
      return null
    }

    const i = this.rank(key)

    if (i < this.size() && this.comparator(this._keys[i], key) === 0) {
      return this._vals[i]
    } else {
      return null
    }
  }

  /**
   * Removes the key and its value from the table.
   * @todo implementation. Exercise 3.1.16.
   * @param {*} key - The key that will be deleted.
   */
  delete(/* key */) {
    throw new SyntaxError('delete method is not implemented')
  }

  /**
   * Returns the smallest key in the table.
   * @returns {*} The smallest key.
   */
  min() {
    if (this.isEmpty()) {
      throw new ReferenceError('The ST is empty.')
    }

    return this._keys[0]
  }

  /**
   * Returns the largest key in the table.
   * @returns {*} The largest key.
   */
  max() {
    if (this.isEmpty()) {
      throw new ReferenceError('The ST is empty.')
    }

    return this._keys[this.size() - 1]
  }

  /**
   * Returns the largest key less than or equal to the `key`.
   * @todo implementation. Exercise 3.1.17.
   * @param {*} key - The key to be searched.
   * @returns {*} The largest key less than or equal to the `key`.
   */
  floor(/* key */) {
    throw new SyntaxError('floor method is not implemented')
  }

  /**
   * Returns the smallest key greater than or equal to the `key`.
   * @param {*} key - The key to be searched.
   * @returns {*} The smallest key greater than or equal to the `key`.
   */
  ceiling(key) {
    const i = this.rank(key)

    if (i === this.size()) {
      throw RangeError(`No ceiling was found for key '${key}'`)
    }

    return this._keys[i]
  }

  /**
   * Returns the key of rank `k`.
   * @param {number} k - The rank to be searched.
   * @returns {*} The key of rank `k`.
   */
  select(k) {
    if (this.isEmpty()) {
      throw new ReferenceError('The ST is empty.')
    }

    if (k < 0 || k >= this.size()) {
      throw new RangeError(`rank ${k} is out of bounds.`)
    }

    return this._keys[k]
  }
  /**
   * Returns keys in [lo..hi] in sorted order as an iterator.
   * @param {*} lo - The lowest key.
   * @param {*} hi - The largest key.
   * @returns {*} Returns an iterable object that will provide all the keys in the table in sorted order.
   */

  /**
   * Returns all the keys in the table in sorted order as an iterator.
   * @returns {*} Returns an iterable object that will provide all the keys in the table in sorted order.
   */ keys(lo, hi) {
    if (isDefined(lo) && isDefined(hi)) {
      const keys = this._keys // select the array containing the keys
      const queue = new Queue()
      const loRank = this.rank(lo)
      const hiRank = this.rank(hi)

      for (let i = loRank; i < hiRank; i++) {
        queue.enqueue(keys[i])
      }

      if (this.contains(hi)) {
        queue.enqueue(keys[hiRank])
      }

      return queue
    } else {
      return this.keys(this.min(), this.max())
    }
  }
}

module.exports = BinarySearchST
