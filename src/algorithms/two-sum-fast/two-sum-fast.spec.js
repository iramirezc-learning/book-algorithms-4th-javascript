const TwoSumFast = require('./two-sum-fast')

describe('Unit Tests: TwoSumFast Algorithm', () => {
  beforeEach(() => {
    this.array = [0, -1, 1, -2, 2, -3, 3]
  })

  describe('static count method', () => {
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
