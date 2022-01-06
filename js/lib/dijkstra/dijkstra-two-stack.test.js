const DijkstraTwoStack = require('./dijkstra-two-stack')
const StackFixedCapacity = require('../stack/stack-fixed-capacity')
const StackResizableArray = require('../stack/stack-resizable-array')

describe('DijkstraTwoStack', () => {
  describe('.evaluate()', () => {
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

    describe('with StackFixedCapacity', () => {
      beforeAll(() => {
        this.originalStack = DijkstraTwoStack.Stack
        DijkstraTwoStack.Stack = StackFixedCapacity
      })

      afterAll(() => {
        DijkstraTwoStack.Stack = this.originalStack
      })

      it('should be using the StackFixedCapacity implementation', () => {
        expect(DijkstraTwoStack.Stack).toBe(StackFixedCapacity)
      })

      it('should evaluate the expression correctly', () => {
        const expression = '( ( ( ( 1 + sqrt ( 5.0 ) ) / 2.0 ) * 2 ) - 1 )'
        const expectedResult = 2.23606797749979

        const result = DijkstraTwoStack.evaluate(expression)

        expect(result).toBe(expectedResult)
      })
    })

    describe('with StackResizableArray', () => {
      beforeAll(() => {
        this.originalStack = DijkstraTwoStack.Stack
        DijkstraTwoStack.Stack = StackResizableArray
      })

      afterAll(() => {
        DijkstraTwoStack.Stack = this.originalStack
      })

      it('should be using the StackResizableArray implementation', () => {
        expect(DijkstraTwoStack.Stack).toBe(StackResizableArray)
      })

      it('should evaluate the expression correctly', () => {
        const expression = '( ( ( ( 1 + sqrt ( 5.0 ) ) / 2.0 ) * 2 ) - 1 )'
        const expectedResult = 2.23606797749979

        const result = DijkstraTwoStack.evaluate(expression)

        expect(result).toBe(expectedResult)
      })
    })
  })
})
