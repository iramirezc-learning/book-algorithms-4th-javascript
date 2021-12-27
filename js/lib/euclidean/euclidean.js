/**
 * Euclid's algorithm
 * @see p. 4
 */
class Euclidean {
  /**
   * Finds the Greatest Common Divisor of two positive integers.
   * @param {number} p First non-negative integer.
   * @param {number} q Second non-negative integer.
   * @returns {number} The greatest common divisor
   */
  static gcd(p, q) {
    if (q === 0) {
      return p
    }

    const r = p % q

    return Euclidean.gcd(q, r)
  }
}

module.exports = Euclidean
