/**
 * BinarySearch
 * @classdesc Finds the index of a number in an array.
 * @see p. 25, p. 47
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/BinarySearch.java.html}
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

  /**
   * Returns the count of the items
   * in the sorted array that are less
   * than the value of the `key`.
   * @param {[]} a The sorted array with duplicated keys.
   * @param {number} key The value to get the rank.
   */
  static rank (a, key) {
    const index = this.recursiveIndexOf(a, key)

    if (index >= 0) {
      let i = index

      // loop to the left to find
      // the first match with a key
      // that is less than `k`
      for (; i >= 0; i--) {
        if (a[i] !== key) break
      }

      return i + 1
    } else {
      // loop to the right
      // until find the first match
      // with a key greater than `k`
      for (let i = 0; i < a.length; i++) {
        if (a[i] > key) return i
      }
    }
  }

  /**
   * Returns the number of values
   * that are equal to `key`.
   * @param {[]} a The sorted array with duplicated keys.
   * @param {number} key The value to count.
   */
  static count (a, key) {
    const index = this.recursiveIndexOf(a, key)
    let _count = 0

    if (index === -1) return _count

    // count to the left
    let left = index - 1
    while (left >= 0 && a[left--] === key) {
      _count++
    }

    // count to the right
    let right = index + 1
    while (right < a.length && a[right++] === key) {
      _count++
    }

    return _count + 1
  }
}

module.exports = BinarySearch
