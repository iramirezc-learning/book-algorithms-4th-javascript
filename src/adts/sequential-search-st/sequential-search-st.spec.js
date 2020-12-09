const SequentialSearchST = require('./sequential-search-st')
const { SymbolTable, Node } = require('../../abstracts')

describe('Unit Tests: SequentialSearchST', () => {
  beforeEach(() => {
    this.searchST = new SequentialSearchST()
  })

  describe('SequentialSearchST instance', () => {
    it('should extend SymbolTable', () => {
      expect(this.searchST).toBeInstanceOf(SymbolTable)
    })

    it('should have a prop `_first` equal to null', () => {
      expect(this.searchST._first).toBeNull()
    })

    it('should not be extensible', () => {
      const expectedProps = ['comparator', '_n', '_first']

      this.searchST.newProp = 'should be ignored'

      const actualProps = Object.getOwnPropertyNames(this.searchST)
      expect(actualProps).toEqual(expectedProps)
      expect(this.searchST.newProp).toBeUndefined()
    })
  })

  // Inherited methods
  // ==================================================

  describe('SequentialSearchST#size()', () => {
    it('should return 0 when ST is empty', () => {
      expect(this.searchST.size()).toBe(0)
    })

    it('should return the new size when keys are inserted', () => {
      const keys = ['A', 'B', 'C', 'D', 'E', 'F']
      const expectedSize = keys.length

      keys.forEach((k, v) => this.searchST.put(k, v))

      expect(this.searchST.size()).toBe(expectedSize)
    })
  })

  describe('SequentialSearchST#isEmpty()', () => {
    it('should return true when ST has no keys', () => {
      expect(this.searchST.isEmpty()).toBeTrue()
    })

    it('should return false when ST has keys', () => {
      this.searchST.put('A', 0)

      expect(this.searchST.isEmpty()).toBeFalse()
    })
  })

  describe('SequentialSearchST#contains(key)', () => {
    it('should return false when key does not exist in the ST', () => {
      expect(this.searchST.contains('A')).toBeFalse()
    })

    it('should return true when key exists in the ST', () => {
      this.searchST.put('A', 0)

      expect(this.searchST.contains('A')).toBeTrue()
    })
  })

  // Class methods
  // ==================================================

  describe('SequentialSearchST#put(key, val)', () => {
    it('should insert the first key correctly', () => {
      const key = 'A'
      const val = 0

      this.searchST.put(key, val)

      expect(this.searchST._first).toBeInstanceOf(Node)
      expect(this.searchST._first._key).toBe(key)
      expect(this.searchST._first._val).toBe(val)
      expect(this.searchST._first._next).toBe(null)
    })

    it('should insert a second key and make it to be the new first', () => {
      this.searchST.put('A', 0)
      this.searchST.put('B', 1)

      const first = this.searchST._first
      const second = first._next
      expect(first._key).toBe('B')
      expect(first._val).toBe(1)
      expect(second._key).toBe('A')
      expect(second._val).toBe(0)
    })

    it('should insert 3 keys correctly', () => {
      const keys = ['A', 'B', 'C']

      keys.forEach((k, v) => this.searchST.put(k, v))

      const first = this.searchST._first
      const second = first._next
      const third = second._next
      expect(first._key).toBe('C')
      expect(first._val).toBe(2)
      expect(second._key).toBe('B')
      expect(second._val).toBe(1)
      expect(third._key).toBe('A')
      expect(third._val).toBe(0)
    })

    it('should replace the value of an existing key', () => {
      const keys = ['A', 'B', 'A']

      keys.forEach((k, v) => this.searchST.put(k, v))

      const first = this.searchST._first
      const second = first._next
      expect(first._key).toBe('B')
      expect(first._val).toBe(1)
      expect(second._key).toBe('A')
      expect(second._val).toBe(2)
    })

    it('should increment the ST size', () => {
      expect(this.searchST.size()).toBe(0)

      this.searchST.put('A', 0)
      expect(this.searchST.size()).toBe(1)

      this.searchST.put('B', 1)
      expect(this.searchST.size()).toBe(2)

      this.searchST.put('C', 2)
      expect(this.searchST.size()).toBe(3)
    })

    it('should NOT increment the ST size when the key is duplicated', () => {
      this.searchST.put('A', 0)
      this.searchST.put('A', 1)
      this.searchST.put('A', 2)
      expect(this.searchST.size()).toBe(1)
    })
  })

  describe('SequentialSearchST#get(key)', () => {
    it('should return null if the ST is empty', () => {
      expect(this.searchST.get('A')).toBeNull()
    })

    it('should return the value of the inserted keys', () => {
      const keys = ['A', 'B', 'C']

      keys.forEach((k, v) => this.searchST.put(k, v))

      expect(this.searchST.get('A')).toBe(0)
      expect(this.searchST.get('B')).toBe(1)
      expect(this.searchST.get('C')).toBe(2)
    })

    it('should return null if the key is not found', () => {
      const keys = ['A', 'B', 'C']

      keys.forEach((k, v) => this.searchST.put(k, v))

      expect(this.searchST.get('D')).toBe(null)
    })
  })

  describe('SequentialSearchST#delete(key)', () => {
    // TODO: method implementation
  })

  describe('SequentialSearchST#keys()', () => {
    it('should iterate over all the keys inserted', () => {
      const keys = ['A', 'B', 'C']

      keys.forEach((k, v) => this.searchST.put(k, v))

      expect([...this.searchST.keys()]).toEqual(['C', 'B', 'A'])
    })
  })
})
