const DijkstraTwoStack = require('./dijkstra-two-stack')
const { Stack, FixedCapacityStack, ResizableArrayStack } = require('../../adts')

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

  describe('when using FixedCapacityStack implementation', () => {
    beforeAll(() => {
      DijkstraTwoStack.Stack = FixedCapacityStack
    })

    it('should be using FixedCapacityStack ADT implementation', () => {
      expect(DijkstraTwoStack.Stack).toBe(FixedCapacityStack)
    })

    it('should evaluate an expression correctly', () => {
      const expression = '( ( ( ( 1 + sqrt ( 5.0 ) ) / 2.0 ) * 2 ) - 1 )'
      const expectedResult = 2.23606797749979

      const result = DijkstraTwoStack.evaluate(expression)

      expect(result).toBe(expectedResult)
    })
  })

  describe('when using ResizableArrayStack implementation', () => {
    beforeAll(() => {
      DijkstraTwoStack.Stack = ResizableArrayStack
    })

    it('should be using ResizableArrayStack ADT implementation', () => {
      expect(DijkstraTwoStack.Stack).toBe(ResizableArrayStack)
    })

    it('should evaluate an expression correctly', () => {
      const expression = '( ( ( ( 1 + sqrt ( 5.0 ) ) / 2.0 ) * 2 ) - 1 )'
      const expectedResult = 2.23606797749979

      const result = DijkstraTwoStack.evaluate(expression)

      expect(result).toBe(expectedResult)
    })
  })
})
