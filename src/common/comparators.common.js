/** @module common/comparators */

const { isDefined } = require('./validators.common')

/**
 * Helper function to inspect if a given object has the method `compareTo` implemented.
 * @param {*} obj - The object to be inspected.
 * @returns {boolean} Returns if the object has the method `compareTo` implemented.
 */
function hasCompareTo(obj) {
  return isDefined(obj) && typeof obj.compareTo === 'function'
}

/**
 * Helper function to evaluate if objects `a` and `b` implement the `compareTo` function.
 * @param {*} a - The object `a`.
 * @param {*} b - The object `b`.
 * @returns {boolean} Returns if both objects `a` and `b` implement the `compareTo` method.
 */
function implementCompareTo(a, b) {
  return hasCompareTo(a) && hasCompareTo(b)
}

/**
 * A default comparing function.
 * @memberof module:common/comparators
 * @param {*} a - Comparable object `a`.
 * @param {*} b - Comparable object `b`.
 * @returns {number}
 *   returns `-1` when `a` is less than `b`,
 *   returns `1` when `a` is greater than `b` or
 *   returns `0` when `a` is equal to `b`.
 */
const defaultComparator = (a, b) => {
  if (a === b) return 0

  return a < b ? -1 : 1
}

/**
 * Generic comparator function.
 * @memberof module:common/comparators
 * @param {*} a - Comparable object `a`.
 * @param {*} b - Comparable object `b`.
 * @returns {number}
 *   returns `-1` when `a` is less than `b`,
 *   returns `1` when `a` is greater than `b` or
 *   returns `0` when `a` is equal to `b`.
 */
const compare = (a, b) => {
  if (a === b) return 0

  if (implementCompareTo(a, b)) {
    return a.compareTo(b)
  }

  return defaultComparator(a, b)
}

module.exports = {
  defaultComparator,
  compare
}
