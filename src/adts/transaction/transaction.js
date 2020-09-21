const BasicDate = require('../basic-date/basic-date')

/**
 * Transaction
 * @classdesc An abstract data type for Transactions.
 * @implements {Comparable}
 * @see p. 79
 */
class Transaction {
  constructor () {
    let who, when, amount

    if (arguments.length === 1 && typeof arguments[0] === 'string') {
      const parts = arguments[0].split(/\s+/)

      who = parts[0]
      when = new BasicDate(parts[1])
      amount = parseFloat(parts[2])
    } else if (arguments.length === 3) {
      who = arguments[0]
      when = arguments[1]
      amount = arguments[2]
    }

    // immutable properties
    Object.defineProperties(this, {
      _who: { value: who },
      _when: { value: when },
      _amount: { value: amount }
    })
  }

  /**
   * Returns the who owns the transaction
   */
  who () {
    return this._who
  }

  /**
   * Returns the date of the transaction
   */
  when () {
    return this._when
  }

  /**
   * Returns the amount of the transaction
   */
  amount () {
    return this._amount
  }

  /**
   * Returns the transaction as string
   */
  toString () {
    return `${this.who()} ${this.when()} ${this.amount()}`
  }

  /**
   * Returns if this transaction is equal to
   * another transaction.
   * @param {Transaction} target The target Transaction
   * @returns {boolean}
   */
  equals (target) {
    if (this === target) return true
    if (target === null) return false
    if (!(target instanceof Transaction)) return false
    if (this.who() !== target.who()) return false
    if (!this.when().equals(target.when())) return false
    if (this.amount() !== target.amount()) return false

    return true
  }

  /**
   * Compares if this transaction
   * is greater (+1), smaller (-1) or equal (0)
   * to another transaction.
   * @param {Transaction} target The target Transaction
   * @returns {number} +1 (is greater), -1 (is smaller), 0 (is equal)
   */
  compareTo (target) {
    if (this.amount() > target.amount()) return +1
    if (this.amount() < target.amount()) return -1

    return 0
  }
}

module.exports = Transaction
