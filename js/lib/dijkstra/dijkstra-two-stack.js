const Stack = require('../stack/stack')

/**
 * Algorithm developed by E. W. Dijkstra
 * in the 1960's to evaluate arithmetic expressions
 * with 2 stacks.
 * @hideconstructor
 * @see p.129
 */
class DijkstraTwoStack {
  /**
   * Evaluates arithmetic string expressions using two stacks.
   * @param {string} expression An mathematical expression in string like `( ( 1 + sqrt ( 5.0 ) ) / 2.0 )`.
   * @returns {number} The result of the expression.
   *
   * @example
   * DijkstraTwoStack.evaluate('( ( 1 + sqrt ( 5.0 ) ) / 2.0 )')
   * // will return
   * 1.618033988749895
   */
  static evaluate(expression = '') {
    const operators = new DijkstraTwoStack.Stack()
    const values = new DijkstraTwoStack.Stack()

    expression.split(/\s+/).forEach((token) => {
      if (token === '(') {
        // ignore
      } else if (token === '+') {
        operators.push(token)
      } else if (token === '-') {
        operators.push(token)
      } else if (token === '*') {
        operators.push(token)
      } else if (token === '/') {
        operators.push(token)
      } else if (token === 'sqrt') {
        operators.push(token)
      } else if (token === ')') {
        const operator = operators.pop()
        let value = values.pop()

        if (operator === '+') {
          value = values.pop() + value
        } else if (operator === '-') {
          value = values.pop() - value
        } else if (operator === '*') {
          value = values.pop() * value
        } else if (operator === '/') {
          value = values.pop() / value
        } else if (operator === 'sqrt') {
          value = Math.sqrt(value)
        }

        values.push(value)
      } else {
        // try to parse to number
        values.push(Number(token))
      }
    })

    return values.pop()
  }
}

DijkstraTwoStack.Stack = Stack

module.exports = DijkstraTwoStack
