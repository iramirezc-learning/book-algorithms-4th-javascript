/**
 * BinarySearch
 * @classdesc Finds the index of a number in an array.
 * @see p. 25, p. 47
 */
class BinarySearch {
  /**
   * Iterative implementation of BinarySearch
   * @param {[]} a The sorted Array.
   * @param {number} key The target key.
   * @returns {number} The index of the number in the array or `-1` if not found.
   */
  static _iterativeIndexOf (a, key) {
    let lo = 0
    let hi = a.length - 1
    let mid

    while (lo <= hi) {
      mid = Math.floor(lo + (hi - lo) / 2)

      if (key < a[mid]) {
        hi = mid - 1
      } else if (key > a[mid]) {
        lo = mid + 1
      } else {
        return mid
      }
    }

    return -1
  }

  /**
   * Recursive implementation of BinarySearch
   * @param {[]} a The sorted Array.
   * @param {number} key The target key.
   * @param {number} lo The lower index bound.
   * @param {number} hi The higher index bound.
   * @returns {number} The index of the number in the array or `-1` if not found.
   */
  static _recursiveIndexOf (a, key, lo, hi) {
    if (lo > hi) {
      return -1
    }

    const mid = Math.floor(lo + (hi - lo) / 2)

    if (key < a[mid]) {
      return BinarySearch._recursiveIndexOf(a, key, lo, mid - 1)
    } else if (key > a[mid]) {
      return BinarySearch._recursiveIndexOf(a, key, mid + 1, hi)
    } else {
      return mid
    }
  }

  /**
   * Returns the index of a number `key` found in an array `a`,
   * if `key` is not found, returns `-1`.
   * @param {[]} a The sorted Array to search into.
   * @param {number} key The target key to search for.
   * @returns {number} The index of `key` in the array `a` or `-1` if not found.
   */
  static indexOf (a, key) {
    return BinarySearch._iterativeIndexOf(a, key)
  }

  /**
   * Returns the index of a number `key` found in an array `a`,
   * if `key` is not found, returns `-1`.
   * @param {[]} a The sorted Array to search into.
   * @param {number} key The target key to search for.
   * @returns {number} The index of `key` in the array `a` or `-1` if not found.
   */
  static recursiveIndexOf (a, key) {
    return BinarySearch._recursiveIndexOf(a, key, 0, a.length - 1)
  }
}

module.exports = BinarySearch
