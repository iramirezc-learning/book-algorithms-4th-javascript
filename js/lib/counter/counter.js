/**
 * An abstract data type for a simple counter.
 * @see p.85
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Counter.java.html}
 */
class Counter {
  /**
   * @param {string} id
   */
  constructor(id) {
    this.id = id
    this.count = 0
  }

  /**
   * Increments the internal count
   */
  increment() {
    this.count++
  }

  /**
   * Returns the total count.
   * @returns {number} The total count
   */
  tally() {
    return this.count
  }

  /**
   * Returns the tally and the Counter's id as String.
   * @returns {string} The tally + id as string.
   * @example
   * // 3 heads
   */
  toString() {
    return `${this.tally()} ${this.id}`
  }
}

module.exports = Counter
