const {
  arrayToString,
  isMatrix,
  isVector,
  newArrayOf,
  sortNumbersByAscendingOrder
} = require('./arrays')

describe('Utils/Arrays', () => {
  describe('.arrayToString()', () => {
    it('should return an array to string', () => {
      const expected = '[1,2,3,4,5]'

      const str = arrayToString([1, 2, 3, 4, 5])

      expect(str).toBe(expected)
    })

    it('should return an array of arrays to string', () => {
      const expected = '[[1,2,3],[4,5,6],[7,8,9]]'
      const a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]

      const str = arrayToString(a)

      expect(str).toBe(expected)
    })
  })

  describe('.isMatrix()', () => {
    it('should return true for array of arrays', () => {
      const m = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]

      expect(isMatrix(m)).toBeTrue()
    })

    it('should return false for an array of values', () => {
      const a = [1, 2, 3, 4, 5]

      expect(isMatrix(a)).toBeFalse()
    })

    it('should return false for an empty array', () => {
      expect(isMatrix([])).toBeFalse()
    })

    it('should return false for an array with an empty array', () => {
      expect(isMatrix([[]])).toBeFalse()
    })
  })

  describe('.isVector()', () => {
    it('should return true for an array of values', () => {
      const a = [1, 2, 3, 4, 5]

      expect(isVector(a)).toBeTrue()
    })

    it('should return false for array of arrays', () => {
      const m = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]

      expect(isVector(m)).toBeFalse()
    })

    it('should return false for an empty array', () => {
      expect(isMatrix([])).toBeFalse()
    })
  })

  describe('.newArrayOf()', () => {
    it('should return an array of 10 items with a value of 0', () => {
      const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      const a = newArrayOf(10, 0)

      expect(a).toEqual(expected)
    })

    it('should return an array of 5 items with a value of NULL', () => {
      const expected = [null, null, null, null, null]

      const a = newArrayOf(5, null)

      expect(a).toEqual(expected)
    })

    it('should return an array of n items with computed values', () => {
      const expected = [2, 4, 6, 8, 10]

      const a = newArrayOf(5, (n) => (n + 1) * 2)

      expect(a).toEqual(expected)
    })
  })

  describe('sortNumbersByAscendingOrder callback', () => {
    it('should sort the numbers in an array in ascending order', () => {
      const a = [1, 10, 11, 100, 2, 20, 22, 200, 3, 4, 5, -1, -2, -3]
      const expected = [-3, -2, -1, 1, 2, 3, 4, 5, 10, 11, 20, 22, 100, 200]

      a.sort(sortNumbersByAscendingOrder)

      expect(a).toEqual(expected)
    })
  })
})
