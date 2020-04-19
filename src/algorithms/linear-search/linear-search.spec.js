const LinearSearch = require('./linear-search')

describe('Unit Tests: LinearSearch Algorithm', () => {
  beforeEach(() => {
    this.sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })

  describe('static indexOf method', () => {
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
        expect(LinearSearch.indexOf(...args)).toBe(expected, description)
      })
    })

    it('should return -1 if the number is not found in the array', () => {
      const notInArray = 0

      expect(LinearSearch.indexOf(this.sortedArray, notInArray)).toBe(-1)
    })
  })
})
