const Transaction = require('./transaction')
const BasicDate = require('../basic-date/basic-date')

describe('Unit Tests: Transaction ADT', () => {
  it('should create a Transaction instance with the provided who, when and amount', () => {
    const who = 'Isaac'
    const when = new BasicDate(5, 23, 2020)
    const amount = 999.99

    const transaction = new Transaction(who, when, amount)

    expect(transaction._who).toBe(who)
    expect(transaction._when).toBe(when)
    expect(transaction._amount).toBe(amount)
  })

  describe('instance', () => {
    beforeEach(() => {
      this.who = 'Isaac'
      this.when = new BasicDate(5, 23, 2020)
      this.amount = 999.99

      this.transaction1 = new Transaction(this.who, this.when, this.amount)
      this.transaction2 = new Transaction(this.transaction1.toString())
    })

    describe('who()', () => {
      it('should return the `who`', () => {
        const expectedWho = this.who

        expect(this.transaction1.who()).toBe(expectedWho)
        expect(this.transaction2.who()).toBe(expectedWho)
      })
    })

    describe('when()', () => {
      it('should return the `when`', () => {
        const expectedWhen = this.when

        expect(this.transaction1.when()).toEqual(expectedWhen)
        expect(this.transaction2.when()).toEqual(expectedWhen)
      })
    })

    describe('amount()', () => {
      it('should return the `amount`', () => {
        const expectedAmount = this.amount

        expect(this.transaction1.amount()).toBe(expectedAmount)
        expect(this.transaction2.amount()).toBe(expectedAmount)
      })
    })

    describe('toString()', () => {
      it('should return the transaction as a string', () => {
        const expectedString = `${this.who} ${this.when} ${this.amount}`

        expect(String(this.transaction1)).toBe(expectedString)
        expect(String(this.transaction2)).toBe(expectedString)
      })
    })

    describe('equals()', () => {
      it('should return true when the target object has the same reference', () => {
        const targetTransaction = this.transaction1

        const isEqual = this.transaction1.equals(targetTransaction)

        expect(isEqual).toBe(true)
      })

      it('should return false when the target object is null', () => {
        const targetTransaction = null

        const isEqual = this.transaction1.equals(targetTransaction)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different class', () => {
        class OtherTransaction {}

        const targetTransaction = new OtherTransaction()

        const isEqual = this.transaction1.equals(targetTransaction)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different who', () => {
        const targetTransaction = new Transaction('OtherWho', this.transaction1.when(), this.transaction1.amount())

        const isEqual = this.transaction1.equals(targetTransaction)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different when', () => {
        const targetTransaction = new Transaction(this.transaction1.who(), new BasicDate(1, 1, 1900), this.transaction1.amount())

        const isEqual = this.transaction1.equals(targetTransaction)

        expect(isEqual).toBe(false)
      })

      it('should return false when objects have different amount', () => {
        const targetTransaction = new Transaction(this.transaction1.who(), this.transaction1.when(), this.transaction1.amount() * 2)

        const isEqual = this.transaction1.equals(targetTransaction)

        expect(isEqual).toBe(false)
      })

      it('should return true when objects have same who, when and amount', () => {
        const targetTransaction = new Transaction(this.transaction1.who(), this.transaction1.when(), this.transaction1.amount())

        const isEqual = this.transaction1.equals(targetTransaction)

        expect(isEqual).toBe(true)
      })
    })

    describe('compareTo()', () => {
      it('should return `+1` if transaction1.amount is greater than targetTransaction.amount', () => {
        const targetTransaction = new Transaction(this.transaction1.who(), this.transaction1.when(), this.transaction1.amount() / 2)

        const result = this.transaction1.compareTo(targetTransaction)

        expect(result).toBe(1)
        expect(this.transaction1.amount()).not.toBe(targetTransaction.amount())
      })

      it('should return `-1` if transaction1.amount is smaller than targetTransaction.amount', () => {
        const targetTransaction = new Transaction(this.transaction1.who(), this.transaction1.when(), this.transaction1.amount() * 2)

        const result = this.transaction1.compareTo(targetTransaction)

        expect(result).toBe(-1)
        expect(this.transaction1.amount()).not.toBe(targetTransaction.amount())
      })

      it('should return `0` if both transactions are equal', () => {
        const targetTransaction = new Transaction(this.transaction1.who(), this.transaction1.when(), this.transaction1.amount())

        const result = this.transaction1.compareTo(targetTransaction)

        expect(result).toBe(0)
      })
    })
  })
})
