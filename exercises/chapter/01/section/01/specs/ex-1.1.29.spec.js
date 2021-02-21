const Exercise = require('../ex-1.1.29')

describe('Unit Tests: Exercise 1.1.29', () => {
  describe('static getMostDuplicatedKey method', () => {
    it('should return the key that is duplicated the most', () => {
      const testCases = [
        new TestCase({
          description: 'should return the first key when all are unique',
          args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
          expected: {
            key: 0,
            rank: 0,
            count: 1,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 0 when all are duplicated',
          args: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
          expected: {
            key: 0,
            rank: 0,
            count: 10,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 1',
          args: [[0, 1, 1, 3, 4, 5, 6, 7, 8, 9]],
          expected: {
            key: 1,
            rank: 1,
            count: 2,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 3',
          args: [[0, 1, 1, 3, 3, 3, 6, 7, 8, 9]],
          expected: {
            key: 3,
            rank: 3,
            count: 3,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 5',
          args: [[0, 1, 1, 3, 3, 3, 5, 5, 5, 5]],
          expected: {
            key: 5,
            rank: 6,
            count: 4,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 2 because key 4 has the same count',
          args: [[0, 1, 2, 2, 2, 2, 4, 4, 4, 4]],
          expected: {
            key: 2,
            rank: 2,
            count: 4,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 6',
          args: [[0, 2, 2, 3, 4, 5, 6, 6, 6, 8, 9]],
          expected: {
            key: 6,
            rank: 6,
            count: 3,
            length: 11
          }
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(Exercise.getMostDuplicatedKey(...args)).toEqual(
          expected,
          description
        )
      })
    })
  })

  describe('static getMostDuplicatedKeyV2 method', () => {
    it('should return the key that is duplicated the most', () => {
      const testCases = [
        new TestCase({
          description: 'should return the first key when all are unique',
          args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
          expected: {
            key: 0,
            rank: 0,
            count: 1,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 0 when all are duplicated',
          args: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
          expected: {
            key: 0,
            rank: 0,
            count: 10,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 1',
          args: [[0, 1, 1, 3, 4, 5, 6, 7, 8, 9]],
          expected: {
            key: 1,
            rank: 1,
            count: 2,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 3',
          args: [[0, 1, 1, 3, 3, 3, 6, 7, 8, 9]],
          expected: {
            key: 3,
            rank: 3,
            count: 3,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 5',
          args: [[0, 1, 1, 3, 3, 3, 5, 5, 5, 5]],
          expected: {
            key: 5,
            rank: 6,
            count: 4,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 2 because key 4 has the same count',
          args: [[0, 1, 2, 2, 2, 2, 4, 4, 4, 4]],
          expected: {
            key: 2,
            rank: 2,
            count: 4,
            length: 10
          }
        }),
        new TestCase({
          description: 'should return key 6',
          args: [[0, 2, 2, 3, 4, 5, 6, 6, 6, 8, 9]],
          expected: {
            key: 6,
            rank: 6,
            count: 3,
            length: 11
          }
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        expect(Exercise.getMostDuplicatedKeyV2(...args)).toEqual(
          expected,
          description
        )
      })
    })
  })
})
