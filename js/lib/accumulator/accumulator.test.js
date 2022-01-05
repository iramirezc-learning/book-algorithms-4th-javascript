const Accumulator = require('./accumulator')

describe('Accumulator', () => {
  beforeEach(() => {
    this.accumulator = new Accumulator()
  })

  describe('.addDataValue()', () => {
    it('should increment the `n` count', () => {
      const trials = 1000

      for (let i = 0; i < trials; i++) {
        this.accumulator.addDataValue(i)
      }

      expect(this.accumulator.n).toEqual(trials)
    })

    it('should accumulate the `sum` of the values added', () => {
      const trials = 1000
      let expectedSum = 0

      for (let i = 0; i < trials; i++) {
        const value = i * 10
        expectedSum += value
        this.accumulator.addDataValue(value)
      }

      expect(this.accumulator.sum).toEqual(expectedSum)
    })
  })

  describe('.mean()', () => {
    it('should return the `mean` of the data values added', () => {
      const trials = 1000
      let totalSum = 0

      for (let i = 0; i < trials; i++) {
        const value = Math.random()
        totalSum += value
        this.accumulator.addDataValue(value)
      }

      const expectedMean = totalSum / trials
      expect(this.accumulator.mean()).toEqual(expectedMean)
    })
  })

  describe('.toString()', () => {
    it('should return a formatted string with the mean value', () => {
      this.accumulator.addDataValue(Math.random())
      this.accumulator.addDataValue(Math.random())
      this.accumulator.addDataValue(Math.random())
      const mean = this.accumulator.mean().toFixed(5)
      const expectedStr = `Mean (3 values): ${mean}`

      expect(String(this.accumulator)).toBe(expectedStr)
    })
  })
})
