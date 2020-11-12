const { StdOut, StdIn } = require('../../../../../src/libs')
const { pad } = require('../../../../../src/utils')

/**
 * Exercise 1.1.21
 */
class Exercise {
  /**
   * Solution Exercise 1.1.21
   * @example <caption>Reading from file</caption>
   * ```shell
   * $ node ex-1.1.21.js < algs4-data/custom/names.txt
   * java       10    10    1.000
   * c           8     4    2.000
   * haskell    10     2    5.000
   * rubi        7     3    2.333
   * python      9     5    1.800
   * node        3     2    1.500
   * ```
   */
  static solution () {
    StdIn.read()
      .on('line', line => {
        const lineSplit = line.split(/\s+/) // by at least 1 whitespace
        const name = lineSplit[0]
        const n1 = parseInt(lineSplit[1], 10)
        const n2 = parseInt(lineSplit[2], 10)
        const n3 = n1 / n2

        // NOTE: JAVA format "%-10s %5d %5d %-5s %3.3f\n" (whitespace may vary)
        StdOut.printf('%s %s %s %s\n', pad(name, -10), pad(n1, 2), pad(n2, 5), pad(n3.toFixed(3), 8))
      })
  }
}

// Exports
// ==============================
module.exports = Exercise

// Bash Execution
// ==============================
if (require.main === module) Exercise.solution()
