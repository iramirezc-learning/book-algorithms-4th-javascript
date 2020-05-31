const DijkstraTwoStack = require('./dijkstra-two-stack')
const { Stack } = require('../../adts')

describe(`Unit Tests: Dijkstra's Two-Stack Algorithm for Expression Evaluation`, () => {
  describe('when using default Stack implementation', () => {
    it('should be using Stack ADT implementation', () => {
      expect(DijkstraTwoStack.Stack).toBe(Stack)
    })

    it('should evaluate an arithmetic expression of addition', () => {
      const expression = '( 1 + ( 2 + 3 ) )'
      const expectedResult = 6

      const result = DijkstraTwoStack.evaluate(expression)

      expect(result).toBe(expectedResult)
    })

    it('should evaluate an arithmetic expression of subtraction', () => {
      const expression = '( 1 - ( 2 - 3 ) )'
      const expectedResult = 2

      const result = DijkstraTwoStack.evaluate(expression)

      expect(result).toBe(expectedResult)
    })

    it('should evaluate an arithmetic expression of multiplication', () => {
      const expression = '( 1 * ( 2 * 3 ) )'
      const expectedResult = 6

      const result = DijkstraTwoStack.evaluate(expression)

      expect(result).toBe(expectedResult)
    })

    it('should evaluate an arithmetic expression of division', () => {
      const expression = '( 1 / ( 2 / 3 ) )'
      const expectedResult = 1.5

      const result = DijkstraTwoStack.evaluate(expression)

      expect(result).toBe(expectedResult)
    })

    it('should evaluate an square root function', () => {
      const expression = '( ( 1 + sqrt ( 5.0 ) ) / 2.0 )'
      const expectedResult = 1.618033988749895

      const result = DijkstraTwoStack.evaluate(expression)

      expect(result).toBe(expectedResult)
    })
  })
})
