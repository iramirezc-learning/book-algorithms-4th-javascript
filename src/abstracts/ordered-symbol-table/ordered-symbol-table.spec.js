const OST = require('./ordered-symbol-table')

describe('Unit Tests: Abstract OrderedSymbolTable', () => {
  beforeEach(() => {
    this.st = new OST()
  })

  describe('OrderedSymbolTable instance', () => {
    it('should implement the generic API', () => {
      const expectedAPI = [
        'put',
        'get',
        'delete',
        'contains',
        'isEmpty',
        'size',
        'min',
        'max',
        'floor',
        'ceiling',
        'rank',
        'select',
        'deleteMin',
        'deleteMax',
        'keys'
      ]

      expectedAPI.forEach(method => {
        expect(this.st[method]).toBeInstanceOf(Function)
      })
    })
  })
})
