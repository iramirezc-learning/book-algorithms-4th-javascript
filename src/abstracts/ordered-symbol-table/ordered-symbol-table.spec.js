const SymbolTable = require('../symbol-table/symbol-table')
const OST = require('./ordered-symbol-table')

describe('Unit Tests: Abstract OrderedSymbolTable', () => {
  beforeEach(() => {
    this.ost = new OST()
  })

  describe('OrderedSymbolTable instance', () => {
    it('should extend the abstract SymbolTable', () => {
      expect(this.ost).toBeInstanceOf(SymbolTable)
    })

    it('should implement the generic API', () => {
      const expectedAPI = [
        'size',
        'isEmpty',
        'contains',
        'rank',
        'put',
        'get',
        'delete',
        'min',
        'max',
        'floor',
        'ceiling',
        'select',
        'deleteMin',
        'deleteMax',
        'keys'
      ]

      expectedAPI.forEach((method) => {
        expect(this.ost[method]).toBeInstanceOf(Function)
      })
    })
  })

  describe('OrderedSymbolTable#size()', () => {
    it('should call the super class method `size`', () => {
      spyOn(SymbolTable.prototype, 'size').and.callThrough()

      this.ost.size()

      expect(SymbolTable.prototype.size).toHaveBeenCalledTimes(1)
    })

    it('should return 0 when initialized', () => {
      expect(this.ost.size()).toBe(0)
    })

    it('should return the value of _n', () => {
      this.ost._n = 1

      expect(this.ost.size()).toBe(1)
    })
  })

  describe('OrderedSymbolTable#size(lo, hi)', () => {
    it('should return 0 if `hi` is less than `lo`', () => {
      expect(this.ost.size('Z', 'A')).toBe(0)
    })

    it('should return the rank between `lo` and `hi` if `hi` exists in the OST', () => {
      const expectedSize = 5
      spyOn(this.ost, 'contains').and.returnValue(true)
      spyOn(this.ost, 'rank').and.callFake((k) => {
        if (k === 'A') return 0
        if (k === 'E') return 4
      })

      expect(this.ost.size('A', 'E')).toBe(expectedSize)
    })

    it('should return the rank between `lo` and `hi` even if `hi` key does not exist', () => {
      const expectedSize = 4
      spyOn(this.ost, 'contains').and.returnValue(false)
      spyOn(this.ost, 'rank').and.callFake((k) => {
        if (k === 'A') return 0
        if (k === 'E') return 4
      })

      expect(this.ost.size('A', 'E')).toBe(expectedSize)
    })
  })

  describe('OrderedSymbolTable#isEmpty()', () => {
    it('should return true when size is 0', () => {
      expect(this.ost.isEmpty()).toBeTrue()
    })

    it('should return false if the prop _n is greater than 0', () => {
      spyOn(this.ost, 'size').and.returnValue(1)

      expect(this.ost.isEmpty()).toBeFalse()
    })
  })

  describe('OrderedSymbolTable#contains(key)', () => {
    it('should return true if the get method returns a non-null value', () => {
      spyOn(this.ost, 'get').and.returnValue(0)

      expect(this.ost.contains('A')).toBeTrue()
    })

    it('should return false if the get method returns null as value', () => {
      spyOn(this.ost, 'get').and.returnValue(null)

      expect(this.ost.contains('A')).toBeFalse()
    })
  })

  describe('OrderedSymbolTable#rank(key)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.rank('A')).toThrowError(
        SyntaxError,
        'rank method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#put(key, val)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.put('A', 0)).toThrowError(
        SyntaxError,
        'put method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#get(key)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.get('A')).toThrowError(
        SyntaxError,
        'get method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#delete(key)', () => {
    it('should throw because is not implemented', () => {
      // SymbolTable has the default implementation for the delete method
      // this test will throw because the put method is not implemented
      expect(() => this.ost.delete('A')).toThrowError(
        SyntaxError,
        'put method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#min()', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.min()).toThrowError(
        SyntaxError,
        'min method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#max()', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.max()).toThrowError(
        SyntaxError,
        'max method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#floor(key)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.floor('A')).toThrowError(
        SyntaxError,
        'floor method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#ceiling(key)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.ceiling('A')).toThrowError(
        SyntaxError,
        'ceiling method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#select(k)', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.select(0)).toThrowError(
        SyntaxError,
        'select method is not implemented'
      )
    })
  })

  describe('OrderedSymbolTable#deleteMin()', () => {
    it('should call `delete` method with the min key returned from the `min` method', () => {
      const fakeMinKey = 'A'
      spyOn(this.ost, 'delete')
      spyOn(this.ost, 'min').and.returnValue(fakeMinKey)

      this.ost.deleteMin()

      expect(this.ost.min).toHaveBeenCalledTimes(1)
      expect(this.ost.delete).toHaveBeenCalledTimes(1)
      expect(this.ost.delete).toHaveBeenCalledWith(fakeMinKey)
    })
  })

  describe('OrderedSymbolTable#deleteMax()', () => {
    it('should call `delete` method with the max key returned from the `max` method', () => {
      const fakeMaxKey = 'Z'
      spyOn(this.ost, 'delete')
      spyOn(this.ost, 'max').and.returnValue(fakeMaxKey)

      this.ost.deleteMax()

      expect(this.ost.max).toHaveBeenCalledTimes(1)
      expect(this.ost.delete).toHaveBeenCalledTimes(1)
      expect(this.ost.delete).toHaveBeenCalledWith(fakeMaxKey)
    })
  })

  describe('OrderedSymbolTable#keys()', () => {
    it('should throw because is not implemented', () => {
      expect(() => this.ost.keys()).toThrowError(
        SyntaxError,
        'keys method is not implemented'
      )
    })
  })
})
