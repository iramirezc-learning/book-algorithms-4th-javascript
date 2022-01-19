/**
 * An abstract data type for accumulating data values.
 * @see p.93
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Accumulator.java.html}
 */
class Accumulator {
  constructor() {
    /**
     * The count of the values.
     * @type {number}
     */
    this.n = 0

    /**
     * The sum of the values.
     * @type {number}
     */
    this.sum = 0
  }

  /**
   * Adds a new value to the accumulator.
   * @param {number} value Number to add.
   * @returns {void}
   */
  addDataValue(value) {
    this.n++
    this.sum += value
  }

  /**
   * Returns the mean of the values accumulated.
   * @returns {number} The computed mean.
   */
  mean() {
    return this.sum / this.n
  }

  /**
   * Formats the accumulator as a string.
   * @returns {string}
   * @example
   * // Mean (3 values): 0.12345
   */
  toString() {
    return `Mean (${this.n} values): ${this.mean().toFixed(5)}`
  }
}

module.exports = Accumulator
