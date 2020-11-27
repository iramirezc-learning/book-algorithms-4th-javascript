/** @module Exercises */

const { StdOut } = require('../../src/libs')

/**
 * Exercise C1S1E1
 * @memberof module:Exercises
 */
class C1S1E1 {
  /**
   * Exercise solution.
   * @note Keep the `solution` method as the first one
   * so that it is easier to look at the examples.
   * Feel free to remove this note.
   * @example <caption>Multiplying 0.5 * 0.9</caption>
   * {@lang bash}
   * $ node ex-x.x.x.js 0.5 0.9
   * x: 0.5
   * y: 0.9
   * x * y = 0.45
   * @param {...string} args - Params: `[x, y]`
   * * @type {number} `args[0]` - Number `x`.
   * * @type {number} `args[1]` - Number `y`.
   */
  static solution (args) {
    const x = parseFloat(args[0])
    const y = parseFloat(args[1])

    StdOut.println('x:', x)
    StdOut.println('y:', y)
    StdOut.println('x * y =', x * y)
  }

  /**
   * Other methods go after `solution` method.
   */
  static otherMethod () {
    // code goes here
  }
}

// Exports
// ==============================
module.exports = C1S1E1

// Bash Execution
// ==============================
if (require.main === module) C1S1E1.solution(process.argv.slice(2))
