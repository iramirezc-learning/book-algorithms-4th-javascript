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
  })
})
