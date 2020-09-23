const Selection = require('./selection-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

const comparator = (a, b) => {
  if (a < b) return -1
  else if (a > b) return 1
  return 0
}

describe('Unit Tests: Selection Sort Algorithm', () => {
  beforeEach(() => {
    this.orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    this.unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
    this.allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
  })

  describe('static less method', () => {
    it('should return true if a is less than b', () => {
      const a = 1
      const b = 2

      expect(Selection.less(a, b, comparator)).toBe(true)
    })

    it('should return false if a is greater than b', () => {
      const a = 2
      const b = 1

      expect(Selection.less(a, b, comparator)).toBe(false)
    })

    it('should return false if a is equal to b', () => {
      const a = 1
      const b = 1

      expect(Selection.less(a, b, comparator)).toBe(false)
    })

    it('should have a defaultComparator function', () => {
      expect(Selection.less(1, 10)).toBe(true)
      expect(Selection.less(1, 1)).toBe(false)
      expect(Selection.less(10, 1)).toBe(false)
    })
  })

  describe('static exchange method', () => {
    it('should interchange the values of the two given indexes in the array', () => {
      const array = [5, 6, 7]
      const expectedArray = [7, 6, 5]

      Selection.exchange(array, 0, 2)

      expect(array).toEqual(expectedArray)
    })
  })

  describe('static isSorted method', () => {
    it('should return true if an array is sorted', () => {
      expect(Selection.isSorted(this.orderedArray)).toBe(true)
      expect(Selection.isSorted(this.allEqualArray)).toBe(true)
    })

    it('should return false if the array is not sorted', () => {
      expect(Selection.isSorted(this.unorderedArray)).toBe(false)
      expect(Selection.isSorted(this.reversedArray)).toBe(false)
    })

    it('should accept a comparator function', () => {
      const orderedArray = ['A', 'B', 'C']
      const unorderedArray = ['Z', 'X', 'Y']

      expect(Selection.isSorted(orderedArray, comparator)).toBe(true)
      expect(Selection.isSorted(unorderedArray, comparator)).toBe(false)
    })

    it('should return true for a sorted big array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, i => i) // from 0 to 999999

      expect(Selection.isSorted(array)).toBeTrue()
    })

    it('should return false for a random big array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, i => i) // from 0 to 999999
      array[array.length - 1] = 0 // change last number to be 0

      expect(Selection.isSorted(array)).toBeFalse()
    })
  })

  describe('static show method', () => {
    it('should be a function', () => {
      // I could test the call to StdOut, but I don't want to.
      expect(Selection.show).toBeInstanceOf(Function)
    })
  })

  describe('static sort method', () => {
    it('should sort a unordered array', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Selection.sort(this.unorderedArray)

      expect(this.unorderedArray).toEqual(expectedArray)
    })

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
