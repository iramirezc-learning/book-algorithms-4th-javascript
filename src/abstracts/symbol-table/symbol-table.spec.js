const ST = require('./symbol-table')
const Node = require('../node/node')

describe('Unit Tests: Abstract SymbolTable', () => {
  beforeEach(() => {
    this.st = new ST()
  })

  describe('SymbolTable instance', () => {
    it('should implement the generic API', () => {
      const expectedAPI = [
        'put', 'get', 'delete', 'isEmpty', 'size', 'contains', 'keys'
      ]

      expectedAPI.forEach(method => {
        expect(this.st[method]).toBeInstanceOf(Function)
      })
    })
  })

  describe('SymbolTable#size()', () => {
    it('should return 0 when initialized', () => {
      expect(this.st.size()).toBe(0)
    })

    it('should return the value of _n', () => {
      this.st._n = 1

      expect(this.st.size()).toBe(1)
    })
  })

  describe('SymbolTable#isEmpty()', () => {
    it('should return true when size is 0', () => {
      expect(this.st.isEmpty()).toBeTrue()
    })

    it('should return false if the prop _n is greater than 0', () => {
      spyOn(this.st, 'size').and.returnValue(1)

      expect(this.st.isEmpty()).toBeFalse()
    })
  })

  describe('SymbolTable#contains()', () => {
    it('should return true if the get method returns a non-null value', () => {
      spyOn(this.st, 'get').and.returnValue(0)

      expect(this.st.contains('A')).toBeTrue()
    })

    it('should return false if the get method returns null as value', () => {
      spyOn(this.st, 'get').and.returnValue(null)

      expect(this.st.contains('A')).toBeFalse()
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
