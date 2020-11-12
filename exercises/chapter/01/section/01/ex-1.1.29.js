const { In, StdOut } = require('../../../../../src/libs')
const { BinarySearch } = require('../../../../../src/algorithms')
const { numbersByAscendingOrder } = require('../../../../../src/utils')

/**
 * Exercise 1.1.29
 */
class Exercise {
  /**
   * Solution Exercise 1.1.29
   * @example <caption>Tiny whitelist</caption>
   * ```shell
   * $ node ex-1.1.29.js algs4-data/tinyW.txt
   * { key: 10, rank: 0, count: 1, length: 15 }
   * ```
   * @example <caption>Large whitelist</caption>
   * ```shell
   * $ node ex-1.1.29.js algs4-data/largeW.txt
   * { key: 471981, rank: 471499, count: 9, length: 1000000 }
   * ```
   * @param {[]} args [whitelistFile]
   */
  static solution (args) {
    const input = new In(args[0])
    const whitelist = input.readAllInts()

    whitelist.sort(numbersByAscendingOrder)

    StdOut.println('mostDuplicatedKey (v1):', this.getMostDuplicatedKey(whitelist))
    StdOut.println('mostDuplicatedKey (v2):', this.getMostDuplicatedKeyV2(whitelist))
  }

  /**
   * Returns the info (key, rank, count)
   * of first key found
   * with most duplicates.
   * @param {[]} a The sorted array with duplicated keys.
   */
  static getMostDuplicatedKey (a) {
    let key = a[0]
    let count = BinarySearch.count(a, key)

    let i = count // start from next key

    while (i < a.length) {
      const nextKey = a[i]
      const nextKeyCount = BinarySearch.count(a, nextKey)

      if (nextKeyCount > count) {
        key = nextKey
        count = nextKeyCount
      }

      i += nextKeyCount // move to next key
    }

    return {
      key,
      rank: BinarySearch.rank(a, key),
      count,
      length: a.length
    }
  }

  /**
   * Alternative method that uses
   * a dictionary to found the key with
   * most duplicated values.
   * @param {[]} a The sorted array with duplicated values.
   */
  static getMostDuplicatedKeyV2 (a) {
    const keys = {}
    let maxKey = null
    let maxKeyCount = 0

    for (let i = 0; i < a.length; i++) {
      if (!keys[a[i]]) {
        keys[a[i]] = 0
      }

      keys[a[i]]++

      if (maxKey === null || keys[a[i]] > maxKeyCount) {
        maxKey = a[i]
        maxKeyCount = keys[maxKey]
      }
    }

    return {
      key: maxKey,
      rank: BinarySearch.rank(a, maxKey),
      count: maxKeyCount,
      length: a.length
    }
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
