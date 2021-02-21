const { newArrayOf } = require('../../utils')
const { compare } = require('../../common')

/**
 * Generic Minimum Priority Queue implementation with associated indices.
 * @memberof module:adts
 * @see pages: 320, 323, 333, 334.
 * @see [edu.princeton.cs.algs4.IndexMinPQ.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/IndexMinPQ.java.html}
 */
class IndexMinPQ {
  /**
   * Creates a PQ of capacity `maxN` with possible indices between `0` an `maxN - 1`.
   * @param {number} [maxN] - Maximum fixed size for the Priority Queue.
   */
  constructor(maxN) {
    /**
     * Number of elements on PQ.
     * @private
     * @type {number}
     */
    this._n = 0

    /**
     * Binary Heap using 1-based indexing.
     * @private
     * @type {Array}
     */
    this._pq = [] // default initialization

    /**
     * Inverse of `_pq`: `_qp[_pq[i]] = _pq[_qp[i]] = i`.<br>
     * `_qp[i]` gives the position of `i` in `_pq[]`, the index `j` such that `_pq[j]` is `i`.
     * @private
     * @type {Array}
     */
    this._qp = [] // default initialization

    /**
     * The array that holds the keys with priorities.
     * @private
     * @type {Array}
     */
    this._keys = [] // default initialization

    // constructor initialization
    if (typeof maxN === 'number' && Number.isInteger(maxN) && maxN > 0) {
      this._pq = newArrayOf(maxN + 1, undefined)
      this._qp = newArrayOf(maxN + 1, -1) // -1 indicates that key is not present
      this._keys = newArrayOf(maxN + 1, undefined)
    }

    Object.seal(this)
  }

  // Private instance methods
  // ==================================================

  /**
   * Compares if the key at index `i` is greater than the key at index `j`.
   * @private
   * @param {number} i - The inverse index of the first key.
   * @param {number} j - The inverse index of the second key.
   * @returns {boolean} If the key at index `i` is greater than the key at index`j`.
   */
  _greater(i, j) {
    return compare(this._keys[this._pq[i]], this._keys[this._pq[j]]) > 0
  }

  /**
   * Exchanges the indexes `i` and `j` in pq.
   * Updates the inverse array `_qp`.
   * @private
   * @param {number} i - The index of the first key.
   * @param {number} j - The index of the second key.
   */
  _exch(i, j) {
    const inverseI = this._pq[i]
    const inverseJ = this._pq[j]

    this._pq[i] = inverseJ
    this._pq[j] = inverseI

    const temp = this._qp[inverseI]

    this._qp[inverseI] = this._qp[inverseJ]
    this._qp[inverseJ] = temp
  }

  /**
   * @summary Bottom-Up reheapify (min version).
   * @description Algorithm to fix the heap order when
   * a key becomes **smaller** than its parent.
   * @private
   * @param {number} k - The index of the key to *swim*.
   */
  _swim(k) {
    // While the current index 'k' is not the root (k > 1)
    // and while the parent node (at k / 2) is greater than
    // the current node (at k), exchange both nodes.
    while (k > 1 && this._greater(Math.floor(k / 2), k)) {
      this._exch(Math.floor(k / 2), k)
      k = Math.floor(k / 2)
    }
  }

  /**
   * @summary Top-Down reheapify (min version).
   * @description Algorithm to fix the heap order when
   * a key becomes **greater** than a child.
   * @private
   * @param {number} k - Index of the key to *sink*.
   */
  _sink(k) {
    // While 'k' is still having a next child
    // that is in bounds with the PQ size (_n) ...
    while (2 * k <= this._n) {
      // let 'j' be the next left child of 'k' (2 * k)
      let j = 2 * k

      // if the left child (j) is greater than the right child (j + 1)
      // then choose the right child (j++)
      if (j < this._n && this._greater(j, j + 1)) {
        j++
      }

      // if parent node (at k) is NOT greater than
      // the child node (at j), then we have found
      // its final position.
      if (!this._greater(k, j)) {
        break
      }

      this._exch(k, j)

      k = j
    }
  }

  // Public instance methods
  // ==================================================

  /**
   * Inserts a new key to the PQ and fixes the heap order.
   * @param {number} i - The index for the key `k`.
   * @param {*} k - The key to be inserted.
   */
  insert(i, k) {
    this._n++
    this._qp[i] = this._n
    this._pq[this._n] = i
    this._keys[i] = k
    this._swim(this._n)
  }

  /**
   * Changes the associated key with index `i` to be the new key `k`.
   * @param {number} i - The index that will get the new key.
   * @param {*} k - The new key for index `i`.
   */
  changeKey(i, k) {
    this._keys[i] = k
    this._swim(this._qp[i])
    this._sink(this._qp[i])
  }

  /**
   * Returns if index `i` is associated with some key.
   * @param {number} i - The index to be inspected.
   * @returns {boolean} If the index contains an associated key.
   */
  contains(i) {
    return this._qp[i] !== -1
  }

  /**
   * Removes the key associated with index `i`.
   * @param {number} i - The index of the key that should be deleted.
   */
  delete(i) {
    if (!this.contains(i)) return

    const index = this._qp[i]

    this._exch(index, this._n--)
    this._swim(index)
    this._sink(index)

    this._pq[this._n + 1] = undefined
    this._keys[i] = undefined
    this._qp[i] = -1
  }

  /**
   * Returns the minimum key in the PQ.
   * @returns {*} The minimum key in the PQ.
   */
  minKey() {
    return this._keys[this.minIndex()]
  }

  /**
   * Returns the index of the minimum key in the PQ.
   * @returns {number} The index of the minimum key in the PQ.
   * @throws {ReferenceError} If the PQ is empty.
   */
  minIndex() {
    if (this.isEmpty()) {
      throw new ReferenceError('IndexMinPQ is empty.')
    }

    return this._pq[1]
  }

  /**
   * Removes the minimum key in the PQ and returns its index.
   * @returns {*} The minimum key.
   */
  delMin() {
    const minIndex = this.minIndex()

    // exchange current min with the last inserted
    this._exch(1, this._n--)
    // the last inserted now is the new min key,
    // but it may NOT be the minimum in the PQ,
    // so, we gotta find its correct place by using sink
    this._sink(1)

    // save the inverse index of the last item
    const i = this._pq[this._n + 1]

    // clean the reverse index of the last item in the PQ
    this._pq[this._n + 1] = undefined
    // clean the key associated to the inverse index
    this._keys[i] = undefined
    // update the inverse index that this is key no longer exists
    this._qp[i] = -1

    return minIndex
  }

  /**
   * Returns if the PQ is empty.
   * @returns {boolean} If the PQ is empty.
   */
  isEmpty() {
    return this._n === 0
  }

  /**
   * Returns the size of the PQ.
   * @returns {number} The size of the PQ (total nodes).
   */
  size() {
    return this._n
  }

  /**
   * Returns the key associated with index `i` in `_pq`.
   * @param {number} i - The index of the key.
   * @returns {*} The key located at index `i`.
   */
  keyOf(i) {
    return this._keys[i]
  }
}

module.exports = IndexMinPQ
