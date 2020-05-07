const utils = require('./index')

describe('Utils - Unit Tests', () => {
  describe('newArrayOf', () => {
    it('should return an array of 10 items with a value of 0', () => {
      const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

      const a = utils.newArrayOf(10, 0)

      expect(a).toEqual(expected)
    })

    it('should return an array of 5 items with a value of NULL', () => {
      const expected = [null, null, null, null, null]

      const a = utils.newArrayOf(5, null)

      expect(a).toEqual(expected)
    })

    it('should return an array of n items with computed values', () => {
      const expected = [2, 4, 6, 8, 10]

      const a = utils.newArrayOf(5, n => (n + 1) * 2)

      expect(a).toEqual(expected)
    })
  })

  describe('pad', () => {
    it('should add 5 white spaces to the left', () => {
      const expected = '     1.0'

      // length of string is 3
      const str = utils.pad('1.0', 8)

      expect(str).toBe(expected)
    })

    it('should add 5 white spaces to the right', () => {
      const expected = '1.0     '

      // length of string is 3
      const str = utils.pad('1.0', -8)

      expect(str).toBe(expected)
    })
  })

  describe('arrayToString', () => {
    it('should return an array to string', () => {
      const expected = '[1,2,3,4,5]'

      const str = utils.arrayToString([1, 2, 3, 4, 5])

      expect(str).toBe(expected)
    })

    it('should return an array of arrays to string', () => {
      const expected = '[[1,2,3],[4,5,6],[7,8,9]]'
      const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

      const str = utils.arrayToString(a)

      expect(str).toBe(expected)
    })
  })

  describe('isMatrix', () => {
    it('should return true for array of arrays', () => {
      const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

      expect(utils.isMatrix(m)).toBeTrue()
    })

    it('should return false for an array of values', () => {
      const a = [1, 2, 3, 4, 5]

      expect(utils.isMatrix(a)).toBeFalse()
    })

    it('should return false for an empty array', () => {
      expect(utils.isMatrix([])).toBeFalse()
    })

    it('should return false for an array with an empty array', () => {
      expect(utils.isMatrix([[]])).toBeFalse()
    })
  })

  describe('isVector', () => {
    it('should return true for an array of values', () => {
      const a = [1, 2, 3, 4, 5]

      expect(utils.isVector(a)).toBeTrue()
    })

    it('should return false for array of arrays', () => {
      const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

      expect(utils.isVector(m)).toBeFalse()
    })

    it('should return false for an empty array', () => {
      expect(utils.isMatrix([])).toBeFalse()
    })
  })
})
