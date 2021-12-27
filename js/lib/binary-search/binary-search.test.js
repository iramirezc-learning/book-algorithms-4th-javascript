const BinarySearch = require('./binary-search')

describe('BinarySearch', () => {
  beforeEach(() => {
    this.sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })

  describe('.indexOf()', () => {
    it('should return the index of the number found in the array', () => {
      const testCases = [
        new TestCase({
          description: 'should find the first number',
          args: [this.sortedArray, 1],
          expected: 0
        }),
        new TestCase({
          description: 'should find the middle number',
          args: [this.sortedArray, 5],
          expected: 4
        }),
        new TestCase({
          description: 'should find the last number',
          args: [this.sortedArray, 9],
          expected: 8
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(BinarySearch.indexOf(...args))
          .withContext(description)
          .toBe(expected)
      })
    })

    it('should return -1 if the number is not found in the array', () => {
      const notInArray = 0

      expect(BinarySearch.indexOf(this.sortedArray, notInArray)).toBe(-1)
    })
  })

  describe('.rank()', () => {
    it('should return the number of values that are less than the key', () => {
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
        expect(BinarySearch.rank(...args))
          .withContext(description)
          .toBe(expected)
      })
    })
  })

  describe('.count()', () => {
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
        expect(BinarySearch.count(...args))
          .withContext(description)
          .toBe(expected)
      })
    })
  })
})
