const ThreeSumFast = require('./three-sum-fast')

describe('Unit Tests: ThreeSumFast Algorithm', () => {
  beforeEach(() => {
    this.array = [-3, -2, -1, 0, 1, 2, 3]
  })

  describe('static count method', () => {
    it('should return the count of triplets that sum to 0', () => {
      /**
       * 1. [-3, 0, 3]
       * 2. [-3, 1, 2]
       * 3. [-2, -1, 3]
       * 4. [-2, 0, 2]
       * 5. [-1, 0, 1]
       */
      const expectedCount = 5

      expect(ThreeSumFast.count(this.array)).toBe(expectedCount)
    })
  })
})
