/**
 * An abstract data type for dates (alternative version).
 * @see pg.79,91,103,247
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Date.java.html}
 */
class DateSmall {
  constructor(m, d, y) {
    this.value = y * 512 + m * 32 + d
  }

  /**
   * Returns the date's day.
   * @returns {number} The day of the date.
   */
  day() {
    return this.value % 32
  }

  /**
   * Returns the date's month.
   * @returns {number} The month of the date.
   */
  month() {
    return Math.floor(this.value / 32) % 16
  }

  /**
   * Returns the date's year.
   * @returns {number} The year of the date.
   */
  year() {
    return Math.floor(this.value / 512)
  }

  /**
   * Returns if this date is equal to another date.
   * @param {DateSmall} target The date to compare with.
   * @returns {boolean} If both dates are equal.
   */
  equals(target) {
    if (this === target) return true
    if (target === null) return false
    if (!(target instanceof DateSmall)) return false
    if (this.day() !== target.day()) return false
    if (this.month() !== target.month()) return false
    if (this.year() !== target.year()) return false

    return true
  }

  /**
   * Returns if this date is greater `(+1)`,
   * smaller `(-1)` or equal `(0)` to another date.
   * @param {DateSmall} target The date to compare with.
   * @returns {number} `+1` (when this date is greater than target date).<br>`-1` (when this date is smaller than the target date).<br>`0` (when both dates are equal).
   */
  compareTo(target) {
    if (this.year() > target.year()) return +1
    if (this.year() < target.year()) return -1
    if (this.month() > target.month()) return +1
    if (this.month() < target.month()) return -1
    if (this.day() > target.day()) return +1
    if (this.day() < target.day()) return -1

    return 0
  }

  /**
   * Returns the date as string.
   * @returns {string} The date as string.
   * @example
   * // '9/27/1987'
   */
  toString() {
    return `${this.month()}/${this.day()}/${this.year()}`
  }
}

module.exports = DateSmall
