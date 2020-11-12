const Exercise = require('../ex-1.1.28')

describe('Unit Tests: Exercise 1.1.28', () => {
  describe('static filterDuplicates method', () => {
    it('should return an array with unique keys', () => {
      const testCases = [
        new TestCase({
          description: 'should return 1 key',
          args: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
          expected: [1]
        }),
        new TestCase({
          description: 'should return 3 keys',
          args: [[1, 1, 1, 2, 2, 2, 3, 3, 3, 3]],
          expected: [1, 2, 3]
        }),
        new TestCase({
          description: 'should return 5 keys',
          args: [[1, 1, 2, 2, 3, 3, 4, 4, 5, 5]],
          expected: [1, 2, 3, 4, 5]
        }),
        new TestCase({
          description: 'should return all keys',
          args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
          expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(Exercise.filterDuplicates(...args)).toEqual(expected, description)
      })
    })
  })
})
