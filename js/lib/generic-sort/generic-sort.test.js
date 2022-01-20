const GenericSort = require('./generic-sort')
const {
  arrays: { newArrayOf }
} = require('../../util')

describe('GenericSort', () => {
  beforeEach(() => {
    this.orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    this.unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
    this.allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
  })

  describe('.less()', () => {
    it('should return true if a is less than b', () => {
      const a = 1
      const b = 2

      expect(GenericSort.less(a, b)).toBe(true)
    })

    it('should return false if a is greater than b', () => {
      const a = 2
      const b = 1

      expect(GenericSort.less(a, b)).toBe(false)
    })

    it('should return false if a is equal to b', () => {
      const a = 1
      const b = 1

      expect(GenericSort.less(a, b)).toBe(false)
    })

    it('should just compare numbers', () => {
      expect(GenericSort.less(1, 10)).toBe(true)
      expect(GenericSort.less(1, 1)).toBe(false)
      expect(GenericSort.less(10, 1)).toBe(false)
    })
  })

  describe('.exchange()', () => {
    it('should interchange the values of the two given indexes in the array', () => {
      const array = [5, 6, 7]
      const expectedArray = [7, 6, 5]

      GenericSort.exchange(array, 0, 2)

      expect(array).toEqual(expectedArray)
    })
  })

  describe('.isSorted()', () => {
    it('should return true if an array is sorted', () => {
      expect(GenericSort.isSorted(this.orderedArray)).toBe(true)
      expect(GenericSort.isSorted(this.allEqualArray)).toBe(true)
    })

    it('should return false if the array is not sorted', () => {
      expect(GenericSort.isSorted(this.unorderedArray)).toBe(false)
      expect(GenericSort.isSorted(this.reversedArray)).toBe(false)
    })

    it('should return true for a sorted big array', () => {
      const n = A_MILLION
      const array = newArrayOf(n, (i) => i) // from 0 to 999999

      expect(array.length).toBe(A_MILLION)
      expect(GenericSort.isSorted(array)).toBeTrue()
    })

    it('should return false for a random big array', () => {
      const n = A_MILLION
      const array = newArrayOf(n, (i) => i) // from 0 to 999999
      array[array.length - 1] = 0 // change last number to be 0

      expect(array.length).toBe(A_MILLION)
      expect(GenericSort.isSorted(array)).toBeFalse()
    })
  })

  describe('.show()', () => {
    it('should print to the console', () => {
      spyOn(console, 'log')
      const array = [1, 2, 3, 4, 5]

      GenericSort.show(array)

      expect(console.log).toHaveBeenCalledTimes(1)
      expect(console.log).toHaveBeenCalledWith('1 2 3 4 5')
    })
  })

  describe('.sort()', () => {
    it('should throw an exception as is not implemented', () => {
      expect(() => {
        GenericSort.sort([])
      }).toThrowError('sort method not implemented.')
    })
  })
})
