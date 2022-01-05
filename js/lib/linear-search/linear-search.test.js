const LinearSearch = require('./linear-search')

describe('LinearSearch', () => {
  beforeEach(() => {
    this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })

  describe('.indexOf()', () => {
    it('should return the index of the number found in the array', () => {
      const testCases = [
        new TestCase({
          description: 'should find the first number',
          args: [this.array, 1],
          expected: 0
        }),
        new TestCase({
          description: 'should find the middle number',
          args: [this.array, 5],
          expected: 4
        }),
        new TestCase({
          description: 'should find the last number',
          args: [this.array, 9],
          expected: 8
        })
      ]

      testCases.forEach(({ args, expected, description }) => {
        // @ts-ignore
        expect(LinearSearch.indexOf(...args))
          .withContext(description)
          .toBe(expected)
      })
    })

    it('should return -1 if the number is not found in the array', () => {
      const notInArray = 0

      expect(LinearSearch.indexOf(this.array, notInArray)).toBe(-1)
    })
  })
})
