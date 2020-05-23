const SmallDate = require('./small-date')

describe('Unit Tests: SmallDate ADT', () => {
  it('should create a SmallDate instance with the provided month, day and year', () => {
    const month = 9
    const day = 27
    const year = 1987
    const expectedValue = year * 512 + month * 32 + day

    const date = new SmallDate(month, day, year)

    expect(date._value).toBe(expectedValue)
  })

  describe('instance', () => {
    describe('month()', () => {
      it('should return the `month`', () => {
        const expectedMonth = 9
        const date1 = new SmallDate(9, 27, 1987)

        expect(date1.month()).toBe(expectedMonth)
      })
    })

    describe('day()', () => {
      it('should return the `day`', () => {
        const expectedDay = 27
        const date1 = new SmallDate(9, 27, 1987)

        expect(date1.day()).toBe(expectedDay)
      })
    })

    describe('year()', () => {
      it('should return the `year`', () => {
        const expectedYear = 1987
        const date1 = new SmallDate(9, 27, 1987)

        expect(date1.year()).toBe(expectedYear)
      })
    })

    describe('toString()', () => {
      it('should return the date as a string', () => {
        const expectedString = '9/27/1987'
        const date1 = new SmallDate(9, 27, 1987)

        expect(String(date1)).toBe(expectedString)
      })
    })

    describe('equals()', () => {
      beforeEach(() => {
        this.sourceDate = new SmallDate(9, 27, 1987)
      })

      it('should return true when the object has the same reference', () => {
        const targetDate = this.sourceDate

        const isEqual = this.sourceDate.equals(targetDate)

        expect(isEqual).toBe(true)
      })

      it('should return false when the target object is null', () => {
        const targetDate = null

        const isEqual = this.sourceDate.equals(targetDate)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different class', () => {
        const targetDate = new Date(1987, 8, 27)

        const isEqual = this.sourceDate.equals(targetDate)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different day', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day() + 1, this.sourceDate.year())

        const isEqual = this.sourceDate.equals(targetDate)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different month', () => {
        const targetDate = new SmallDate(this.sourceDate.month() + 1, this.sourceDate.day(), this.sourceDate.year())

        const isEqual = this.sourceDate.equals(targetDate)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different year', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day(), this.sourceDate.year() + 1)

        const isEqual = this.sourceDate.equals(targetDate)

        expect(isEqual).toBe(false)
      })

      it('should return true when objects have same date', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day(), this.sourceDate.year())

        const isEqual = this.sourceDate.equals(targetDate)

        expect(isEqual).toBe(true)
      })
    })

    describe('compareTo()', () => {
      beforeEach(() => {
        this.sourceDate = new SmallDate(9, 27, 1987)
      })

      it('should return `+1` if sourceDate.year is greater than targetDate.year', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day(), this.sourceDate.year() - 1)

        const result = this.sourceDate.compareTo(targetDate)

        expect(result).toBe(1)
        expect(this.sourceDate.year()).not.toBe(targetDate.year())
      })

      it('should return `-1` if sourceDate.year is smaller than targetDate.year', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day(), this.sourceDate.year() + 1)

        const result = this.sourceDate.compareTo(targetDate)

        expect(result).toBe(-1)
        expect(this.sourceDate.year()).not.toBe(targetDate.year())
      })

      it('should return `+1` if sourceDate.month is greater than targetDate.month', () => {
        const targetDate = new SmallDate(this.sourceDate.month() - 1, this.sourceDate.day(), this.sourceDate.year())

        const result = this.sourceDate.compareTo(targetDate)

        expect(result).toBe(1)
        expect(this.sourceDate.month()).not.toBe(targetDate.month())
      })

      it('should return `-1` if sourceDate.month is smaller than targetDate.month', () => {
        const targetDate = new SmallDate(this.sourceDate.month() + 1, this.sourceDate.day(), this.sourceDate.year())

        const result = this.sourceDate.compareTo(targetDate)

        expect(result).toBe(-1)
        expect(this.sourceDate.month()).not.toBe(targetDate.month())
      })

      it('should return `+1` if sourceDate.day is greater than targetDate.day', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day() - 1, this.sourceDate.year())

        const result = this.sourceDate.compareTo(targetDate)

        expect(result).toBe(1)
        expect(this.sourceDate.day()).not.toBe(targetDate.day())
      })

      it('should return `-1` if sourceDate.day is smaller than targetDate.day', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day() + 1, this.sourceDate.year())

        const result = this.sourceDate.compareTo(targetDate)

        expect(result).toBe(-1)
        expect(this.sourceDate.day()).not.toBe(targetDate.day())
      })

      it('should return `0` if both dates are equal', () => {
        const targetDate = new SmallDate(this.sourceDate.month(), this.sourceDate.day(), this.sourceDate.year())

        const result = this.sourceDate.compareTo(targetDate)

        expect(result).toBe(0)
      })
    })
  })
})
