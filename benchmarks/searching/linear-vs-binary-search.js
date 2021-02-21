const Benchmark = require('../tools/benchmark')
const { getSortedArray, getRandomInt } = require('../tools/data-generators')
const { BinarySearch, LinearSearch } = require('../../src/algorithms')

class SearchingBenchmark extends Benchmark {
  setUp({ arraySize }) {
    const a = getSortedArray(arraySize)

    for (let i = 0; i < this.iterations; i++) {
      const k = getRandomInt(arraySize)
      this.inputData[i] = [a, k]
    }

    return this
  }
}

// Execution
// $ node linear-vs-binary-search.js
// ==============================
new SearchingBenchmark({
  name: 'Searching Algorithms Benchmark',
  iterations: 1000
})
  .setUp({ arraySize: 10 * 1000000 })
  .addTest('LinearSearch', LinearSearch.indexOf)
  .addTest('BinarySearch', BinarySearch.indexOf)
  .addTest('BinarySearch (Recursive)', BinarySearch.recursiveIndexOf)
  .exec()
  .summary()
