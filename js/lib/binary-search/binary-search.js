/**
 * Iterative implementation of BinarySearch.
 * @ignore
 * @param {Array<number>} a The sorted array.
 * @param {number} key The target key.
 * @returns {number} The index position of the `key`.
 */
function indexOf(a, key) {
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
 * Binary Search.
 * @see pp.25,47
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/BinarySearch.java.html}
 */
class BinarySearch {
  /**
   * Returns the index of the `key` found in the array `a`,
   * if the `key` is not found, then it returns `-1`.
   * @param {Array<number>} a The sorted array of numbers to search the `key` into.
   * @param {number} key The target `key` to search for.
   * @returns {number} The index of the `key` in the array `a` or `-1` if it's not found.
   */
  static indexOf(a, key) {
    return indexOf(a, key)
  }

  /**
   * Returns the count of the items
   * in the sorted array `a` that are less
   * than the value of the `key` provided.
   * @param {Array<number>} a The sorted array of numbers with duplicated keys.
   * @param {number} key The value to get the rank for.
   * @returns {number} The count of items in the array that are less than `key`.
   */
  static rank(a, key) {
    const index = this.indexOf(a, key)

    if (index >= 0) {
      let i = index

      // loop to the left
      // until find the first match
      // with a key smaller than `k`
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
   * @param {Array<number>} a The sorted array of numbers with duplicated keys.
   * @param {number} key The value to count.
   * @returns {number} The total count of `key`.
   */
  static count(a, key) {
    const index = this.indexOf(a, key)
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
