const { compare } = require('../../common')

/**
 * MinPQ
 * @classdesc Minimum Priority Queue implementation with a binary heap.
 * @see p. 309, 315, 316, 318
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/MinPQ.java.html}
 */
class MinPQ {
  /**
   * MinPQ. Minimum Priority Queue
   * @constructor
   * @param {number|[*]} [max] Maximum fixed size for the PQ or Array of keys to create the PQ from.
   */
  constructor (max) {
    /**
     * Initial PQ size
     */
    this._n = 0

    /**
     * Heap-Ordered complete binary tree in _pq[1..n] with _pq[0] unused
     */
    this._pq = [] // default initialization

    if (typeof max === 'number' && Number.isInteger(max) && max > 0) {
      this._pq = new Array(max + 1)
    } else if (Array.isArray(max)) {
      // TODO: initialize from keys in max
    }

    Object.seal(this)
  }

  /**
   * Compares if key at index `i` is less than key at index `j`.
   * @private
   * @param {number} i Index of first key
   * @param {number} j Index of second key
   * @returns {boolean} if key at index `i` is less than key at index`j`
   */
  less (i, j) {
    return compare(this._pq[i], this._pq[j]) < 0
  }

  /**
   * Exchanges keys at indexes `i` and `j`.
   * @private
   * @param {number} i Index of first key
   * @param {number} j Index of second key
   * @returns {void}
   */
  exch (i, j) {
    const t = this._pq[i]

    this._pq[i] = this._pq[j]
    this._pq[j] = t
  }

  /**
   * Bottom-up reheapify (minimum).
   * Algorithm to fix the heap order when a key becomes
   * __smaller__ than it's parent.
   * @private
   * @param {number} k Index of the key to _swim_.
   * @returns {void}
   */
  swim (k) {
    // Notice the exchange of `k` & `k/2` indexes
    // to determine if the current key is less than
    // it's parent.
    while (k > 1 && this.less(k, Math.floor(k / 2))) {
      this.exch(Math.floor(k / 2), k)
      k = Math.floor(k / 2)
    }
  }

  /**
   * Top-down reheapify (minimum).
   * Algorithm to fix the heap order when a key becomes
   * __larger__ than it's parent.
   * @private
   * @param {number} k Index of the key to _sink_.
   * @returns {void}
   */
  sink (k) {
    while (2 * k <= this._n) {
      let j = 2 * k

      // Notice the exchange of `j + 1` & `j` indexes
      // to determine if the current key is greater than
      // the right child.
      if (j < this._n && this.less(j + 1, j)) {
        j++
      }

      // Notice the exchange of `j` & `k` indexes
      // to determine if the current key is greater than
      // the left child.
      if (!this.less(j, k)) {
        // if current key is not even greater than
        // the left child, then the current key
        // is in its final position.
        break
      }

      this.exch(j, k)

      k = j
    }
  }

  /**
   * Returns if the PQ is empty
   * @returns {boolean} if the PQ is empty
   */
  isEmpty () {
    return this._n === 0
  }

  /**
   * Returns the size of the PQ
   * @returns {number} the PQ size (total nodes)
   */
  size () {
    return this._n
  }

  /**
   * Inserts a new key to the PQ and fixes the heap order.
   * @param {*} v The Key to be inserted
   * @returns {void}
   */
  insert (v) {
    this._pq[++this._n] = v
    this.swim(this._n)
  }

  /**
   * Removes and returns the _minimum_ key in the PQ,
   * then it fixes the heap order.
   * @returns {*} The minimum Key in the PQ
   */
  delMin () {
    const min = this._pq[1] // retrieve min Key from top

    this.exch(1, this._n--) // exchange with the last item
    this._pq[this._n + 1] = undefined // avoid loitering
    this.sink(1) // restore heap property

    return min
  }

  /**
   * Returns the `minimum` key in the PQ.
   * @returns {*} The minimum key in the PQ.
   */
  min () {
    if (this.isEmpty()) {
      throw new ReferenceError('MinPQ is empty.')
    }
    return this._pq[1]
  }
}

module.exports = MinPQ
