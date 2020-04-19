const { StdRandom, StdOut } = require('../../libs')

/**
 * StdRandomClient
 * @desc Test Client for StdRandom library.
 * @see p. 32
 */
class StdRandomClient {
  /**
   * main
   * @desc Prints results of StdRandom methods
   * @example
   * ```sh
   * $ node std-random.client.js
   * uniform method
   *   real between [0, 1): 0.7183014458813031
   *   integer between [0, 1): 0
   *   integer between [0, 5): 4
   *   integer between [5, 10): 9
   *   real between [5.5, 9.9): 8.276858437792605
   *   ...
   * ```
   */
  static main () {
    StdOut.printf('uniform method')
    StdOut.printf('  real between [0, 1):', StdRandom.uniform())
    StdOut.printf('  integer between [0, 1):', StdRandom.uniform(1))
    StdOut.printf('  integer between [0, 5):', StdRandom.uniform(5))
    StdOut.printf('  integer between [5, 10):', StdRandom.uniform(5, 10))
    StdOut.printf('  real between [5.5, 9.9):', StdRandom.uniform(5.5, 9.9))

    StdOut.printf('bernoulli method')
    StdOut.printf('  probability of 0.5:', StdRandom.bernoulli())
    StdOut.printf('  probability of 0.9:', StdRandom.bernoulli(0.9))
    StdOut.printf('  probability of 0.1:', StdRandom.bernoulli(0.1))

    StdOut.printf('discrete method')
    StdOut.printf('  discrete distribution:', StdRandom.discrete([0.1, 0.3, 0.0, 0.4, 0.1, 0.05, 0.05]))

    StdOut.printf('shuffle method')

    const integers = [1, 2, 3, 4, 5]
    StdRandom.shuffle(integers)
    StdOut.printf('  shuffle array of integers [1, 2, 3, 4, 5] ->', integers)

    const chars = ['a', 'b', 'c', 'd', 'e']
    StdRandom.shuffle(chars)
    StdOut.printf("  shuffle array of chars ['a', 'b', 'c', 'd', 'e'] ->", chars)
  }
}

// Execution
// ==============================
StdRandomClient.main()
