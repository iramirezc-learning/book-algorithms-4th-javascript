/**
 * An abstract data type for a simple counter.
 * @see p.85
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Counter.java.html}
 */
class Counter {
  /**
   * @param {string} id The name for the counter.
   */
  constructor(id) {
    /**
     * The counter's identifier (name).
     * @type {string}
     */
    this.id = id

    /**
     * The total count.
     * @type {number}
     */
    this.count = 0
  }

  /**
   * Increments the count.
   * @returns {void}
   */
  increment() {
    this.count++
  }

  /**
   * Returns the total count.
   * @returns {number} The total count.
   */
  tally() {
    return this.count
  }

  /**
   * Returns the tally (the count) and the counter's id as string.
   * @returns {string} The tally and the counter's id as string.
   * @example
   * // 3 heads
   */
  toString() {
    return `${this.tally()} ${this.id}`
  }
}

module.exports = Counter
