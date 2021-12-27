/**
 * LinearSearch
 * @see p.48
 */
class LinearSearch {
  /**
   * Returns the index of a number `key` found in an array `a`,
   * if `key` is not found, returns `-1`.
   * @param {Array<number>} a The unsorted array to search into.
   * @param {number} key The target key to search for.
   * @returns {number} The index of `key` in the array `a` or `-1` if not found.
   */
  static indexOf(a, key) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === key) return i
    }

    return -1
  }
}

module.exports = LinearSearch
