const DateBasic = require('./date-basic')

describe('DateBasic', () => {
  it('should create a DateBasic instance with the provided month, day and year', () => {
    const month = 9
    const day = 27
    const year = 1987

    const date = new DateBasic(month, day, year)

    expect(date._month).toBe(month)
    expect(date._day).toBe(day)
    expect(date._year).toBe(year)
  })

  describe('.month()', () => {
    it('should return the month', () => {
      const expectedMonth = 9
      const date1 = new DateBasic(9, 27, 1987)
      const date2 = new DateBasic('9/27/1987')

      expect(date1.month()).toBe(expectedMonth)
      expect(date2.month()).toBe(expectedMonth)
    })
  })

  describe('.day()', () => {
    it('should return the day', () => {
      const expectedDay = 27
      const date1 = new DateBasic(9, 27, 1987)
      const date2 = new DateBasic('9/27/1987')

      expect(date1.day()).toBe(expectedDay)
      expect(date2.day()).toBe(expectedDay)
    })
  })

  describe('.year()', () => {
    it('should return the year', () => {
      const expectedYear = 1987
      const date1 = new DateBasic(9, 27, 1987)
      const date2 = new DateBasic('9/27/1987')

      expect(date1.year()).toBe(expectedYear)
      expect(date2.year()).toBe(expectedYear)
    })
  })

  describe('.toString()', () => {
    it('should return the date as a string', () => {
      const expectedString = '9/27/1987'
      const date1 = new DateBasic(9, 27, 1987)
      const date2 = new DateBasic('9/27/1987')

      expect(String(date1)).toBe(expectedString)
      expect(String(date2)).toBe(expectedString)
    })
  })

  describe('.equals()', () => {
    beforeEach(() => {
      // @ts-ignore
      this.sourceDate = new DateBasic(9, 27, 1987)
    })

    it('should return true when the target date has the same reference', () => {
      const targetDate = this.sourceDate

      const isEqual = this.sourceDate.equals(targetDate)

      expect(isEqual).toBe(true)
    })

    it('should return false when the target date is null', () => {
      const targetDate = null

      const isEqual = this.sourceDate.equals(targetDate)

      expect(isEqual).toBe(false)
    })

    it('should return false when objects have different class', () => {
      const targetDate = new Date(1987, 8, 27)

      // @ts-ignore
      const isEqual = this.sourceDate.equals(targetDate)

      expect(isEqual).toBe(false)
    })

    it('should return false when objects have different day', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day() + 1,
        this.sourceDate.year()
      )

      const isEqual = this.sourceDate.equals(targetDate)

      expect(isEqual).toBe(false)
    })

    it('should return false when objects have different month', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month() + 1,
        this.sourceDate.day(),
        this.sourceDate.year()
      )

      const isEqual = this.sourceDate.equals(targetDate)

      expect(isEqual).toBe(false)
    })

    it('should return false when objects have different year', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day(),
        this.sourceDate.year() + 1
      )

      const isEqual = this.sourceDate.equals(targetDate)

      expect(isEqual).toBe(false)
    })

    it('should return true when objects have same date', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day(),
        this.sourceDate.year()
      )

      const isEqual = this.sourceDate.equals(targetDate)

      expect(isEqual).toBe(true)
    })
  })

  describe('.compareTo()', () => {
    beforeEach(() => {
      // @ts-ignore
      this.sourceDate = new DateBasic(9, 27, 1987)
    })

    it('should return `+1` if sourceDate.year is greater than targetDate.year', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day(),
        this.sourceDate.year() - 1
      )

      const result = this.sourceDate.compareTo(targetDate)

      expect(result).toBe(1)
      expect(this.sourceDate.year()).not.toBe(targetDate.year())
    })

    it('should return `-1` if sourceDate.year is smaller than targetDate.year', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day(),
        this.sourceDate.year() + 1
      )

      const result = this.sourceDate.compareTo(targetDate)

      expect(result).toBe(-1)
      expect(this.sourceDate.year()).not.toBe(targetDate.year())
    })

    it('should return `+1` if sourceDate.month is greater than targetDate.month', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month() - 1,
        this.sourceDate.day(),
        this.sourceDate.year()
      )

      const result = this.sourceDate.compareTo(targetDate)

      expect(result).toBe(1)
      expect(this.sourceDate.month()).not.toBe(targetDate.month())
    })

    it('should return `-1` if sourceDate.month is smaller than targetDate.month', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month() + 1,
        this.sourceDate.day(),
        this.sourceDate.year()
      )

      const result = this.sourceDate.compareTo(targetDate)

      expect(result).toBe(-1)
      expect(this.sourceDate.month()).not.toBe(targetDate.month())
    })

    it('should return `+1` if sourceDate.day is greater than targetDate.day', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day() - 1,
        this.sourceDate.year()
      )

      const result = this.sourceDate.compareTo(targetDate)

      expect(result).toBe(1)
      expect(this.sourceDate.day()).not.toBe(targetDate.day())
    })

    it('should return `-1` if sourceDate.day is smaller than targetDate.day', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day() + 1,
        this.sourceDate.year()
      )

      const result = this.sourceDate.compareTo(targetDate)

      expect(result).toBe(-1)
      expect(this.sourceDate.day()).not.toBe(targetDate.day())
    })

    it('should return `0` if both dates are equal', () => {
      const targetDate = new DateBasic(
        this.sourceDate.month(),
        this.sourceDate.day(),
        this.sourceDate.year()
      )

      const result = this.sourceDate.compareTo(targetDate)

      expect(result).toBe(0)
    })
  })
})
