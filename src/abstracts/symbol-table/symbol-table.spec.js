const ST = require('./symbol-table')

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
})
