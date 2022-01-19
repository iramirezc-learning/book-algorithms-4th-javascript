const assert = require('assert')

/**
 * Union Find (quick-union) implementation.
 * @see pg.221,224
 */
class UnionFindQuick {
  constructor(n) {
    assert(typeof n === 'number', 'n should be a number')

    /**
     * Array of component ids.
     * @type {Array<number>}
     */
    this.id = [] // access to component id (site indexed)

    /**
     * The total number of components.
     * @type {number}
     */
    this._count = n // number of components

    // initialize component id array
    for (let i = 0; i < n; i++) {
      this.id[i] = i
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

    // change the componentId from id[p] to id[q]
    this.id[pId] = qId

    this._count--
  }
}

module.exports = UnionFindQuick
