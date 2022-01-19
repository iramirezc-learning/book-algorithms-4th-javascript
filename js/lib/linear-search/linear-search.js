/**
 * Linear Search (brute-force).
 * @see p.48
 */
class LinearSearch {
  /**
   * Returns the index of a number `key` found in the array `a`,
   * if `key` is not found, then it returns `-1`.
   * @param {Array<number>} a The unsorted array of numbers to search into.
   * @param {number} key The target key to search for.
   * @returns {number} The index of the `key` in the array `a` or `-1` if not found.
   *
   * @example <caption>The key 3 exists.</caption>
   * const a = [5, 4, 3, 2, 1]
   * LinearSearch.indexOf(a, 3)
   * // will return
   * 2
   *
   * @example <caption>The key 0 does not exist.</caption>
   * const a = [5, 4, 3, 2, 1]
   * LinearSearch.indexOf(a, 0)
   * // will return
   * -1
   */
  static indexOf(a, key) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === key) return i
    }

    return -1
  }
}

module.exports = LinearSearch
