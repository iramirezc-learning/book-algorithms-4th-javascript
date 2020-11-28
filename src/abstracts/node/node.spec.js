const Node = require('./node')

describe('Unit Tests: Node', () => {
  describe('Node instance', () => {
    beforeEach(() => {
      this.node = new Node()
    })

    it('should have a prop `_item` equal to null', () => {
      expect(this.node._item).toBeNull()
    })

    it('should have a prop `_next` equal to null', () => {
      expect(this.node._next).toBeNull()
    })

    it('should not be extensible', () => {
      const expectedProps = ['_item', '_next']

      this.node.newProp = null

      const actualProps = Object.getOwnPropertyNames(this.node)
      expect(actualProps).toEqual(expectedProps)
      expect(this.node.newProp).toBeUndefined()
    })
  })
})
