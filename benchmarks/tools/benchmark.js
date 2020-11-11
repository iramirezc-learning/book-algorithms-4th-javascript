const { performance } = require('perf_hooks')

/**
 * Returns a float number with only `3` decimals.
 * @param {number} n Float to parse
 * @returns {number} Float number with `3` decimals
 */
const fixed = n => parseFloat(n.toFixed(3))

/**
 * Benchmark
 * @classdesc Tool to run benchmarks between algorithms.
 */
class Benchmark {
  /**
   * Creates a new instance of a Benchmark
   * @param {*} props
   * @param {string} props.name The name of the benchmark.
   * @param {number} props.iterations The number of times a test should run.
   */
  constructor ({ name, iterations = 1 }) {
    this.name = name
    this.iterations = iterations
    this.inputData = []
    this.tests = []
    this.results = {}
  }

  /**
   * Set up the data for the tests.
   * @abstract
   * @throws SyntaxError This function should be implemented by the client.
   */
  setUp () {
    throw new SyntaxError('Must implement setUp function')
  }

  /**
   * Adds a new tests before running the benchmark.
   * Benchmark should have at least `1` test.
   * @param {*} name Name of the test
   * @param {*} fn Function to execute for the test.
   */
  addTest (name, fn) {
    this.tests.push({ name, fn })

    return this
  }

  /**
   * Runs every test the number of iterations.
   * Calculates the `total` and `avg` time for every test.
   * Saves the results in the `this.results` prop.
   */
  exec () {
    for (const test of this.tests) {
      let i = 0
      const output = []
      const start = performance.now()

      while (i < this.iterations) {
        output[i] = test.fn(...this.inputData[i])
        i++
      }

      const total = performance.now() - start

      const avg = fixed(total / this.iterations)

      this.results[test.name] = { total: fixed(total), avg, output }
    }

    return this
  }

  /**
   * Prints the results of the benchmark in the console.
   */
  summary () {
    console.log(`${this.name} - ${this.iterations} iterations`)
    console.table(this.results)
  }
}

module.exports = Benchmark
