const BinarySearchST = require('./binary-search-st')
const { OrderedSymbolTable } = require('../../abstracts')

describe('Unit Tests: BinarySearchST', () => {
  beforeEach(() => {
    this.k = 5
    this.bsST = new BinarySearchST(this.k)
  })

  describe('BinarySearchST instance', () => {
    it('should extend OrderedSymbolTable', () => {
      expect(this.bsST).toBeInstanceOf(OrderedSymbolTable)
    })

    it('should have a prop `_keys` with length k', () => {
      expect(this.bsST._keys.length).toBe(this.k)
    })

    it('should have a prop `_vals` with length k', () => {
      expect(this.bsST._vals.length).toBe(this.k)
    })

    it('should not be extensible', () => {
      const expectedProps = ['comparator', '_n', '_keys', '_vals']

      this.bsST.newProp = 'that should be ignored'

      const actualProps = Object.getOwnPropertyNames(this.bsST)
      expect(actualProps).toEqual(expectedProps)
      expect(this.bsST.newProp).toBeUndefined()
    })
  })

  // Inherited methods
  // ==================================================

  describe('BinarySearchST#size()', () => {
    it('should return 0 when ST is empty', () => {
      expect(this.bsST.size()).toBe(0)
    })

    it('should return the new size when keys are inserted', () => {
      const keys = ['A', 'B', 'C', 'D', 'E', 'F']
      const expectedSize = keys.length

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST.size()).toBe(expectedSize)
    })
  })

  describe('BinarySearchST#isEmpty()', () => {
    it('should return true when ST has no keys', () => {
      expect(this.bsST.isEmpty()).toBeTrue()
    })

    it('should return false when ST has keys', () => {
      this.bsST.put('A', 0)

      expect(this.bsST.isEmpty()).toBeFalse()
    })
  })

  describe('BinarySearchST#contains(key)', () => {
    it('should return false when key does not exist in the ST', () => {
      expect(this.bsST.contains('A')).toBeFalse()
    })

    it('should return true when key exists in the ST', () => {
      this.bsST.put('A', 0)

      expect(this.bsST.contains('A')).toBeTrue()
    })
  })

  // Class methods
  // ==================================================

  describe('BinarySearchST#_resize(max)', () => {
    it('should copy the `_keys` and `_vals` arrays into larger arrays of `max` length', () => {
      this.bsST._n = 5
      this.bsST._keys = ['A', 'B', 'C', 'D', 'E']
      this.bsST._vals = [0, 1, 2, 3, 4]

      const expectedKeys = [
        ...this.bsST._keys,
        UNDEF,
        UNDEF,
        UNDEF,
        UNDEF,
        UNDEF
      ]
      const expectedVals = [
        ...this.bsST._vals,
        UNDEF,
        UNDEF,
        UNDEF,
        UNDEF,
        UNDEF
      ]

      this.bsST._resize(10)

      expect(this.bsST._keys).toEqual(expectedKeys)
      expect(this.bsST._vals).toEqual(expectedVals)
    })
  })

  describe('BinarySearchST#rank(key)', () => {
    beforeEach(() => {
      this.bsST._n = 5
      this.bsST._keys = ['A', 'B', 'C', 'D', 'E']
      this.bsST._vals = [0, 1, 2, 3, 4]
    })

    it('should return the rank for the min key', () => {
      expect(this.bsST.rank('A')).toBe(0)
    })

    it('should return the rank for the max key', () => {
      expect(this.bsST.rank('E')).toBe(4)
    })

    it('should return the rank for a key in the middle', () => {
      expect(this.bsST.rank('C')).toBe(2)
    })

    it('should return 0 for a key that is smaller than the actual min key', () => {
      const expectedRank = 0 // key '9' is smaller than 'A'
      expect(this.bsST.rank('9')).toBe(expectedRank)
    })

    it('should return the total keys for a key that is greater than all the other keys in the ST', () => {
      const expectedRank = 5 // all that are less than 'Z'
      expect(this.bsST.rank('Z')).toBe(expectedRank)
    })
  })

  describe('BinarySearchST#put(key, val)', () => {
    it('should insert the first key', () => {
      this.bsST.put('A', 0)

      expect(this.bsST._keys).toEqual(['A', UNDEF, UNDEF, UNDEF, UNDEF])
      expect(this.bsST._vals).toEqual([0, UNDEF, UNDEF, UNDEF, UNDEF])
    })

    it('should insert multiple keys in sorted order', () => {
      const keys = ['C', 'B', 'A']

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST._keys).toEqual(['A', 'B', 'C', UNDEF, UNDEF])
      expect(this.bsST._vals).toEqual([2, 1, 0, UNDEF, UNDEF])
    })

    it('should update the value of a duplicated key', () => {
      this.bsST.put('A', 0)
      this.bsST.put('B', 1)
      this.bsST.put('A', 2)

      expect(this.bsST._keys).toEqual(['A', 'B', UNDEF, UNDEF, UNDEF])
      expect(this.bsST._vals).toEqual([2, 1, UNDEF, UNDEF, UNDEF])
    })

    it('should increment the size of the ST', () => {
      expect(this.bsST.size()).toBe(0)

      this.bsST.put('A', 0)
      expect(this.bsST.size()).toBe(1)

      this.bsST.put('B', 1)
      expect(this.bsST.size()).toBe(2)

      this.bsST.put('C', 2)
      expect(this.bsST.size()).toBe(3)
    })

    it('should NOT increment the size of the ST when the key is duplicated', () => {
      this.bsST.put('A', 0)
      this.bsST.put('A', 1)
      this.bsST.put('A', 2)
      expect(this.bsST.size()).toBe(1)
    })

    it('should resize the `_keys` and `_vals` arrays doubling their length when they are full', () => {
      const expectedKeys = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        UNDEF,
        UNDEF,
        UNDEF,
        UNDEF
      ]
      const expectedVals = [5, 4, 3, 2, 1, 0, UNDEF, UNDEF, UNDEF, UNDEF]
      const keys = ['F', 'E', 'D', 'C', 'B', 'A']

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST._keys).toEqual(expectedKeys)
      expect(this.bsST._vals).toEqual(expectedVals)
    })
  })

  describe('BinarySearchST#get(key)', () => {
    it('should return null if the ST is empty', () => {
      expect(this.bsST.get('A')).toBe(null)
    })

    it('should return the value associated with the given key', () => {
      const keys = ['A', 'B', 'C']
      const targetKey = 'B'
      const expectedVal = 1

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST.get(targetKey)).toBe(expectedVal)
    })

    it('should return null if the given key does not exist', () => {
      const keys = ['A', 'B', 'C']
      const targetKey = 'Z'
      const expectedVal = null

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST.get(targetKey)).toBe(expectedVal)
    })
  })

  describe('BinarySearchST#delete(key)', () => {
    // TODO: method implementation
  })

  describe('BinarySearchST#min()', () => {
    it('should throw if the ST is empty', () => {
      expect(() => this.bsST.min()).toThrowError(ReferenceError)
    })

    it('should return the min inserted key', () => {
      const keys = ['Z', 'M', 'A']

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST.min()).toBe('A')
    })
  })

  describe('BinarySearchST#max()', () => {
    it('should throw if the ST is empty', () => {
      expect(() => this.bsST.max()).toThrowError(ReferenceError)
    })

    it('should return the max inserted key', () => {
      const keys = ['Z', 'M', 'A']

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST.max()).toBe('Z')
    })
  })

  describe('BinarySearchST#floor(key)', () => {
    // TODO: method implementation
  })

  describe('BinarySearchST#ceiling(key)', () => {
    beforeEach(() => {
      const keys = ['M', 'N', 'O']

      keys.forEach((k, v) => this.bsST.put(k, v))
    })

    it('should return the smallest key greater than the given key', () => {
      const targetKey = 'A'
      const expectedKey = 'M'

      expect(this.bsST.ceiling(targetKey)).toBe(expectedKey)
    })

    it('should return the smallest key equal to the given key', () => {
      const targetKey = 'N'
      const expectedKey = 'N'

      expect(this.bsST.ceiling(targetKey)).toBe(expectedKey)
    })

    it('should throw if the target key is greater than any of the keys inserted', () => {
      const targetKey = 'Z'

      expect(() => this.bsST.ceiling(targetKey)).toThrowError(RangeError)
    })
  })

  describe('BinarySearchST#select(k)', () => {
    it('should throw if the ST is empty', () => {
      expect(() => this.bsST.select(0)).toThrowError(ReferenceError)
    })

    it('should return the key in the rank k', () => {
      const keys = ['Z', 'M', 'A']

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(this.bsST.select(0)).toBe('A')
      expect(this.bsST.select(1)).toBe('M')
      expect(this.bsST.select(2)).toBe('Z')
    })

    it('should throw if the rank k is out of bounds of the array', () => {
      const keys = ['Z', 'M', 'A']

      keys.forEach((k, v) => this.bsST.put(k, v))

      expect(() => this.bsST.select(-1)).toThrowError(RangeError)
      expect(() => this.bsST.select(3)).toThrowError(RangeError)
    })
  })

  describe('BinarySearchST#deleteMin()', () => {
    // TODO: implement delete
    xit('should delete the min inserted key', () => {
      const keys = ['Z', 'M', 'A']
      const expectedKeys = ['M', 'Z', UNDEF, UNDEF, UNDEF]
      const expectedVals = [1, 0, UNDEF, UNDEF, UNDEF]
      keys.forEach((k, v) => this.bsST.put(k, v))

      this.bsST.deleteMin()

      expect(this.bsST._keys).toBe(expectedKeys)
      expect(this.bsST._vals).toBe(expectedVals)
    })
  })

  describe('BinarySearchST#deleteMax()', () => {
    // TODO: implement delete
    xit('should delete the max inserted key', () => {
      const keys = ['Z', 'M', 'A']
      const expectedKeys = ['A', 'M', UNDEF, UNDEF, UNDEF]
      const expectedVals = [2, 1, UNDEF, UNDEF, UNDEF]
      keys.forEach((k, v) => this.bsST.put(k, v))

      this.bsST.deleteMax()

      expect(this.bsST._keys).toBe(expectedKeys)
      expect(this.bsST._vals).toBe(expectedVals)
    })
  })

  describe('BinarySearchST#keys()', () => {
    it('should call itself with the min and max keys', () => {
      spyOn(BinarySearchST.prototype, 'keys').and.callThrough()
      spyOn(BinarySearchST.prototype, 'min').and.callThrough()
      spyOn(BinarySearchST.prototype, 'max').and.callThrough()
      const keys = ['C', 'B', 'A']
      keys.forEach((k, v) => this.bsST.put(k, v))

      this.bsST.keys()

      expect(this.bsST.keys).toHaveBeenCalledTimes(2)
      expect(this.bsST.keys).toHaveBeenCalledWith('A', 'C')
    })

    it('should iterate over all the keys inserted', () => {
      const keys = ['C', 'B', 'A']
      keys.forEach((k, v) => this.bsST.put(k, v))

      expect([...this.bsST.keys()]).toEqual(['A', 'B', 'C'])
    })
  })

  describe('BinarySearchST#keys(lo, hi)', () => {
    it('should return an iterator with the keys in [lo..hi] NOT including the hi key when does not exist in the ST', () => {
      const keys = ['E', 'C', 'B', 'A']
      keys.forEach((k, v) => this.bsST.put(k, v))

      expect([...this.bsST.keys('B', 'D')]).toEqual(['B', 'C'])
    })

    it('should return an iterator with the keys in [lo..hi] including the hi key when exists in the ST', () => {
      const keys = ['E', 'D', 'C', 'B', 'A']
      keys.forEach((k, v) => this.bsST.put(k, v))

      expect([...this.bsST.keys('B', 'D')]).toEqual(['B', 'C', 'D'])
    })
  })
})
