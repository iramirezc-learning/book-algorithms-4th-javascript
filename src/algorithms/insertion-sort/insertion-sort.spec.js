const Insertion = require('./insertion-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')
const { defaultComparator: comparator } = require('../../common')

describe('Unit Tests: Insertion Sort Algorithm', () => {
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

      expect(Insertion.less(a, b, comparator)).toBe(true)
    })

    it('should return false if a is greater than b', () => {
      const a = 2
      const b = 1

      expect(Insertion.less(a, b, comparator)).toBe(false)
    })

    it('should return false if a is equal to b', () => {
      const a = 1
      const b = 1

      expect(Insertion.less(a, b, comparator)).toBe(false)
    })

    it('should have a defaultComparator function', () => {
      expect(Insertion.less(1, 10)).toBe(true)
      expect(Insertion.less(1, 1)).toBe(false)
      expect(Insertion.less(10, 1)).toBe(false)
    })
  })

  describe('static exchange method', () => {
    it('should interchange the values of the two given indexes in the array', () => {
      const array = [5, 6, 7]
      const expectedArray = [7, 6, 5]

      Insertion.exchange(array, 0, 2)

      expect(array).toEqual(expectedArray)
    })
  })

  describe('static isSorted method', () => {
    it('should return true if an array is sorted', () => {
      expect(Insertion.isSorted(this.orderedArray)).toBe(true)
      expect(Insertion.isSorted(this.allEqualArray)).toBe(true)
    })

    it('should return false if the array is not sorted', () => {
      expect(Insertion.isSorted(this.unorderedArray)).toBe(false)
      expect(Insertion.isSorted(this.reversedArray)).toBe(false)
    })

    it('should accept a comparator function', () => {
      const orderedArray = ['A', 'B', 'C']
      const unorderedArray = ['Z', 'X', 'Y']

      expect(Insertion.isSorted(orderedArray, comparator)).toBe(true)
      expect(Insertion.isSorted(unorderedArray, comparator)).toBe(false)
    })

    it('should return true for a sorted big array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, i => i) // from 0 to 999999

      expect(Insertion.isSorted(array)).toBeTrue()
    })

    it('should return false for a random big array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, i => i) // from 0 to 999999
      array[array.length - 1] = 0 // change last number to be 0

      expect(Insertion.isSorted(array)).toBeFalse()
    })
  })

  describe('static show method', () => {
    it('should be a function', () => {
      // I could test the call to StdOut, but I don't want to.
      expect(Insertion.show).toBeInstanceOf(Function)
    })
  })

  describe('static sort method', () => {
    it('should sort a unordered array', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Insertion.sort(this.unorderedArray)

      expect(this.unorderedArray).toEqual(expectedArray)
    })

    it('should sort an ordered array', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Insertion.sort(this.orderedArray)

      expect(this.orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Insertion.sort(this.reversedArray)

      expect(this.reversedArray).toEqual(expectedArray)
    })

    it('should sort an array with all the values to be equal', () => {
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Insertion.sort(this.allEqualArray)

      expect(this.allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      // considering that Insertion Sort is slow...
      const n = 1000 // a thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Insertion.sort(array)

      expect(Insertion.isSorted(array)).toBeTrue()
    })
  })
})
