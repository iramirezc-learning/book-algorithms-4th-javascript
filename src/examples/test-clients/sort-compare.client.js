const { StdOut, StdRandom } = require('../../libs')
const { newArrayOf } = require('../../utils')
const { StopWatch } = require('../../adts')
const algorithms = require('../../algorithms')

/**
 * SortCompare
 * @classdesc Client that runs two sorting algorithms to compare their running times.
 * @see p. 256
 */
class SortCompare {
  /**
   * Times the running time of a sorting algorithm
   * given with the array provided as input.
   * @param {string} algorithmName Name of the sorting algorithm.
   * @param {[*]} array Input array for the sorting algorithm.
   * @returns {number} total running time
   */
  static time (algorithmName, array) {
    const sortName = `${algorithmName}Sort`

    if (!algorithms[sortName]) {
      throw new Error(`${sortName} is not defined`)
    }

    const timer = new StopWatch()

    algorithms[sortName].sort(array)

    return timer.elapsedTime()
  }

  /**
   * Times the total time that a sorting algorithm
   * takes to sort an input of length `n` for a number of `trials`.
   * @param {string} algorithmName Name of the sorting algorithm.
   * @param {number} n Input size.
   * @param {number} trials Number of trials.
   * @returns {number} total running time
   */
  static timeRandomInput (algorithmName, n, trials) {
    let total = 0
    let a = []

    for (let t = 0; t < trials; t++) {
      a = newArrayOf(n, () => StdRandom.uniform())
      total += this.time(algorithmName, a)
    }

    return total
  }

  /**
   * Runs two sorting algorithms
   * and compares their running time by
   * calculating its ratio.
   * @param {[string, string, number, number]} args [algorithm1Name, algorithm2Name, n, trials]
   * @example <caption>Insertion vs. Selection</caption>
   * ```sh
   * $ node sort-compare.client.js Insertion Selection 1000 100
   * Insertion: 0.1570000000000001
   * Selection: 0.2410000000000002
   *
   * For 1000 random Doubles
   *     Insertion is 1.5 times faster than Selection
   * ```
   * @example <caption>Shell vs. Insertion</caption>
   * ```sh
   * $ node sort-compare.client.js Shell Insertion 100000 100
   * Shell: 3.3429999999999978
   * Insertion: 13641.588999999998
   *
   * For 100000 random Doubles
   *     Shell is 4080.6 times faster than Insertion
   * ```
   * @example <caption>Merge vs. Shell</caption>
   * ```sh
   * $ node sort-compare.client.js Merge Shell 100000 100
   * Merge: 3.3739999999999988
   * Shell: 3.1959999999999993
   *
   * For 100000 random Doubles
   *     Merge is 0.9 times faster than Shell
   * ```
   * @example <caption>MergeBU vs. Merge</caption>
   * ```sh
   * $ node sort-compare.client.js MergeBU Merge 100000 100
   * MergeBU: 2.6949999999999976
   * Merge: 3.800999999999998
   *
   * For 100000 random Doubles
   *     MergeBU is 1.4 times faster than Merge
   * ```
   * @example <caption>Quick vs. MergeBU</caption>
   * ```sh
   * $ node sort-compare.client.js Quick MergeBU 100000 100
   * Quick: 2.0709999999999984
   * MergeBU: 2.7499999999999973
   *
   * For 100000 random Doubles
   *     Quick is 1.3 times faster than MergeBU
   * ```
   */
  static main (args) {
    const alg1 = args[0]
    const alg2 = args[1]
    const n = parseInt(args[2], 10)
    const trials = parseInt(args[3], 10)

    const time1 = this.timeRandomInput(alg1, n, trials)
    const time2 = this.timeRandomInput(alg2, n, trials)

    StdOut.println(`${alg1}: ${time1}\n${alg2}: ${time2}\n`)

    const ratio = time2 / time1

    StdOut.printf('For %d random Doubles\n    %s is', n, alg1)
    StdOut.printf(` ${ratio.toFixed((1))} times faster than %s\n`, alg2)
  }
}

// Execution
// ==============================
SortCompare.main(process.argv.slice(2))
