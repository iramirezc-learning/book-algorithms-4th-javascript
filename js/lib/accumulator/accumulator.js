/**
 * An abstract data type for accumulation data values.
 * @see p.93
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Accumulator.java.html}
 */
class Accumulator {
  constructor() {
    this.sum = 0
    this.n = 0
  }

  /**
   * @param {number} value Number to add
   */
  addDataValue(value) {
    this.n++
    this.sum += value
  }

  /**
   * Returns the mean of the values accumulated.
   * @returns {number} The computed mean
   */
  mean() {
    return this.sum / this.n
  }

  /**
   * Formats accumulator as string.
   * @returns {string}
   * @example
   * // Mean (3 values): 0.12345
   */
  toString() {
    return `Mean (${this.n} values): ${this.mean().toFixed(5)}`
  }
}

module.exports = Accumulator
