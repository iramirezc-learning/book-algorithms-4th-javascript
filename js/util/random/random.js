/**
 * Returns a random integer number with inclusive `min` and exclusive `max`  [min, max - 1).
 * @param {number} min Min inclusive.
 * @param {number} max Max exclusive.
 */
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * Checks if a number is integer.
 * @param {number} n Number to be tested.
 */
function isInteger(n) {
  return Number.isInteger(n)
}

/**
 * Random. JavaScript implementation of StdRandom.
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/StdRandom.java.html}
 */
class Random {
  /**
   * @todo Somehow I need to make this function to return real number values when [0.0, 1.0] are provided.
   * @constructor
   * @desc Returns a random real number uniformly in [0, 1).
   * @returns {number} A random real number uniformly in [0, 1).
   */ /**
   * @constructor
   * @desc Returns a random integer uniformly in [0, n).
   * @param {number} n Number of possible integers.
   * @returns {number} A random integer uniformly between 0 (inclusive) and `n` (exclusive).
   */ /**
   * @constructor
   * @desc Returns a random integer uniformly in [lo, hi).
   * @param {number} lo Minimum number.
   * @param {number} hi Maximum number.
   * @returns {number} A random integer uniformly in [lo, hi).
   */ /**
   * @constructor
   * @desc Returns a random real number uniformly in [lo, hi).
   * @param {number} lo Minimum number.
   * @param {number} hi Maximum number.
   * @returns {number} A random real number uniformly in [lo, hi).
   */
  static uniform(lo, hi) {
    if (typeof lo === 'number' && typeof hi === 'number') {
      if (isInteger(lo) && isInteger(hi)) {
        return getRandomInt(lo, hi)
      } else {
        return Math.random() * (hi - lo) + lo
      }
    } else if (isInteger(lo)) {
      return getRandomInt(0, lo)
    }

    /* NOTE: the book uses a signature like `uniform(0.0, 1.0)`
     * to generate real or double numbers from [0, 1),
     * in case you want create the same behavior, then do
     * `uniform()` and this will make the function to get to this
     * returning value. In case you want to generate values from [0.0, 5.0)
     * then I would recommend to do `uniform(0, 4.999)`.
     */
    return Math.random()
  }

  /**
   * Returns a random boolean from a Bernoulli distribution with success probability 1/2.
   * @param {number} [p=0.5] The probability of returning `true`. Defaults to `0.5`.
   * @returns {boolean} `true` or `false` with probability of `p`.
   */
  static bernoulli(p = 0.5) {
    return Random.uniform() < p
  }

  /**
   * @todo implementation.
   */
  static gaussian() {
    throw new SyntaxError('method gaussian not implemented')
  }

  /**
   * Returns a random integer from the specified discrete distribution.
   * @param {Array<number>} a Array of non-negative numbers that sum 1.
   * @returns {number} A random integer from a discrete distribution: `i` with probability proportional to `frequencies[i]`.
   */
  static discrete(a) {
    const r = Random.uniform()

    let sum = 0

    for (let i = 0; i < a.length; i++) {
      sum += a[i]
      if (sum >= r) return i
    }

    return -1
  }

  /**
   * Rearranges the elements of the specified array in uniformly random order.
   * @param {Array<number>} a The array to shuffle.
   */
  static shuffle(a) {
    const n = a.length

    for (let i = 0; i < n; i++) {
      // exchange a[i] with random element in a[i..n-1]
      const r = i + Random.uniform(n - i)
      const temp = a[i]

      a[i] = a[r]
      a[r] = temp
    }
  }
}

module.exports = Random
