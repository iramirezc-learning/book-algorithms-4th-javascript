const { OrderedSymbolTable } = require('../../abstracts')
const NodeBST = require('./node-bst')
const { isDefined } = require('../../common')
const Queue = require('../queue/queue')

/**
 * Binary Search Tree - Ordered Symbol Table
 * @augments OrderedSymbolTable
 * @memberof module:adts
 * @see pages: 398, 399, 407, 409, 411, 413.
 * @see [edu.princeton.cs.algs4.BinarySearchST.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/BST.java.html}
 */
class BinarySearchTreeST extends OrderedSymbolTable {
  constructor(comparator) {
    super(comparator)

    /**
     * Root node of the BST
     * @private
     * @type {NodeBST}
     */
    this._root = null

    Object.seal(this)
  }

  /**
   * Returns the size of the BST.
   * @returns {number} The size of the BST.
   */
  size() {
    return this._size(this._root)
  }

  /**
   * Returns the size of a given Node x.
   * @private
   * @param {NodeBST} x - The Node to get the size from.
   * @returns {number} The size of the Node x.
   */
  _size(x) {
    if (x === null) {
      return 0
    } else {
      return x._n
    }
  }

  /**
   * Returns the value of a given Key `k`, in the BST.
   * @param {*} k - The key to retrieve the value from the BST.
   * @returns {(*|null)} The value associated to the key `k` or `null`.
   */
  get(k) {
    return this._get(this._root, k)
  }

  /**
   * Returns the value of a given Key `k` searching from the given Node `x`.
   * @private
   * @param {NodeBST} x - The Node to start the searching from.
   * @param {*} k - The key to retrieve the value from the given Node `x`.
   * @returns {(*|null)} The value associated to the key `k` or `null`.
   */
  _get(x, k) {
    if (x === null) {
      return null
    } else {
      const cmp = this.comparator(k, x._key)

      if (cmp < 0) {
        return this._get(x._left, k)
      } else if (cmp > 0) {
        return this._get(x._right, k)
      } else {
        return x._val
      }
    }
  }

  /**
   * Inserts a new Node to the BST.
   * @param {*} k - The key for the Node.
   * @param {*} v - The value for the Node.
   */
  put(k, v) {
    this._root = this._put(this._root, k, v)
  }

  /**
   * Inserts a new Node starting form the given BST x.
   * @private
   * @param {NodeBST} x - The Node to start the insertion.
   * @param {*} k - The key for the Node.
   * @param {*} v - The value for the Node.
   * @return {NodeBST} The new node created or updated.
   */
  _put(x, k, v) {
    if (x === null) {
      return new NodeBST(k, v, 1)
    } else {
      const cmp = this.comparator(k, x._key)

      if (cmp < 0) {
        x._left = this._put(x._left, k, v)
      } else if (cmp > 0) {
        x._right = this._put(x._right, k, v)
      } else {
        x._val = v
      }
    }

    x._n = this._size(x._left) + this._size(x._right) + 1

    return x
  }

  /**
   * Returns the min key in the BST.
   * @returns {*} The min key in the BST.
   */
  min() {
    if (this.isEmpty()) {
      throw new ReferenceError('BST is empty.')
    }

    const x = this._min(this._root)

    return x._key
  }

  /**
   * Returns the min key in the `x` subtree.
   * @private
   * @param {NodeBST} x - The subtree node to find the min key.
   * @returns {NodeBST} The node containing the min key.
   */
  _min(x) {
    if (x._left === null) {
      return x
    } else {
      return this._min(x._left)
    }
  }

  /**
   * Returns the max key in the BST.
   * @returns {*} The max key in the BST.
   */
  max() {
    if (this.isEmpty()) {
      throw new ReferenceError('BST is empty.')
    }

    const x = this._max(this._root)

    return x._key
  }

  /**
   * Returns the max key in the `x` subtree.
   * @private
   * @param {NodeBST} x - The subtree node to find the max key.
   * @returns {NodeBST} The node containing the max key.
   */
  _max(x) {
    if (x._right === null) {
      return x
    } else {
      return this._max(x._right)
    }
  }

  /**
   * Finds the largest key that is less than
   * or equal to the given key `k` in the BST.
   * @param {*} k - The key value to search for.
   * @return {*} The floor key for `k`.
   */
  floor(k) {
    const x = this._floor(this._root, k)

    if (x === null) {
      throw new RangeError(`Couldn't not find floor for key: ${k}`)
    }

    return x._key
  }

  /**
   * Returns the node in the subtree `x` that contains
   * the largest key that is less than or equal to the given `k`.
   * @private
   * @param {NodeBST} x - The subtree to search the floor.
   * @param {*} k - The key value to search for.
   * @returns {(NodeBST|null)} The node containing the floor key.
   */
  _floor(x, k) {
    if (x === null) {
      return null
    }

    const cmp = this.comparator(k, x._key)

    if (cmp === 0) {
      return x
    } else if (cmp < 0) {
      return this._floor(x._left, k)
    }

    const t = this._floor(x._right, k)

    if (t !== null) {
      return t
    } else {
      return x
    }
  }

  /**
   * Finds the smallest key that is greater than
   * or equal to the given key `k` in the BST.
   * @param {*} k - The key value to search for.
   * @return {*} The ceiling key for key `k`.
   */
  ceiling(k) {
    const x = this._ceiling(this._root, k)

    if (x === null) {
      throw new RangeError(`Couldn't not find ceiling for key: ${k}`)
    }

    return x._key
  }

  /**
   * Returns the node in the subtree `x` that contains
   * the smallest key that is greater than or equal to the given key `k`.
   * @private
   * @param {NodeBST} x - The subtree to search the ceiling.
   * @param {*} k - The key value to search for.
   * @returns {(NodeBST|null)} The node containing the ceiling key.
   */
  _ceiling(x, k) {
    if (x === null) {
      return null
    }

    const cmp = this.comparator(k, x._key)

    if (cmp === 0) {
      return x
    } else if (cmp > 0) {
      return this._ceiling(x._right, k)
    }

    const t = this._ceiling(x._left, k)

    if (t !== null) {
      return t
    } else {
      return x
    }
  }

  /**
   * Returns the holding key corresponding to the rank `k` in the BST.
   * @param {number} k - The rank to be selected.
   * @returns {*} The key in the rank `k`.
   */
  select(k) {
    if (k < 0 || k >= this.size()) {
      throw new RangeError(`Range '${k}' is out of bounds.`)
    }

    const x = this._select(this._root, k)

    return x._key
  }

  /**
   * Returns the node at rank `k` in the subtree `x`.
   * @private
   * @param {NodeBST} x - The subtree to search for.
   * @param {*} k - The rank to be selected.
   * @returns {NodeBST} The node at rank `k`.
   */
  _select(x, k) {
    const t = this._size(x._left)

    if (t > k) {
      return this._select(x._left, k)
    } else if (t < k) {
      return this._select(x._right, k - t - 1)
    } else {
      return x
    }
  }

  /**
   * Returns the number of keys that are less than the given key `k` in the BST.
   * @param {*} k - The key to compare with.
   * @returns {number} The number of keys less than the key `k`.
   */
  rank(k) {
    return this._rank(this._root, k)
  }

  /**
   * Returns the number of keys that are less than the given key `k` for the subtree `x`.
   * @private
   * @param {NodeBST} x - The subtree to search in.
   * @param {*} k - The key to compare with.
   * @returns {number} The number of keys less than the key `k`.
   */
  _rank(x, k) {
    if (x === null) {
      return 0
    }

    const cmp = this.comparator(k, x._key)

    if (cmp < 0) {
      return this._rank(x._left, k)
    } else if (cmp > 0) {
      return 1 + this._size(x._left) + this._rank(x._right, k)
    } else {
      return this._size(x._left)
    }
  }

  /**
   * Removes the node with the smallest key in the BST.
   */
  deleteMin() {
    if (this.isEmpty()) {
      throw new ReferenceError('BST is empty.')
    }

    this._root = this._deleteMin(this._root)
  }

  /**
   * Returns the updated node after removing the leftmost child holding the min key.
   * @private
   * @param {NodeBST} x - The subtree to search in.
   * @returns {NodeBST} The updated node after removing the min key.
   */
  _deleteMin(x) {
    if (x._left === null) {
      return x._right
    }

    x._left = this._deleteMin(x._left)
    x._n = this._size(x._left) + this._size(x._right) + 1

    return x
  }

  /**
   * Removes the node with the largest key in the BST.
   */
  deleteMax() {
    if (this.isEmpty()) {
      throw new ReferenceError('BST is empty.')
    }

    this._root = this._deleteMax(this._root)
  }

  /**
   * Returns the updated node after removing the rightmost child holding the max key.
   * @private
   * @param {NodeBST} x - The subtree to search in.
   * @returns {NodeBST} The updated node after removing the max key.
   */
  _deleteMax(x) {
    if (x._right === null) {
      return x._left
    }

    x._right = this._deleteMax(x._right)
    x._n = this._size(x._left) + this._size(x._right) + 1

    return x
  }

  /**
   * Removes the given key `k` from the BST.
   * @param {*} k - The key to be deleted.
   */
  delete(k) {
    this._root = this._delete(this._root, k)
  }

  /**
   * Removes the given key `k` starting from the subtree `x`.
   * @private
   * @param {NodeBST} x - The subtree to search in.
   * @param {*} k - The key to be deleted.
   * @returns {NodeBST} The updated node after removing the `k` key.
   */
  _delete(x, k) {
    if (x === null) {
      return null
    }

    const cmp = this.comparator(k, x._key)

    if (cmp < 0) {
      x._left = this._delete(x._left, k)
    } else if (cmp > 0) {
      x._right = this._delete(x._right, k)
    } else {
      if (x._right === null) {
        return x._left
      }

      if (x._left === null) {
        return x._right
      }

      const t = x

      x = this._min(t._right)
      x._right = this._deleteMin(t._right)
      x._left = t._left
    }

    x._n = this._size(x._left) + this._size(x._right) + 1

    return x
  }
  /**
   * Returns the keys in the range `[lo..hi]` in th BST as an iterator.
   * @param {*} lo - The lowest range key.
   * @param {*} hi - The largest range key.
   * @returns {*} Returns an iterable object that
   * will provide all the keys in the BST in sorted order.
   */ /**
   * Returns all the keys in the BST as an iterator.
   * @returns {*} Returns an iterable object that
   * will provide all the keys in the BST in sorted order.
   */ keys(lo, hi) {
    if (isDefined(lo) && isDefined(hi)) {
      const queue = new Queue()

      this._keys(this._root, queue, lo, hi)

      return queue
    } else {
      const _lo = isDefined(lo) ? lo : this.min()
      const _hi = isDefined(hi) ? hi : this.max()

      return this.keys(_lo, _hi)
    }
  }

  /**
   * Enqueue the keys in the range `[lo..hi]` in the subtree `x`.
   * @private
   * @param {NodeBST} x - The subtree to search in.
   * @param {Queue} queue - The queue to return as iterable.
   * @param {*} lo - The lowest key for the range.
   * @param {*} hi - The highest key for the range.
   */
  _keys(x, queue, lo, hi) {
    if (x === null) return

    const cmpLo = this.comparator(lo, x._key)
    const cmpHi = this.comparator(hi, x._key)

    if (cmpLo < 0) this._keys(x._left, queue, lo, hi)
    if (cmpLo <= 0 && cmpHi >= 0) queue.enqueue(x._key)
    if (cmpHi > 0) this._keys(x._right, queue, lo, hi)
  }
}

module.exports = BinarySearchTreeST
