const ST = require('./symbol-table')

describe('Unit Tests: Abstract SymbolTable', () => {
  beforeEach(() => {
    this.st = new ST()
  })

  describe('SymbolTable instance', () => {
    it('should implement the generic API', () => {
      const expectedAPI = [
        'size',
        'isEmpty',
        'contains',
        'put',
        'get',
        'delete',
        'keys'
      ]

      expectedAPI.forEach((method) => {
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

  describe('SymbolTable#contains(key)', () => {
    it('should return true if the get method returns a non-null value', () => {
      spyOn(this.st, 'get').and.returnValue(0)

      expect(this.st.contains('A')).toBeTrue()
    })

    it('should return false if the get method returns null as value', () => {
      spyOn(this.st, 'get').and.returnValue(null)

      expect(this.st.contains('A')).toBeFalse()
    })
  })

  describe('SymbolTable#put(key, val)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.st.put('A', 0)).toThrowError(
        SyntaxError,
        'put method is not implemented'
      )
    })
  })

  describe('SymbolTable#get(key)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.st.get('A')).toThrowError(
        SyntaxError,
        'get method is not implemented'
      )
    })
  })

  describe('SymbolTable#delete(key)', () => {
    it('should call put method as the default implementation', () => {
      spyOn(this.st, 'put')
      const key = 'A'

      this.st.delete('A')

      expect(this.st.put).toHaveBeenCalledWith(key, null)
    })
  })

  describe('SymbolTable#keys()', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.st.keys()).toThrowError(
        SyntaxError,
        'keys method is not implemented'
      )
    })
  })
})
