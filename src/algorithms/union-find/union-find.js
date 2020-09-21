const assert = require('assert')

/**
 * UF
 * @classdesc Union Find - Quick-Find implementation.
 * @see p.221, 222
 */
class UF {
  constructor (n) {
    assert(typeof n === 'number', 'n should be a number')

    // access to component id (site indexed)
    this._id = []
    // number of components
    this._count = parseInt(n, 10)
    // initialize component id array
    for (let i = 0; i < this._count; i++) {
      this._id[i] = i
    }

    Object.seal(this)
  }

  /**
   * Returns the total number of components.
   */
  count () {
    return this._count
  }

  /**
   * Returns `true` if `p` and `q` are in the same component.
   * @param {number} p Site 1
   * @param {number} q Site 2
   */
  connected (p, q) {
    assert(typeof p === 'number', 'p should be a number')
    assert(typeof q === 'number', 'q should be a number')

    return this.find(p) === this.find(q)
  }

  /**
   * Returns the component identifier for `p` (0 to n-1)
   * @param {number} p Site
   */
  find (p) {
    assert(typeof p === 'number', 'p should be a number')

    return this._id[p]
  }

  /**
   * Adds connection between `p` and `q`.
   * @param {number} p Site 1
   * @param {number} q Site 2
   */
  union (p, q) {
    assert(typeof p === 'number', 'p should be a number')
    assert(typeof q === 'number', 'q should be a number')

    const pId = this.find(p)
    const qId = this.find(q)

    // nothing to do if already connected (same component id)
    if (pId === qId) return

    // change the componentId from _id[p] to _id[q]
    for (let i = 0; i < this._id.length; i++) {
      if (this._id[i] === pId) {
        this._id[i] = qId
      }
    }

    this._count--
  }
}

module.exports = UF
