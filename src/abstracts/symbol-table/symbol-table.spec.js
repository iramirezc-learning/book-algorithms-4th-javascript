const ST = require('./symbol-table')
const Node = require('../node/node')

describe('Unit Tests: Abstract SymbolTable', () => {
  beforeEach(() => {
    this.st = new ST()
  })

  describe('SymbolTable instance', () => {
    it('should implement the generic API', () => {
      const expectedAPI = [
        'put', 'get', 'delete', 'contains', 'isEmpty', 'size', 'keys'
      ]

      expectedAPI.forEach(method => {
        expect(this.st[method]).toBeInstanceOf(Function)
      })
    })
  })

  describe('SymbolTable#keys()', () => {
    it('should return an iterator object to traverse all the table keys', () => {
      // assuming we insert the keys
      // in the following order ['A', 'B', 'C']
      const third = new Node('A', 0, null)
      const second = new Node('B', 1, third)
      const first = new Node('C', 2, second)
      this.st._first = first
      const expectedKeys = ['C', 'B', 'A']
      const iteratedKeys = []

      for (const k of this.st.keys()) {
        iteratedKeys.push(k)
      }

      expect(iteratedKeys).toEqual(expectedKeys)
    })
  })
})
