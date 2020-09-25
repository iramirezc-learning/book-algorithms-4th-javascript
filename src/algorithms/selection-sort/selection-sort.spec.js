const Selection = require('./selection-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Selection Sort Algorithm', () => {
  beforeEach(() => {
    this.orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    this.unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
    this.allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
  })

  describe('static sort method', () => {
    it('should sort an ordered array', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Selection.sort(this.orderedArray)

      expect(this.orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Selection.sort(this.reversedArray)

      expect(this.reversedArray).toEqual(expectedArray)
    })

    it('should sort a unordered array', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Selection.sort(this.unorderedArray)

      expect(this.unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all the values to be equal', () => {
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Selection.sort(this.allEqualArray)

      expect(this.allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      // considering that Selection Sort is slow...
      const n = 1000 // a thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Selection.sort(array)

      expect(Selection.isSorted(array)).toBeTrue()
    })

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
