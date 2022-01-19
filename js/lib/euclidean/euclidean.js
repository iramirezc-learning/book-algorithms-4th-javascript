/**
 * Euclid's algorithm.
 * @see p.4
 * @hideconstructor
 */
class Euclidean {
  /**
   * Finds the greatest common divisor of two positive integers.
   * @param {number} p First non-negative integer.
   * @param {number} q Second non-negative integer.
   * @returns {number} The greatest common divisor.
   *
   * @example
   * Euclidean.gcd(54, 24)
   * // will return
   * 6
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
