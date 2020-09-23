/**
 * A default comparing function that
 * returns -1 when `a` is less than `b`,
 * returns 1 when `a` is greater than `b` or
 * returns 0 when `a` is equal to `b`.
 * @param {*} a Comparable object `a`
 * @param {*} b Comparable object `b`
 */
const defaultComparator = (a, b) => {
  if (a === b) return 0

  return a < b ? -1 : 1
}

module.exports = {
  defaultComparator
}
