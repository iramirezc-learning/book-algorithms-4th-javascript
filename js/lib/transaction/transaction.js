const DateBasic = require('../date/date-basic')

/**
 * An abstract data type for transactions.
 * @see p.79
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Transaction.java.html}
 */
class Transaction {
  constructor() {
    if (arguments.length === 1 && typeof arguments[0] === 'string') {
      const parts = arguments[0].split(/\s+/)
      this._who = parts[0]
      this._when = new DateBasic(parts[1])
      this._amount = parseFloat(parts[2])
    } else if (arguments.length === 3) {
      this._who = arguments[0]
      this._when = arguments[1]
      this._amount = arguments[2]
    }
  }

  /**
   * Returns the who owns the transaction
   */
  who() {
    return this._who
  }

  /**
   * Returns the date of the transaction
   */
  when() {
    return this._when
  }

  /**
   * Returns the amount of the transaction
   */
  amount() {
    return this._amount
  }

  /**
   * Returns the transaction as string
   */
  toString() {
    return `${this.who()} ${this.when()} ${this.amount()}`
  }

  /**
   * Returns if this transaction is equal to
   * another transaction.
   * @param {Transaction} target The target Transaction
   * @returns {boolean}
   */
  equals(target) {
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
  compareTo(target) {
    if (this.amount() > target.amount()) return +1
    if (this.amount() < target.amount()) return -1

    return 0
  }
}

module.exports = Transaction