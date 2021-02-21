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
        expect(BinarySearch._iterativeIndexOf(...args)).toBe(
          expected,
          description
        )
      })
    })

    it('should return -1 if the number is not found in the array', () => {
      const notInArray = 0

      expect(BinarySearch._iterativeIndexOf(this.sortedArray, notInArray)).toBe(
        -1
      )
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
        expect(BinarySearch._recursiveIndexOf(...args)).toBe(
          expected,
          description
        )
      })
    })

    it('should return -1 if the number is not found in the array', () => {
      const notInArray = 0
      const lo = 0
      const hi = this.sortedArray.length - -1

      const index = BinarySearch._recursiveIndexOf(
        this.sortedArray,
        notInArray,
        lo,
        hi
      )

      expect(index).toBe(-1)
    })
  })

  describe('static indexOf method', () => {
    it('should call the `_iterativeIndexOf` implementation', () => {
      spyOn(BinarySearch, '_iterativeIndexOf')
      const targetKey = 5

      BinarySearch.indexOf(this.sortedArray, targetKey)

      expect(BinarySearch._iterativeIndexOf).toHaveBeenCalledWith(
        this.sortedArray,
        targetKey
      )
    })
  })

  describe('static recursiveIndexOf method', () => {
    it('should call the `_recursiveIndexOf` implementation', () => {
      spyOn(BinarySearch, '_recursiveIndexOf')
      const targetKey = 5
      const lo = 0
      const hi = this.sortedArray.length - 1

      BinarySearch.recursiveIndexOf(this.sortedArray, targetKey)

      expect(BinarySearch._recursiveIndexOf).toHaveBeenCalledWith(
        this.sortedArray,
        targetKey,
        lo,
        hi
      )
    })
  })

  describe('static rank method', () => {
    it('should return the number of values less than the key', () => {
      const testCases = [
        new TestCase({
          description: 'should return 0',
          args: [[3, 3, 3, 4, 5], 3],
          expected: 0
        }),
        new TestCase({
          description: 'should return 1',
          args: [[1, 3, 3, 3, 4, 5], 3],
          expected: 1
        }),
        new TestCase({
          description: 'should return 2',
          args: [[1, 2, 3, 3, 3, 4, 5], 3],
          expected: 2
        }),
        new TestCase({
          description: 'should return 3',
          args: [[1, 2, 2, 3, 3, 4, 5], 3],
          expected: 3
        }),
        new TestCase({
          description: 'should return 4',
          args: [[1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 3],
          expected: 4
        }),
        new TestCase({
          description: 'should return 5',
          args: [[1, 1, 2, 2, 2, 4, 4, 4, 5, 5], 3],
          expected: 5
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(BinarySearch.rank(...args)).toBe(expected, description)
      })
    })
  })

  describe('static count method', () => {
    it('should return count of items that are equal to the key', () => {
      const testCases = [
        new TestCase({
          description: 'should return 0',
          args: [[0, 1, 2, 4, 5], 3],
          expected: 0
        }),
        new TestCase({
          description: 'should return 1',
          args: [[1, 2, 3, 4, 5], 3],
          expected: 1
        }),
        new TestCase({
          description: 'should return 2',
          args: [[1, 2, 3, 3, 4, 5], 3],
          expected: 2
        }),
        new TestCase({
          description: 'should return 3',
          args: [[1, 3, 3, 3, 5], 3],
          expected: 3
        }),
        new TestCase({
          description: 'should return 4',
          args: [[3, 3, 3, 3], 3],
          expected: 4
        }),
        new TestCase({
          description: 'should return 5',
          args: [[1, 3, 3, 3, 3, 3], 3],
          expected: 5
        }),
        new TestCase({
          description: 'should return 6',
          args: [[3, 3, 3, 3, 3, 3, 4], 3],
          expected: 6
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(BinarySearch.count(...args)).toBe(expected, description)
      })
    })
  })
})
