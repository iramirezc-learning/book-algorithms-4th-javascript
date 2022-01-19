const assert = require('assert')

/**
 * Union Find (weighted-quick-union) implementation.
 * @see pg.221,224,228
 */
class UnionFindWeighted {
  constructor(n) {
    assert(typeof n === 'number', 'n should be a number')

    /**
     * Array of component ids.
     * @type {Array<number>}
     */
    this.id = [] // access to component id (site indexed)

    /**
     * Array of component sizes.
     * @type {Array<number>}
     */
    this.size = [] // size of component roots (site indexed)

    /**
     * The total number of components.
     * @type {number}
     */
    this._count = n // number of components

    // initialize component id array
    for (let i = 0; i < this._count; i++) {
      this.id[i] = i
      this.size[i] = 1
    }

    Object.seal(this)
  }

  /**
   * Returns the total number of components.
   * @returns {number}
   */
  count() {
    return this._count
  }

  /**
   * Returns `true` if `p` and `q` are in the same component.
   * @param {number} p Site 1.
   * @param {number} q Site 2.
   * @returns {boolean}
   */
  connected(p, q) {
    assert(typeof p === 'number', 'p should be a number')
    assert(typeof q === 'number', 'q should be a number')

    return this.find(p) === this.find(q)
  }

  /**
   * Returns the component identifier for `p` (0 to n-1).
   * @param {number} p Site.
   * @returns {number}
   */
  find(p) {
    assert(typeof p === 'number', 'p should be a number')

    while (p !== this.id[p]) {
      p = this.id[p]
    }

    return p
  }

  /**
   * Adds connection between `p` and `q`.
   * @param {number} p Site 1.
   * @param {number} q Site 2.
   * @returns {void}
   */
  union(p, q) {
    assert(typeof p === 'number', 'p should be a number')
    assert(typeof q === 'number', 'q should be a number')

    const pId = this.find(p)
    const qId = this.find(q)

    // nothing to do if already connected (same component id)
    if (pId === qId) return

    // make smaller root point to larger one
    if (this.size[pId] < this.size[qId]) {
      this.id[pId] = qId
      this.size[qId] += this.size[pId]
    } else {
      this.id[qId] = pId
      this.size[pId] += this.size[qId]
    }

    this._count--
  }
}

module.exports = UnionFindWeighted
