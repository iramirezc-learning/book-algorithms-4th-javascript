/**
 * Recursive implementation of BinarySearch
 * @param {Array<number>} a The sorted array.
 * @param {number} key The target key.
 * @param {number} lo The lower index bound.
 * @param {number} hi The higher index bound.
 * @returns {number} The index position of the `key`.
 */
function indexOf(a, key, lo, hi) {
  if (lo > hi) {
    return -1
  }

  const mid = Math.floor(lo + (hi - lo) / 2)

  if (key < a[mid]) {
    return indexOf(a, key, lo, mid - 1)
  } else if (key > a[mid]) {
    return indexOf(a, key, mid + 1, hi)
  } else {
    return mid
  }
}

/**
 * BinarySearchRecursive
 * @see pp.25,47
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/BinarySearch.java.html}
 */
class BinarySearchRecursive {
  /**
   * Returns the index of the `key` in the array `a`,
   * if `key` is not found, then returns `-1`.
   * @param {Array<number>} a The sorted array to search into.
   * @param {number} key The target key to search for.
   * @returns {number} The index of the number in the array or `-1` if not found.
   */
  static indexOf(a, key) {
    return indexOf(a, key, 0, a.length - 1)
  }

  /**
   * Returns the count of the items
   * in the sorted array that are less
   * than the value of the `key`.
   * @param {Array<number>} a The sorted array with duplicated keys.
   * @param {number} key The value to get the rank from.
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
   * @param {Array<number>} a The sorted array with duplicated keys.
   * @param {number} key The value to count.
   */
  static count(a, key) {
    let count = 0
    const index = this.indexOf(a, key)

    if (index === -1) return count

    // count to the left
    let left = index - 1

    while (left >= 0 && a[left--] === key) {
      count++
    }

    // count to the right
    let right = index + 1

    while (right < a.length && a[right++] === key) {
      count++
    }

    return count + 1
  }
}

module.exports = BinarySearchRecursive
