/**
 * StopWatch
 * @see p.175
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Stopwatch.java.html}
 */
class StopWatch {
  constructor() {
    /**
     * The timestamp when the instance was created.
     * @type {number}
     */
    this.start = null

    // static final start
    Object.defineProperty(this, 'start', {
      configurable: false,
      writable: false,
      enumerable: false,
      value: Date.now()
    })

    Object.seal(this)
  }

  /**
   * Returns the total elapsed time in seconds
   * upon StopWatch instantiation.
   * @returns {number}
   */
  elapsedTime() {
    const now = Date.now()
    return (now - this.start) / 1000
  }
}

module.exports = StopWatch
