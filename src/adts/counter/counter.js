/**
 * Counter
 * @classdesc An abstract data type for a simple Counter.
 * @see p. 85
 */
class Counter {
  constructor (id) {
    this._count = 0
    // static final string _id
    Object.defineProperty(this, '_id', { value: id })
  }

  /**
   * Increments the internal count
   */
  increment () {
    this._count++
  }

  /**
   * Returns the total count.
   * @returns {number} The total count
   */
  tally () {
    return this._count
  }

  /**
   * Returns the tally and the Counter's id as String.
   * @returns {string} The tally + id as string.
   * @example
   * // 3 heads
   */
  toString () {
    return `${this.tally()} ${this._id}`
  }
}

module.exports = Counter
