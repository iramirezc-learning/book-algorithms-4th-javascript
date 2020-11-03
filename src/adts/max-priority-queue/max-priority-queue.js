const { compare } = require('../../common')

/**
 * MaxPQ
 * @classdesc Maximum Priority Queue implementation with a binary heap.
 * @see p. 309, 315, 316, 318
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/MaxPQ.java.html}
 */
class MaxPQ {
  /**
   * MaxPQ. Maximum Priority Queue
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
   * Bottom-up reheapify (maximum).
   * Algorithm to fix the heap order when a key becomes
   * __greater__ than its parent.
   * @private
   * @param {number} k Index of the key to _swim_.
   * @returns {void}
   */
  swim (k) {
    // while current index `k` is not the root (k > 1)
    // and while the parent node (at k / 2) is lower than
    // the current node (at k), exchange both nodes.
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      this.exch(Math.floor(k / 2), k)
      k = Math.floor(k / 2)
    }
  }

  /**
   * Top-down reheapify (maximum).
   * Algorithm to fix the heap order when a key becomes
   * __smaller__ than a child.
   * @private
   * @param {number} k Index of the key to _sink_.
   * @returns {void}
   */
  sink (k) {
    // while `k` still having next child
    // that is in bounds with the PQ size (_n).
    while (2 * k <= this._n) {
      // let `j` be the next left child of ´k´ (2 * k)
      let j = 2 * k

      // if the left child (j) is smaller than the right child (j + 1)
      // then choose the right child (j++)
      if (j < this._n && this.less(j, j + 1)) {
        j++
      }

      // if parent node (at k) is NOT smaller than
      // the child node (at j), then we have found
      // its final position
      if (!this.less(k, j)) {
        break
      }

      this.exch(k, j)

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
   * Removes and returns the _maximum_ key in the PQ,
   * then it fixes the heap order.
   * @returns {*} The maximum Key in the PQ
   */
  delMax () {
    const max = this._pq[1] // retrieve max Key from top

    this.exch(1, this._n--) // exchange with the last item
    this._pq[this._n + 1] = undefined // avoid loitering
    this.sink(1) // restore heap property

    return max
  }

  /**
   * Returns the `maximum` key in the PQ.
   * @returns {*} The maximum key in the PQ.
   */
  max () {
    if (this.isEmpty()) {
      throw new ReferenceError('MaxPQ is empty.')
    }
    return this._pq[1]
  }
}

module.exports = MaxPQ
