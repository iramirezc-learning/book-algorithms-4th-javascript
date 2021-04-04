const Node = require('./sized-node')

describe('Unit Tests: Sized Node', () => {
  describe('Node instance', () => {
    beforeEach(() => {
      this.node = new Node()
    })

    it('should have a prop `_key` equal to null', () => {
      expect(this.node._key).toBeNull()
    })

    it('should have a prop `_val` equal to null', () => {
      expect(this.node._val).toBeNull()
    })

    it('should have a prop `_n` equal to 0', () => {
      expect(this.node._n).toBe(0)
    })

    it('should not be extensible', () => {
      const expectedProps = ['_key', '_val', '_n']

      this.node.newProp = null

      const actualProps = Object.getOwnPropertyNames(this.node)
      expect(actualProps).toEqual(expectedProps)
      expect(this.node.newProp).toBeUndefined()
    })

    it('should be initialized with the given props', () => {
      const k = 'A'
      const v = 0
      const n = 1

      this.node = new Node(k, v, n)

      expect(this.node._key).toBe(k)
      expect(this.node._val).toBe(v)
      expect(this.node._n).toBe(n)
    })
  })
})
