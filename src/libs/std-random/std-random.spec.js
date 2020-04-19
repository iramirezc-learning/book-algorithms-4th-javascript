const StdRandom = require('./std-random')

describe('StRandom Library', () => {
  describe('static uniform method', () => {
    beforeEach(() => {
      this.iterations = 100
    })

    it('should return a real number between 0 and 1', () => {
      while (this.iterations--) {
        const result = StdRandom.uniform()

        expect(result).toBeGreaterThan(0)
        expect(result).toBeLessThan(1)
        expect(Number.isInteger(result)).toBeFalse('should be a real number')
      }
    })

    it('should return an integer between 0 and n-1', () => {
      const n = 5

      while (this.iterations--) {
        const result = StdRandom.uniform(n)

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThan(n)
        expect(Number.isInteger(result)).toBeTrue('should be an integer number')
      }
    })

    it('should return an integer number between min and max - 1', () => {
      const min = 5
      const max = 10

      while (this.iterations--) {
        const result = StdRandom.uniform(min, max)

        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThan(max)
        expect(Number.isInteger(result)).toBeTrue('should be an integer number')
      }
    })

    it('should return a real number between min and max - 1', () => {
      const min = 5.12345
      const max = 10.98765

      while (this.iterations--) {
        const result = StdRandom.uniform(min, max)

        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThan(max)
        expect(Number.isInteger(result)).toBeFalse('should be a real number')
      }
    })
  })

  describe('static bernoulli method', () => {
    beforeEach(() => {
      this.iterations = 1000
    })

    it('should return a boolean', () => {
      while (this.iterations--) {
        expect(StdRandom.bernoulli()).toBeInstanceOf(Boolean)
      }
    })

    it('should return more `true` than `false` when probability is higher', () => {
      let pTrue = 0
      let pFalse = 0

      while (this.iterations--) {
        StdRandom.bernoulli(0.9) ? pTrue++ : pFalse++
      }

      expect(pTrue).toBeGreaterThan(pFalse)
    })

    it('should return more `false` than `true` when probability is lower', () => {
      let pTrue = 0
      let pFalse = 0

      while (this.iterations--) {
        StdRandom.bernoulli(0.1) ? pTrue++ : pFalse++
      }

      expect(pTrue).toBeLessThan(pFalse)
    })
  })
})
