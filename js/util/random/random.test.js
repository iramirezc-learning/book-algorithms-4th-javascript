const Random = require('./random')

describe('Utils/Random', () => {
  beforeEach(() => {
    this.iterations = 100
  })

  describe('.uniform()', () => {
    it('should return a "real" number between 0 and 1', () => {
      while (this.iterations--) {
        // @ts-ignore
        const result = Random.uniform()

        expect(result).toBeGreaterThan(0)
        expect(result).toBeLessThan(1)
        expect(Number.isInteger(result))
          .withContext('should be a real number')
          .toBeFalse()
      }
    })

    it('should return an integer between 0 and n-1', () => {
      const n = 5

      while (this.iterations--) {
        // @ts-ignore
        const result = Random.uniform(n)

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThan(n)
        expect(Number.isInteger(result))
          .withContext('should be an integer number')
          .toBeTrue()
      }
    })

    it('should return an integer number between min and max - 1', () => {
      const min = 5
      const max = 10

      while (this.iterations--) {
        // @ts-ignore
        const result = Random.uniform(min, max)

        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThan(max)
        expect(Number.isInteger(result))
          .withContext('should be an integer number')
          .toBeTrue()
      }
    })

    it('should return a real number between min and max - 1', () => {
      const min = 5.12345
      const max = 10.98765

      while (this.iterations--) {
        // @ts-ignore
        const result = Random.uniform(min, max)

        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThan(max)
        expect(Number.isInteger(result))
          .withContext('should be a real number')
          .toBeFalse()
      }
    })
  })

  describe('.bernoulli()', () => {
    it('should return a boolean', () => {
      while (this.iterations--) {
        expect(Random.bernoulli()).toBeInstanceOf(Boolean)
      }
    })

    it('should return more `true` than `false` when probability is higher', () => {
      let pTrue = 0
      let pFalse = 0

      while (this.iterations--) {
        Random.bernoulli(0.9) ? pTrue++ : pFalse++
      }

      expect(pTrue).toBeGreaterThan(pFalse)
    })

    it('should return more `false` than `true` when probability is lower', () => {
      let pTrue = 0
      let pFalse = 0

      while (this.iterations--) {
        Random.bernoulli(0.1) ? pTrue++ : pFalse++
      }

      expect(pTrue).toBeLessThan(pFalse)
    })
  })

  describe('.discrete()', () => {
    it('should return a random integer number between 0 and the array.length - 1', () => {
      const a = [0.1, 0.3, 0.0, 0.4, 0.1, 0.05, 0.05]
      const len = a.length

      while (this.iterations--) {
        const result = Random.discrete(a)

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThan(len)
        expect(Number.isInteger(result))
          .withContext('should be an integer number')
          .toBeTrue()
      }
    })
  })

  describe('.shuffle()', () => {
    it('should shuffle the array of numbers', () => {
      const original = [1, 2, 3, 4, 5]
      const copy = original.slice(0)
      const expectedSum = 15

      Random.shuffle(original)

      const sum = original.reduce((acc, n) => (acc += n))
      expect(sum).toBe(expectedSum)
      expect(original).not.toEqual(copy)
    })
  })
})
