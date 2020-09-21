/**
 * SmallDate
 * @classdesc An abstract data type for Dates.
 * @implements {Comparable}
 * @see p. 79, 91, 103, 247
 */
class SmallDate {
  constructor (m, d, y) {
    // static final int _value
    Object.defineProperty(this, '_value', {
      value: y * 512 + m * 32 + d
    })
  }

  /**
   * Returns the date's month
   */
  month () {
    return Math.floor(this._value / 32) % 16
  }

  /**
   * Returns the date's day
   */
  day () {
    return this._value % 32
  }

  /**
   * Returns the date's year
   */
  year () {
    return Math.floor(this._value / 512)
  }

  /**
   * Returns the date as string
   * @example
   * // '9/27/1987'
   */
  toString () {
    return `${this.month()}/${this.day()}/${this.year()}`
  }

  /**
   * Returns if this date is equal to another date
   * @param {SmallDate} target The target SmallDate
   * @returns {boolean}
   */
  equals (target) {
    if (this === target) return true
    if (target === null) return false
    if (!(target instanceof SmallDate)) return false
    if (this.day() !== target.day()) return false
    if (this.month() !== target.month()) return false
    if (this.year() !== target.year()) return false

    return true
  }

  /**
   * Returns if this date is greater (+1),
   * smaller (-1) or equal (0) to another date.
   * @param {SmallDate} target The target SmallDate
   * @returns {number} +1 (greater than), -1 (smaller than), 0 (equal to)
   */
  compareTo (target) {
    if (this.year() > target.year()) return +1
    if (this.year() < target.year()) return -1
    if (this.month() > target.month()) return +1
    if (this.month() < target.month()) return -1
    if (this.day() > target.day()) return +1
    if (this.day() < target.day()) return -1

    return 0
  }
}

module.exports = SmallDate
