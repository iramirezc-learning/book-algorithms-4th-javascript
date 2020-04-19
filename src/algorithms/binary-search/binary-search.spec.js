const BinarySearch = require('./binary-search')

describe('Unit Tests: BinarySearch Algorithm', () => {
  beforeEach(() => {
    this.sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })

  describe('static _iterativeIndexOf method', () => {
    it('should return the index of the number found in the array', () => {
      const testCases = [
        new TestCase({
          description: 'should find first number',
          args: [this.sortedArray, 1],
          expected: 0
        }),
        new TestCase({
          description: 'should find middle number',
          args: [this.sortedArray, 5],
          expected: 4
        }),
        new TestCase({
          description: 'should find last number',
          args: [this.sortedArray, 9],
          expected: 8
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(BinarySearch._iterativeIndexOf(...args)).toBe(expected, description)
      })
    })

    it('should return -1 if the number is not found in the array', () => {
      const notInArray = 0

      expect(BinarySearch._iterativeIndexOf(this.sortedArray, notInArray)).toBe(-1)
    })
  })

  describe('static _recursiveIndexOf method', () => {
    it('should return the index of the number found in the array', () => {
      const lo = 0
      const hi = this.sortedArray.length - 1
      const testCases = [
        new TestCase({
          description: 'should find first number',
          args: [this.sortedArray, 1, lo, hi],
          expected: 0
        }),
        new TestCase({
          description: 'should find middle number',
          args: [this.sortedArray, 5, lo, hi],
          expected: 4
        }),
        new TestCase({
          description: 'should find last number',
          args: [this.sortedArray, 9, lo, hi],
          expected: 8
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(BinarySearch._recursiveIndexOf(...args)).toBe(expected, description)
      })
    })

    it('should return -1 if the number is not found in the array', () => {
      const notInArray = 0
      const lo = 0
      const hi = this.sortedArray.length - -1

      const index = BinarySearch._recursiveIndexOf(this.sortedArray, notInArray, lo, hi)

      expect(index).toBe(-1)
    })
  })

  describe('static indexOf method', () => {
    it('should call the `_iterativeIndexOf` implementation', () => {
      spyOn(BinarySearch, '_iterativeIndexOf')
      const targetKey = 5

      BinarySearch.indexOf(this.sortedArray, targetKey)

      expect(BinarySearch._iterativeIndexOf).toHaveBeenCalledWith(this.sortedArray, targetKey)
    })
  })

  describe('static recursiveIndexOf method', () => {
    it('should call the `_recursiveIndexOf` implementation', () => {
      spyOn(BinarySearch, '_recursiveIndexOf')
      const targetKey = 5
      const lo = 0
      const hi = this.sortedArray.length - 1

      BinarySearch.recursiveIndexOf(this.sortedArray, targetKey)

      expect(BinarySearch._recursiveIndexOf).toHaveBeenCalledWith(this.sortedArray, targetKey, lo, hi)
    })
  })
})
