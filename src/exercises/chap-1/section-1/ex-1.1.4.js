const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.4
 */
class Exercise {
  /**
   * Solution Exercise 1.1.4
   * @example
   * ```shell
   * $ node ex-1.1.4.js
   * a) if (a > b) then c = 0; | SyntaxError: Unexpected identifier
   * b) if a > b { c = 0; } | SyntaxError: Unexpected identifier
   * c) if (a > b) c = 0; | 0
   * d) if (a > b) c = 0 else b = 0; | SyntaxError: Unexpected token else
   * ```
   * NOTE: Java also throws SyntaxError for a), b) and d).
   */
  static solution () {
    // values
    let a = 2 // eslint-disable-line
    let b = 1 // eslint-disable-line
    let c = 3 // eslint-disable-line

    // questions
    const qa = 'if (a > b) then c = 0;'
    const qb = 'if a > b { c = 0; }'
    const qc = 'if (a > b) c = 0;'
    const qd = 'if (a > b) c = 0 else b = 0;'

    // results
    let ra
    let rb
    let rc
    let rd

    try {
      ra = eval(qa) // eslint-disable-line
    } catch (err) {
      ra = String(err)
    }

    try {
      rb = eval(qb) // eslint-disable-line
    } catch (err) {
      rb = String(err)
    }

    try {
      rc = eval(qc); // eslint-disable-line
    } catch (err) {
      rc = String(err)
    }

    try {
      rd = eval(qd) // eslint-disable-line
    } catch (err) {
      rd = String(err)
    }

    StdOut.println(`a) ${qa} | ${ra}`)
    StdOut.println(`b) ${qb} | ${rb}`)
    StdOut.println(`c) ${qc} | ${rc}`)
    StdOut.println(`d) ${qd} | ${rd}`)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution()
