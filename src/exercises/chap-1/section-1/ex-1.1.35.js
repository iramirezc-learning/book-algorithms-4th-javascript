const { StdOut, StdRandom } = require('../../../libs')
const { newArrayOf, pad } = require('../../../utils')

const SIDES = 6

/**
 * Exercise 1.1.35
 */
class Exercise {
  /**
   * Given two dice, this function computes
   * the exact frequency of the sum of the
   * values of each dice.
   * @returns {[]} Exact frequency of total sum of two dice
   * @example
   * // NOTICE: how possible values go only from 2-12
   * // [0, 0, 1, 2, 3, 4, 5, 6, 5, 4,  3,  2,  1] // the exact frequency
   * // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // sum of values
   */
  static computeExactFrequencies () {
    const frequencies = newArrayOf(SIDES * 2 + 1, 0)

    for (let i = 1; i <= SIDES; i++) {
      for (let j = 1; j <= SIDES; j++) {
        frequencies[i + j]++
      }
    }

    return frequencies
  }

  /**
   * Computes the Exact Probability Distribution
   * for the sum of two dice
   * given as `exactFrequencies`
   * @param {[]} exactFrequencies [0, 0, 1, 2, 3, 4, 5, 6, 5, 4,  3,  2,  1]
   */
  static computeExactProbability (exactFrequencies) {
    // the total exact throws is 36
    const totalThrows = SIDES * SIDES
    return this.computeProbability(exactFrequencies, totalThrows)
  }

  /**
   * Computes the Probability Distribution
   * for the sum of two dice.
   * @param {[]} frequencies Count of frequencies of the sum of two dice
   * @returns {[]} Probability distribution for the sum of two dice.
   * @example
   * // P [0, 0, 0.027, 0.055, 0.083, 0.111, 0.138, 0.166, 0.138, 0.111, 0.083, 0.055, 0.027]
   */
  static computeProbability (frequencies, totalThrows) {
    const probabilities = newArrayOf(SIDES * 2 + 1, 0)

    for (let k = 2; k <= SIDES * 2; k++) {
      probabilities[k] = frequencies[k] / totalThrows
    }

    return probabilities
  }

  /**
   * Prints the Frequency and Probability
   * of the sum of two dice and
   * the Total Throws and Total P.
   * @param {[]} f Array of frequencies
   * @param {[]} p Array of probabilities
   * @example
   * ```
   * // Dice Sum: 12  Freq:  1  P: 0.028
   * // Total Throws: 36, Total P: 1
   * ```
   */
  static printFrequencyAndProbability (f, p) {
    let totalThrows = 0
    let totalP = 0

    for (let i = 0; i < f.length; i++) {
      StdOut.println(`Dice Sum: ${pad(i, 2)}  Freq: ${pad(f[i], 2)}  P: ${this.toThreeDecimals(p[i])}`)
      totalThrows += f[i]
      totalP += p[i]
    }

    StdOut.println(`Total Throws: ${totalThrows}, Total P: ${this.toThreeDecimals(totalP)}`)
  }

  /**
   * Rounds a float number to 3 decimals
   * @param {number} n Float number
   */
  static toThreeDecimals (n) {
    // alternative:
    // return parseFloat(n.toFixed(3))
    return Math.round(n * 1000) / 1000
  }

  /**
   * Simulates the throw of a dice
   * by returning a number [1 - 6]
   */
  static throwDice () {
    return StdRandom.uniform(1, 6 + 1)
  }

  /**
   * Returns whether the simulated probability
   * matches the exact probability to
   * three decimal places.
   * @param {[]} Simulated Probability
   * @param {[]} Exact Probability
   * @returns {boolean} Whether the simulated matches the exact probability.
   */
  static isAMatch (simulatedP, exactP) {
    for (let i = 2; i <= SIDES * 2; i++) {
      if (this.toThreeDecimals(simulatedP[i]) !== this.toThreeDecimals(exactP[i])) {
        return false
      }
    }

    return true
  }

  /**
   * Runs a simulation of various
   * dice throws until the empirical
   * results match the exact results.
   * @param {[]} exactProbability The exact probability of dice throws.
   */
  static runSimulation (exactProbability) {
    const frequencies = newArrayOf(SIDES * 2 + 1, 0)
    let totalThrows = 0
    let probability = []

    do {
      const dice1 = this.throwDice()
      const dice2 = this.throwDice()

      totalThrows++
      frequencies[dice1 + dice2]++
      probability = this.computeProbability(frequencies, totalThrows)
    } while (!this.isAMatch(probability, exactProbability))

    return {
      frequencies,
      probability,
      totalThrows
    }
  }

  /**
   * Solution Exercise 1.1.35
   * @example <caption>Dice simulations</caption>
   * ```shell
   * $ node ex-1.1.35.js
   * Exact Results:
   * Dice Sum:  0  Freq:  0  P: 0
   * Dice Sum:  1  Freq:  0  P: 0
   * Dice Sum:  2  Freq:  1  P: 0.028
   * Dice Sum:  3  Freq:  2  P: 0.056
   * Dice Sum:  4  Freq:  3  P: 0.083
   * Dice Sum:  5  Freq:  4  P: 0.111
   * Dice Sum:  6  Freq:  5  P: 0.139
   * Dice Sum:  7  Freq:  6  P: 0.167
   * Dice Sum:  8  Freq:  5  P: 0.139
   * Dice Sum:  9  Freq:  4  P: 0.111
   * Dice Sum: 10  Freq:  3  P: 0.083
   * Dice Sum: 11  Freq:  2  P: 0.056
   * Dice Sum: 12  Freq:  1  P: 0.028
   * Total Throws: 36, Total P: 1
   *
   * Simulation Empirical Results:
   * Dice Sum:  0  Freq:  0  P: 0
   * Dice Sum:  1  Freq:  0  P: 0
   * Dice Sum:  2  Freq: 2791985  P: 0.028
   * Dice Sum:  3  Freq: 5581747  P: 0.056
   * Dice Sum:  4  Freq: 8385707  P: 0.083
   * Dice Sum:  5  Freq: 11171298  P: 0.111
   * Dice Sum:  6  Freq: 13975002  P: 0.139
   * Dice Sum:  7  Freq: 16762494  P: 0.167
   * Dice Sum:  8  Freq: 13967622  P: 0.139
   * Dice Sum:  9  Freq: 11175643  P: 0.111
   * Dice Sum: 10  Freq: 8379728  P: 0.083
   * Dice Sum: 11  Freq: 5586097  P: 0.056
   * Dice Sum: 12  Freq: 2794682  P: 0.028
   * Total Throws: 100572005, Total P: 1
   * ```
   */
  static solution () {
    const exactF = this.computeExactFrequencies()
    const exactP = this.computeExactProbability(exactF)

    StdOut.println('Exact Results:')
    this.printFrequencyAndProbability(exactF, exactP)

    const simulation = this.runSimulation(exactP)

    StdOut.println('\nSimulation Empirical Results:')
    this.printFrequencyAndProbability(simulation.frequencies, simulation.probability)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution()
