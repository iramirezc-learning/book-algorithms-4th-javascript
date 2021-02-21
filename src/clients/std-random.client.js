const { StdRandom, StdOut } = require("../libs");

/**
 * StdRandomClient
 * @classdesc Test Client for StdRandom library.
 * @see p. 32
 */
class StdRandomClient {
  /**
   * Prints results of various StdRandom methods
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
  static main() {
    StdOut.println("uniform method");
    StdOut.println("  real between [0, 1):", StdRandom.uniform());
    StdOut.println("  integer between [0, 1):", StdRandom.uniform(1));
    StdOut.println("  integer between [0, 5):", StdRandom.uniform(5));
    StdOut.println("  integer between [5, 10):", StdRandom.uniform(5, 10));
    StdOut.println("  real between [5.5, 9.9):", StdRandom.uniform(5.5, 9.9));

    StdOut.println("bernoulli method");
    StdOut.println("  probability of 0.5:", StdRandom.bernoulli());
    StdOut.println("  probability of 0.9:", StdRandom.bernoulli(0.9));
    StdOut.println("  probability of 0.1:", StdRandom.bernoulli(0.1));

    StdOut.println("discrete method");
    StdOut.println(
      "  discrete distribution:",
      StdRandom.discrete([0.1, 0.3, 0.0, 0.4, 0.1, 0.05, 0.05])
    );

    StdOut.println("shuffle method");

    const integers = [1, 2, 3, 4, 5];
    StdRandom.shuffle(integers);
    StdOut.println("  shuffle array of integers [1, 2, 3, 4, 5] ->", integers);

    const chars = ["a", "b", "c", "d", "e"];
    StdRandom.shuffle(chars);
    StdOut.println(
      "  shuffle array of chars ['a', 'b', 'c', 'd', 'e'] ->",
      chars
    );
  }
}

// Execution
// ==============================
if (require.main === module) StdRandomClient.main();
