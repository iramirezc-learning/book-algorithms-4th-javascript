/**
 * An abstract data type for Dates (alternative version).
 * @see pg.79,91,103,247
 */
class DateSmall {
  constructor(m, d, y) {
    this.value = y * 512 + m * 32 + d
  }

  /**
   * Returns the date's month
   */
  month() {
    return Math.floor(this.value / 32) % 16
  }

  /**
   * Returns the date's day
   */
  day() {
    return this.value % 32
  }

  /**
   * Returns the date's year
   */
  year() {
    return Math.floor(this.value / 512)
  }

  /**
   * Returns the date as string
   * @example
   * // '9/27/1987'
   */
  toString() {
    return `${this.month()}/${this.day()}/${this.year()}`
  }

  /**
   * Returns if this date is equal to another date
   * @param {DateSmall} target The target DateSmall
   * @returns {boolean}
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
   * Returns if this date is greater (+1),
   * smaller (-1) or equal (0) to another date.
   * @param {DateSmall} target The target DateSmall
   * @returns {number} +1 (greater than), -1 (smaller than), 0 (equal to)
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
}

module.exports = DateSmall
