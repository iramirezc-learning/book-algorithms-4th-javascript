const Counter = require('./counter')

describe('Unit Tests: Counter ADT', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.name = 'test'
      this.counter = new Counter(this.name)
    })

    it('should not allow to change its name', () => {
      this.counter._id = 'new name'

      expect(this.counter._id).toBe(this.name)
    })

    describe('increment method', () => {
      it('should increment the `count`', () => {
        const trials = 1000

        for (let i = 0; i < trials; i++) {
          this.counter.increment()
        }

        expect(this.counter._count).toEqual(trials)
      })
    })

    describe('tally method', () => {
      it('should return the total `count`', () => {
        const trials = 1000

        for (let i = 0; i < trials; i++) {
          this.counter.increment()
        }

        expect(this.counter.tally()).toEqual(trials)
      })
    })

    describe('toString method', () => {
      it('should return a formatted string with the count and id values', () => {
        this.counter.increment()
        this.counter.increment()
        this.counter.increment()
        const expectedStr = `3 ${this.name}`

        expect(String(this.counter)).toBe(expectedStr)
      })
    })
  })
})
