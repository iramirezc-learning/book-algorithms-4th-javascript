const algorithms = require('../../algorithms')
const { StopWatch } = require('../../adts')
const { StdOut, StdRandom } = require('../../libs')
const { newArrayOf } = require('../../utils')

/**
 * Client that runs two sorting algorithms
 * to compare their running times.
 * @memberof module:test-clients
 * @see page: 256.
 */
class SortCompare {
  /**
   * Runs two sorting algorithms
   * and compares their running time by
   * calculating its ratio.
   * @example <caption>Insertion vs. Selection</caption>
   * {@lang bash}
   * $ ./client SortCompare Insertion Selection 1000 100
   * Insertion: 0.1570000000000001
   * Selection: 0.2410000000000002
   *
   * For 1000 random Doubles
   *     Insertion is 1.5 times faster than Selection
   *
   * @example <caption>Shell vs. Insertion</caption>
   * {@lang bash}
   * $ ./client SortCompare Shell Insertion 100000 100
   * Shell: 3.3429999999999978
   * Insertion: 13641.588999999998
   *
   * For 100000 random Doubles
   *     Shell is 4080.6 times faster than Insertion
   *
   * @example <caption>Merge vs. Shell</caption>
   * {@lang bash}
   * $ ./client SortCompare Merge Shell 100000 100
   * Merge: 3.3739999999999988
   * Shell: 3.1959999999999993
   *
   * For 100000 random Doubles
   *     Merge is 0.9 times faster than Shell
   *
   * @example <caption>MergeBU vs. Merge</caption>
   * {@lang bash}
   * $ ./client SortCompare MergeBU Merge 100000 100
   * MergeBU: 2.6949999999999976
   * Merge: 3.800999999999998
   *
   * For 100000 random Doubles
   *     MergeBU is 1.4 times faster than Merge
   *
   * @example <caption>Quick vs. MergeBU</caption>
   * {@lang bash}
   * $ ./client SortCompare Quick MergeBU 100000 100
   * Quick: 2.0709999999999984
   * MergeBU: 2.7499999999999973
   *
   * For 100000 random Doubles
   *     Quick is 1.3 times faster than MergeBU
   *
   * @example <caption>Quick3way vs. Quick</caption>
   * {@lang bash}
   * $ ./client SortCompare Quick3way Quick 100000 100
   * # NOTE: for this example I changed `timeRandomInput` implementation
   * # to create duplicated keys by doing `StdRandom.uniform(10)`
   *
   * Quick3way: 0.5800000000000004
   * Quick: 1.1609999999999998
   *
   * For 100000 random Doubles
   *     Quick3way is 2.0 times faster than Quick
   *
   * @example <caption>Heap vs. Quick</caption>
   * {@lang bash}
   * $ ./client SortCompare Heap Quick 100000 100
   *
   * Heap: 6.8640000000000025
   * Quick: 2.0819999999999985
   *
   * For 100000 random Doubles
   *     Heap is 0.3 times faster than Quick
   *
   * @param {...string} args - Params: `[algorithmName1, algorithmName2, n, trials]`
   * * @type {string} `args[0]` - Name of the first sorting algorithm.
   * * @type {string} `args[1]` - Name of the second sorting algorithm.
   * * @type {number} `args[2]` - Length for the generated random arrays as input.
   * * @type {number} `args[3]` - Number of trials.
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

  /**
   * Counts the total running time of a
   * sorting algorithm when sorting the array `a`.
   * @param {string} algorithmName - Name of the sorting algorithm.
   * @param {Array<*>} a - The array to be sorted by the sorting algorithm.
   * @returns {number} The total running time.
   */
  static time (algorithmName, a) {
    const sortName = `${algorithmName}Sort`

    if (!algorithms[sortName]) {
      throw new Error(`${sortName} is not defined`)
    }

    const timer = new StopWatch()

    algorithms[sortName].sort(a)

    const elapsedTime = timer.elapsedTime()

    algorithms[sortName].isSorted(a)

    return elapsedTime
  }

  /**
   * Sums the total time that a sorting algorithm
   * takes to sort a random array of length `n` in a number of `trials`.
   * @param {string} algorithmName - Name of the sorting algorithm.
   * @param {number} n - The size for the random array.
   * @param {number} trials - The number of trials.
   * @returns {number} The total running time of all `trials`.
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
}

module.exports = { SortCompare }
