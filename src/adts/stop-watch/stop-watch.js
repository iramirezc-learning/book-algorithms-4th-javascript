/**
 * StopWatch
 * @classdesc ADT StopWatch implementation.
 * @see p. 175
 */
class StopWatch {
  constructor () {
    // static final long _start
    Object.defineProperty(this, '_start', {
      value: Date.now()
    })

    Object.seal(this)
  }

  /**
   * Returns total elapsed time in seconds
   * upon StopWatch instantiation.
   */
  elapsedTime () {
    const now = Date.now()
    return (now - this._start) / 1000
  }
}

module.exports = StopWatch
