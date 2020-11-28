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
        expect(this.ost[method]).toBeInstanceOf(Function)
      })
    })
  })

  describe('OrderedSymbolTable#deleteMin()', () => {
    it('should call the `delete` method with the min key retrieved from the `min` method', () => {
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
    it('should call the `delete` method with the max key retrieved from the `max` method', () => {
      const fakeMaxKey = 'Z'
      spyOn(this.ost, 'delete')
      spyOn(this.ost, 'max').and.returnValue(fakeMaxKey)

      this.ost.deleteMax()

      expect(this.ost.max).toHaveBeenCalledTimes(1)
      expect(this.ost.delete).toHaveBeenCalledTimes(1)
      expect(this.ost.delete).toHaveBeenCalledWith(fakeMaxKey)
    })
  })

  describe('OrderedSymbolTable#size()', () => {
    describe('when lo & hi are provided', () => {
      it('should return 0 if `hi` is less than `lo`', () => {
        expect(this.ost.size('Z', 'A')).toBe(0)
      })

      it('should return the rank between `lo` and `hi` if `hi` exists in the OST', () => {
        const expectedSize = 5
        spyOn(this.ost, 'contains').and.returnValue(true)
        spyOn(this.ost, 'rank').and.callFake(k => {
          if (k === 'A') return 0
          if (k === 'E') return 4
        })

        expect(this.ost.size('A', 'E')).toBe(expectedSize)
      })

      it('should return the rank between `lo` and `hi` even if `hi` key does not exists', () => {
        const expectedSize = 4
        spyOn(this.ost, 'contains').and.returnValue(false)
        spyOn(this.ost, 'rank').and.callFake(k => {
          if (k === 'A') return 0
          if (k === 'E') return 4
        })

        expect(this.ost.size('A', 'E')).toBe(expectedSize)
      })
    })

    describe('when lo & hi are not provided', () => {
      it('should call the super class method `size`', () => {
        spyOn(SymbolTable.prototype, 'size')

        this.ost.size()

        expect(SymbolTable.prototype.size).toHaveBeenCalledTimes(1)
      })
    })
  })
})
