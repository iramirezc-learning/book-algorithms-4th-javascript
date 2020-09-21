/**
 * Accumulator
 * @classdesc An abstract data type for accumulation data values.
 * @see p. 93
 */
class Accumulator {
  constructor () {
    this._sum = 0
    this._n = 0
  }

  /**
   * @param {number} value Number to add
   */
  addDataValue (value) {
    this._n++
    this._sum += value
  }

  /**
   * Returns the mean of the values accumulated.
   * @returns {number} The computed mean
   */
  mean () {
    return this._sum / this._n
  }

  /**
   * Formats accumulator as string.
   * @returns {string}
   * @example
   * // Mean (3 values): 0.12345
   */
  toString () {
    return `Mean (${this._n} values): ${this.mean().toFixed(5)}`
  }
}

module.exports = Accumulator
