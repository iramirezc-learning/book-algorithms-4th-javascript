const GenericSort = require('./generic-sort')
const { newArrayOf } = require('../../utils')
const { defaultComparator: comparator } = require('../../common')

describe('Unit Tests: GenericSort Abstract Class', () => {
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

      expect(GenericSort.less(a, b, comparator)).toBe(true)
    })

    it('should return false if a is greater than b', () => {
      const a = 2
      const b = 1

      expect(GenericSort.less(a, b, comparator)).toBe(false)
    })

    it('should return false if a is equal to b', () => {
      const a = 1
      const b = 1

      expect(GenericSort.less(a, b, comparator)).toBe(false)
    })

    it('should have a defaultComparator function', () => {
      expect(GenericSort.less(1, 10)).toBe(true)
      expect(GenericSort.less(1, 1)).toBe(false)
      expect(GenericSort.less(10, 1)).toBe(false)
    })
  })

  describe('static exchange method', () => {
    it('should interchange the values of the two given indexes in the array', () => {
      const array = [5, 6, 7]
      const expectedArray = [7, 6, 5]

      GenericSort.exchange(array, 0, 2)

      expect(array).toEqual(expectedArray)
    })
  })

  describe('static isSorted method', () => {
    it('should return true if an array is sorted', () => {
      expect(GenericSort.isSorted(this.orderedArray)).toBe(true)
      expect(GenericSort.isSorted(this.allEqualArray)).toBe(true)
    })

    it('should return false if the array is not sorted', () => {
      expect(GenericSort.isSorted(this.unorderedArray)).toBe(false)
      expect(GenericSort.isSorted(this.reversedArray)).toBe(false)
    })

    it('should accept a comparator function', () => {
      const orderedArray = ['A', 'B', 'C']
      const unorderedArray = ['Z', 'X', 'Y']

      expect(GenericSort.isSorted(orderedArray, comparator)).toBe(true)
      expect(GenericSort.isSorted(unorderedArray, comparator)).toBe(false)
    })

    it('should return true for a sorted big array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, (i) => i) // from 0 to 999999

      expect(GenericSort.isSorted(array)).toBeTrue()
    })

    it('should return false for a random big array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, (i) => i) // from 0 to 999999
      array[array.length - 1] = 0 // change last number to be 0

      expect(GenericSort.isSorted(array)).toBeFalse()
    })
  })

  describe('static show method', () => {
    it('should be a function', () => {
      // I could test the call to StdOut, but I don't want to.
      expect(GenericSort.show).toBeInstanceOf(Function)
    })
  })

  describe('static sort method', () => {
    it('should throw because is not implemented', () => {
      expect(() => {
        GenericSort.sort()
      }).toThrowError('sort method not implemented')
    })
  })
})
