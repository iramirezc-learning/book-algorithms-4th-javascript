/**
 * Returns a random integer number
 * with `min` inclusive and `max` exclusive [min, max - 1)
 * @param {number} min
 * @param {number} max
 */
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

class StdRandom {
  /**
   * Uniform
   *
   * @constructor
   * @desc Returns a random real number uniformly in [0, 1).
   * @returns {number} A random real number uniformly in [0, 1).
   *//**
  * Uniform
  *
  * @constructor
  * @desc Returns a random integer uniformly in [0, n).
  * @param {number} n Number of possible integers.
  * @returns {number} A random integer uniformly between 0 (inclusive) and `n` (exclusive).
  *//**
  * Uniform
  *
  * @constructor
  * @desc Returns a random integer uniformly in [lo, hi).
  * @param {number} lo Minimum number.
  * @param {number} hi Maximum number.
  * @returns {number} A random integer uniformly in [lo, hi).
  *//**
  * Uniform
  *
  * @constructor
  * @desc Returns a random real number uniformly in [lo, hi).
  * @param {number} lo Minimum number.
  * @param {number} hi Maximum number.
  * @returns {number} A random real number uniformly in [lo, hi).
  */
  static uniform (lo, hi) {
    if (typeof lo === 'number' && typeof hi === 'number') {
      if (Number.isInteger(lo) && Number.isInteger(hi)) {
        return getRandomInt(lo, hi)
      } else {
        return Math.random() * (hi - lo) + lo
      }
    } else if (Number.isInteger(lo)) {
      return getRandomInt(0, lo)
    }

    return Math.random()
  }

  /**
   * Bernoulli
   * @desc Returns a random boolean from a Bernoulli
   * distribution with success probability 1/2.
   * @param {number} [p=0.5] The probability of returning `true`.
   * Defaults to `0.5`.
   * @returns {boolean} `true` or `false` with probability of 1/2
   */
  static bernoulli (p = 0.5) {
    return StdRandom.uniform() < p
  }

  /**
   * @todo implementation
   */
  static gaussian () {
    throw new SyntaxError('method gaussian not implemented')
  }

  /**
   * @todo implementation
   */
  static discrete () {
    throw new SyntaxError('method discrete not implemented')
  }

  /**
   * @todo implementation
   */
  static shuffle () {
    throw new SyntaxError('method shuffle not implemented')
  }
}

module.exports = StdRandom
