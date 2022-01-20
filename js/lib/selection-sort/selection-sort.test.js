const Selection = require('./selection-sort')
const {
  arrays: { newArrayOf },
  Random
} = require('../../util')

describe('SelectionSort', () => {
  describe('.sort()', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Selection.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Selection.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Selection.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all the values to be equal', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Selection.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      // considering that Selection Sort is slow...
      const n = A_THOUSAND
      // @ts-ignore
      const array = newArrayOf(n, () => Random.uniform(n))

      Selection.sort(array)

      expect(Selection.isSorted(array)).toBeTrue()
    })

    describe('implementation details', () => {
      it('should call `exchange` n times', () => {
        spyOn(Selection, 'exchange').and.callThrough()
        const array = [9, 8, 6, 5, 7]
        const expectedCallsArgs = [
          [array, 0, 3], // 9 <-> 5 = [5, 8, 6, 9, 7]
          [array, 1, 2], // 8 <-> 6 = [5, 6, 8, 9, 7]
          [array, 2, 4], // 8 <-> 7 = [5, 6, 7, 9, 8]
          [array, 3, 4], // 9 <-> 8 = [5, 6, 7, 8, 9]
          [array, 4, 4] //  9 <-> 9 = [5, 6, 7, 8, 9]
        ]

        Selection.sort(array)

        // @ts-ignore
        expect(Selection.exchange.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should mutate the array', () => {
        const mutations = []
        const originalImplementation = Selection.exchange.bind(Selection)
        spyOn(Selection, 'exchange').and.callFake((array, i, j) => {
          originalImplementation(array, i, j)
          const arrayCopy = array.slice(0)
          mutations.push(arrayCopy)
        })
        const array = [9, 8, 6, 5, 7]
        const expectedMutations = [
          [5, 8, 6, 9, 7],
          [5, 6, 8, 9, 7],
          [5, 6, 7, 9, 8],
          [5, 6, 7, 8, 9],
          [5, 6, 7, 8, 9]
        ]

        Selection.sort(array)

        expect(mutations).toEqual(expectedMutations)
      })
    })
  })
})
