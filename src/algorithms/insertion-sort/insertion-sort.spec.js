const Insertion = require('./insertion-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Insertion Sort Algorithm', () => {
  describe('static sort method', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Insertion.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Insertion.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Insertion.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all equal values', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Insertion.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      // considering that Insertion Sort is slow...
      const n = 1000 // a thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Insertion.sort(array)

      expect(Insertion.isSorted(array)).toBeTrue()
    })

    it('should call `exchange` n times', () => {
      spyOn(Insertion, 'exchange').and.callThrough()
      const array = [9, 8, 6, 5, 7]
      const expectedCallsArgs = [
        [array, 1, 0], // | i = 1; j = 1 | 8 <-> 9 = [8, 9, 6, 5, 7]
        [array, 2, 1], // | i = 2; j = 2 | 6 <-> 9 = [8, 6, 9, 5, 7]
        [array, 1, 0], // | i = 2; j = 1 | 6 <-> 8 = [6, 8, 9, 5, 7]
        [array, 3, 2], // | i = 3; j = 3 | 5 <-> 9 = [6, 8, 5, 9, 7]
        [array, 2, 1], // | i = 3; j = 2 | 5 <-> 8 = [6, 5, 8, 9, 7]
        [array, 1, 0], // | i = 3; j = 1 | 5 <-> 6 = [5, 6, 8, 9, 7]
        [array, 4, 3], // | i = 4; j = 4 | 7 <-> 9 = [5, 6, 8, 7, 9]
        [array, 3, 2] //  | i = 4; j = 3 | 7 <-> 8 = [5, 6, 7, 8, 9]
      ]

      Insertion.sort(array)

      expect(Insertion.exchange.calls.allArgs()).toEqual(expectedCallsArgs)
    })

    it('should mutate the array', () => {
      const mutations = []
      const originalImplementation = Insertion.exchange.bind(Insertion)
      spyOn(Insertion, 'exchange').and.callFake((array, i, j) => {
        originalImplementation(array, i, j)
        const arrayCopy = array.slice(0)
        mutations.push(arrayCopy)
      })
      const array = [9, 8, 6, 5, 7]
      const expectedMutations = [
        [8, 9, 6, 5, 7],
        [8, 6, 9, 5, 7],
        [6, 8, 9, 5, 7],
        [6, 8, 5, 9, 7],
        [6, 5, 8, 9, 7],
        [5, 6, 8, 9, 7],
        [5, 6, 8, 7, 9],
        [5, 6, 7, 8, 9]
      ]

      Insertion.sort(array)

      expect(mutations).toEqual(expectedMutations)
    })
  })
})
