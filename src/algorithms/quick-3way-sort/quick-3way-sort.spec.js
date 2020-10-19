const Quick3way = require('./quick-3way-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Quick3way Sort Algorithm', () => {
  describe('static sort method', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Quick3way.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Quick3way.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Quick3way.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all equal values', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Quick3way.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      const n = 10000 // ten thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Quick3way.sort(array)

      expect(Quick3way.isSorted(array)).toBeTrue()
    })

    it('should sort a medium random array', () => {
      const n = 100000 // a hundred thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Quick3way.sort(array)

      expect(Quick3way.isSorted(array)).toBeTrue()
    })

    it('should sort a large random array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Quick3way.sort(array)

      expect(Quick3way.isSorted(array)).toBeTrue()
    })

    describe('implementation details', () => {
      beforeAll(() => {
        // do not shuffle the array
        spyOn(Quick3way, 'sort').and.callFake((array, comparator) => {
          Quick3way._sort(array, 0, array.length - 1, comparator)
        })
      })

      it('should call private static `_sort` method x times', () => {
        spyOn(Quick3way, '_sort').and.callThrough()
        const a = [2, 3, 1, 3, 1, 2] // duplicated keys on purpose
        const comparator = (a, b) => a - b
        /**
         * | #desc    | a[0, 1, 2, 3, 4, 5] | lo | hi | hi <= lo | v = a[lo] | lt | i | gt | i <= gt | a[i].compareTo(v)  | then                          |
         * |----------|:-------------------:|:--:|:--:|:--------:|:---------:|:--:|:-:|:--:|:-------:|--------------------|-------------------------------|
         * | call 0   |  [2, 3, 1, 3, 1, 2] |  0 |  5 |     F    |     2     |  0 | 1 |  5 |    T    | 3 < 2 ? is greater | exch a[1] <-> a[5]; gt--      |
         * |          |  [2, 2, 1, 3, 1, 3] |  0 |  5 |     F    |     2     |  0 | 1 |  4 |    T    | 2 < 2 ? is equal   | i++                           |
         * |          |  [2, 2, 1, 3, 1, 3] |  0 |  5 |     F    |     2     |  0 | 2 |  4 |    T    | 1 < 2 ? is less    | exch a[0] <-> a[2]; lt++; i++ |
         * |          |  [1, 2, 2, 3, 1, 3] |  0 |  5 |     F    |     2     |  1 | 3 |  4 |    T    | 3 < 2 ? is greater | exch a[3] <-> a[4]; gt--      |
         * |          |  [1, 2, 2, 1, 3, 3] |  0 |  5 |     F    |     2     |  1 | 3 |  3 |    T    | 1 < 2 ? is less    | exch a[1] <-> a[3]; lt++; i++ |
         * |          |  [1, 1, 2, 2, 3, 3] |  0 |  5 |     F    |     2     |  2 | 4 |  3 |    F    |                    | break while loop              |
         * | 0 call 1 |  [1, 1, 2, 2, 3, 3] |  0 |  1 |     F    |     1     |  0 | 1 |  1 |    T    | 1 < 1 ? is equal   | i++                           |
         * |          |  [1, 1, 2, 2, 3, 3] |  0 |  1 |     F    |     1     |  0 | 2 |  1 |    F    |                    | break while loop              |
         * | 1 call 2 |  [1, 1, 2, 2, 3, 3] |  0 | -1 |     T    |           |    |   |    |         |                    | end recursion 2               |
         * | 1 call 3 |  [1, 1, 2, 2, 3, 3] |  2 |  1 |     T    |           |    |   |    |         |                    | end recursion 3 and 1         |
         * | 0 call 4 |  [1, 1, 2, 2, 3, 3] |  4 |  5 |     F    |     3     |  4 | 5 |  5 |    T    | 3 < 3 ? is equal   | i++                           |
         * |          |  [1, 1, 2, 2, 3, 3] |  4 |  5 |     F    |     3     |  4 | 6 |  5 |    F    |                    | break while loop              |
         * | 4 call 5 |  [1, 1, 2, 2, 3, 3] |  4 |  3 |     T    |           |    |   |    |         |                    | end recursion 5               |
         * | 4 call 6 |  [1, 1, 2, 2, 3, 3] |  6 |  5 |     T    |           |    |   |    |         |                    | end recursion 5 and 4         |
         */
        const expectedCallsArgs = [
          [a, 0, 5, comparator],
          [a, 0, 1, comparator],
          [a, 0, -1, comparator],
          [a, 2, 1, comparator],
          [a, 4, 5, comparator],
          [a, 4, 3, comparator],
          [a, 6, 5, comparator]
        ]

        Quick3way.sort(a, comparator)

        expect(Quick3way._sort.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should mutate the array', () => {
        const mutations = []
        const originalImplementation = Quick3way.exchange.bind(Quick3way)
        spyOn(Quick3way, 'exchange').and.callFake((array, i, j) => {
          originalImplementation(array, i, j)
          mutations.push([...array])
        })
        const a = [2, 3, 1, 3, 1, 2] // duplicated keys on purpose
        // see previous test
        const expectedMutations = [
          [2, 2, 1, 3, 1, 3],
          [1, 2, 2, 3, 1, 3],
          [1, 2, 2, 1, 3, 3],
          [1, 1, 2, 2, 3, 3]
        ]

        Quick3way.sort(a)

        expect(mutations).toEqual(expectedMutations)
      })
    })
  })
})
