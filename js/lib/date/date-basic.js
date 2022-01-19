/**
 * An abstract data type for dates.
 * @see pg.79,91,103,247
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Date.java.html}
 */
class DateBasic {
  constructor() {
    if (arguments.length === 1 && typeof arguments[0] === 'string') {
      const parts = arguments[0].split('/')
      this._month = parseInt(parts[0], 10)
      this._day = parseInt(parts[1], 10)
      this._year = parseInt(parts[2], 10)
    } else if (arguments.length === 3) {
      this._month = arguments[0]
      this._day = arguments[1]
      this._year = arguments[2]
    }
  }

  /**
   * Returns the date's day.
   * @returns {number} The day of the date.
   */
  day() {
    return this._day
  }

  /**
   * Returns the date's month.
   * @returns {number} The month of the date.
   */
  month() {
    return this._month
  }

  /**
   * Returns the date's year.
   * @returns {number} The year of the date.
   */
  year() {
    return this._year
  }

  /**
   * Returns if this date is equal to another date.
   * @param {DateBasic} target The date to compare with.
   * @returns {boolean} If both dates are equal.
   */
  equals(target) {
    if (this === target) return true
    if (target === null) return false
    if (!(target instanceof DateBasic)) return false
    if (this.day() !== target.day()) return false
    if (this.month() !== target.month()) return false
    if (this.year() !== target.year()) return false

    return true
  }

  /**
   * Returns if this date is greater `(+1)`,
   * smaller `(-1)` or equal `(0)` to another date.
   * @param {DateBasic} target The date to compare with.
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

module.exports = DateBasic
