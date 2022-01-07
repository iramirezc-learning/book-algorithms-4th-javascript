const TwoSumFast = require('./two-sum-fast')

describe('TwoSumFast', () => {
  beforeEach(() => {
    this.array = [0, -1, 1, -2, 2, -3, 3]
  })

  describe('.count()', () => {
    it('should return the count of non duplicated pairs that sum to 0', () => {
      /**
       * 1. [-1, 1]
       * 2. [-2, 2]
       * 3. [-3, 3]
       */
      const expectedCount = 3

      expect(TwoSumFast.count(this.array)).toBe(expectedCount)
    })
  })
})
