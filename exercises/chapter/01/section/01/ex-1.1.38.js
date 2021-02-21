const { performance } = require('perf_hooks')
const { In, StdOut } = require('../../../../../src/libs')
const { BinarySearch, LinearSearch } = require('../../../../../src/algorithms')
const { numbersByAscendingOrder } = require('../../../../../src/utils')

/**
 * Exercise 1.1.38
 */
class Exercise {
  /**
   * Solution Exercise 1.1.38
   * @example <caption>BruteForce VS BinarySearch</caption>
   * ```sh
   * $ node ex-1.1.38.js algs4-data/largeW.txt algs4-data/largeT.txt
   * Running benchmark...
   * Whitelist length: 1000000
   * Keys length: 10000000
   *
   * BinarySearch:
   * Running Time: 4939.283277988434 # 4.9 secs
   * Filtered Keys: 367966
   *
   * BruteForce:
   * Running Time: 13918111.657770991 # 3.8 hours!
   * Filtered Keys: 367966
   * ```
   * @param {[]} args [whitelistFile, targetFile]
   */
  static solution(args) {
    const whitelistFile = new In(args[0])
    const targetsFile = new In(args[1])

    const whitelist = whitelistFile.readAllInts()
    const keys = targetsFile.readAllInts()

    whitelist.sort(numbersByAscendingOrder)

    StdOut.println('Running benchmark...')
    StdOut.println(`Whitelist length: ${whitelist.length}`)
    StdOut.println(`Keys length: ${keys.length}`)

    StdOut.println('\nBinarySearch:')
    const resultsBS = this.runBS(whitelist, keys)
    StdOut.println(`Running Time: ${resultsBS.totalRunningTime}`)
    StdOut.println(`Filtered Keys: ${resultsBS.filtered.length}`)

    StdOut.println('\nBruteForce:')
    const resultsBF = this.runBF(whitelist, keys)
    StdOut.println(`Running Time: ${resultsBF.totalRunningTime}`)
    StdOut.println(`Filtered Keys: ${resultsBF.filtered.length}`)
  }

  /**
   * Runs a searching algorithm to find the keys
   * that are not present in the whitelist.
   * @param {*} Algorithm Searching Algorithm
   * @param {[]} whitelist
   * @param {[]} keys
   */
  static run(Algorithm, whitelist, keys) {
    const filtered = []
    const start = performance.now()

    for (const key of keys) {
      if (Algorithm.indexOf(whitelist, key) === -1) {
        filtered.push(key)
      }
    }

    const totalRunningTime = performance.now() - start

    return {
      totalRunningTime,
      filtered
    }
  }

  /**
   * Runs the Brute Force Algorithm
   * @param {[]} whitelist
   * @param {[]} keys
   */
  static runBF(whitelist, keys) {
    return this.run(LinearSearch, whitelist, keys)
  }

  /**
   * Runs the Binary Search Algorithm
   * @param {[]} whitelist
   * @param {[]} keys
   */
  static runBS(whitelist, keys) {
    return this.run(BinarySearch, whitelist, keys)
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
