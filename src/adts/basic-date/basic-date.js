/**
 * BasicDate
 * @classdesc An abstract data type for Dates.
 * @implements {Comparable}
 * @see p. 79, 91, 103, 247
 */
class BasicDate {
  constructor () {
    let month, day, year

    if (arguments.length === 1 && typeof arguments[0] === 'string') {
      const parts = arguments[0].split('/')

      month = parseInt(parts[0], 10)
      day = parseInt(parts[1], 10)
      year = parseInt(parts[2], 10)
    } else if (arguments.length === 3) {
      month = arguments[0]
      day = arguments[1]
      year = arguments[2]
    }

    this._month = month
    this._day = day
    this._year = year
  }

  /**
   * Returns the date's month
   */
  month () {
    return this._month
  }

  /**
   * Returns the date's day
   */
  day () {
    return this._day
  }

  /**
   * Returns the date's year
   */
  year () {
    return this._year
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
   * @param {BasicDate} target The target BasicDate
   * @returns {boolean}
   */
  equals (target) {
    if (this === target) return true
    if (target === null) return false
    if (!(target instanceof BasicDate)) return false
    if (this.day() !== target.day()) return false
    if (this.month() !== target.month()) return false
    if (this.year() !== target.year()) return false

    return true
  }

  /**
   * Returns if this date is greater (+1),
   * smaller (-1) or equal (0) to another date.
   * @param {BasicDate} target The target BasicDate
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

module.exports = BasicDate
