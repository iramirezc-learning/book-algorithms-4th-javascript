const Counter = require('./counter')

describe('Counter', () => {
  beforeEach(() => {
    this.name = 'test'
    this.counter = new Counter(this.name)
  })

  describe('.increment()', () => {
    it('should increment the "count"', () => {
      const trials = 1000

      for (let i = 0; i < trials; i++) {
        this.counter.increment()
      }

      expect(this.counter.count).toEqual(trials)
    })
  })

  describe('.tally()', () => {
    it('should return the total "count"', () => {
      const trials = 1000

      for (let i = 0; i < trials; i++) {
        this.counter.increment()
      }

      expect(this.counter.tally()).toEqual(trials)
    })
  })

  describe('.toString()', () => {
    it('should return a formatted string with the count and id', () => {
      this.counter.increment()
      this.counter.increment()
      this.counter.increment()
      const expectedStr = `3 ${this.name}`

      expect(String(this.counter)).toBe(expectedStr)
    })
  })
})
