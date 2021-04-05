const BinarySearchTreeST = require('./binary-search-tree-st')
const { OrderedSymbolTable } = require('../../abstracts')

const insertKeys = (keys, bst) => keys.forEach((k, v) => bst.put(k, v))

describe('Unit Tests: BinarySearchTreeST', () => {
  beforeEach(() => {
    this.keys = ['F', 'C', 'I', 'B', 'E', 'G', 'J']
    //                  F
    //               /    \
    //              C      I
    //             / \    / \
    //            B   E  G   J
    this.bst = new BinarySearchTreeST()
  })

  describe('BinarySearchTreeST instance', () => {
    it('should extend OrderedSymbolTable', () => {
      expect(this.bst).toBeInstanceOf(OrderedSymbolTable)
    })

    it('should have a prop `_root` equal to null', () => {
      expect(this.bst._root).toBeNull()
    })

    it('should not be extensible', () => {
      const expectedProps = ['comparator', '_n', '_root']

      this.bst.newProp = 'that should be ignored'

      const actualProps = Object.getOwnPropertyNames(this.bst)
      expect(actualProps).toEqual(expectedProps)
      expect(this.bst.newProp).toBeUndefined()
    })
  })

  // Inherited methods
  // ==================================================

  describe('BinarySearchTreeST#size()', () => {
    it('should return 0 when BST is empty', () => {
      expect(this.bst.size()).toBe(0)
    })

    it('should return the new size when keys are inserted', () => {
      insertKeys(this.keys, this.bst)

      expect(this.bst.size()).toBe(this.keys.length)
    })
  })

  describe('BinarySearchTreeST#isEmpty()', () => {
    it('should return true when the BST has no keys', () => {
      expect(this.bst.isEmpty()).toBeTrue()
    })

    it('should return false when the BST has keys', () => {
      this.bst.put('A', 0)

      expect(this.bst.isEmpty()).toBeFalse()
    })
  })

  describe('BinarySearchTreeST#contains(key)', () => {
    it('should return false when key does not exist in the BST', () => {
      expect(this.bst.contains('A')).toBeFalse()
    })

    it('should return true when key exists in the BST', () => {
      this.bst.put('A', 0)

      expect(this.bst.contains('A')).toBeTrue()
    })
  })

  // Class methods
  // ==================================================

  describe('BinarySearchTreeST#get(key)', () => {
    it('should return null if the BST is empty', () => {
      expect(this.bst.get('A')).toBe(null)
    })

    it('should return the value associated with the given key', () => {
      const targetKey = 'F'
      const expectedVal = this.keys.indexOf(targetKey)

      insertKeys(this.keys, this.bst)

      expect(this.bst.get(targetKey)).toBe(expectedVal)
    })

    it('should return null if the given key does not exist', () => {
      const targetKey = 'Z'

      insertKeys(this.keys, this.bst)

      expect(this.bst.get(targetKey)).toBeNull()
    })
  })

  describe('BinarySearchTreeST#put(key, val)', () => {
    it('should insert the first key', () => {
      this.bst.put('A', 0)

      expect({ ...this.bst._root }).toEqual({
        _key: 'A',
        _val: 0,
        _n: 1,
        _left: null,
        _right: null
      })
    })

    it('should insert multiple keys', () => {
      const keys = ['B', 'C', 'A']

      insertKeys(keys, this.bst)

      const root = { ...this.bst._root }
      const _left = { ...root._left }
      const _right = { ...root._right }

      expect(Object.assign(root, { _left, _right })).toEqual({
        _key: 'B',
        _val: 0,
        _n: 3,
        _left: {
          _key: 'A',
          _val: 2,
          _n: 1,
          _left: null,
          _right: null
        },
        _right: {
          _key: 'C',
          _val: 1,
          _n: 1,
          _left: null,
          _right: null
        }
      })
    })

    it('should update the value of a duplicated key', () => {
      this.bst.put('A', 0)
      this.bst.put('B', 1)
      this.bst.put('A', 2)

      expect(this.bst._root._val).toEqual(2)
    })

    it('should increment the size of the BST', () => {
      expect(this.bst.size()).toBe(0)

      this.bst.put('A', 0)
      expect(this.bst.size()).toBe(1)

      this.bst.put('B', 1)
      expect(this.bst.size()).toBe(2)

      this.bst.put('C', 2)
      expect(this.bst.size()).toBe(3)
    })

    it('should NOT increment the size of the BST when the key is duplicated', () => {
      this.bst.put('A', 0)
      this.bst.put('A', 1)
      this.bst.put('A', 2)

      expect(this.bst.size()).toBe(1)
    })
  })

  describe('BinarySearchTreeST#min()', () => {
    it('should throw if the BST is empty', () => {
      expect(() => this.bst.min()).toThrowError(ReferenceError)
    })

    it('should return the min inserted key', () => {
      insertKeys(this.keys, this.bst)

      expect(this.bst.min()).toBe('B')
    })
  })

  describe('BinarySearchTreeST#max()', () => {
    it('should throw if the BST is empty', () => {
      expect(() => this.bst.max()).toThrowError(ReferenceError)
    })

    it('should return the max inserted key', () => {
      insertKeys(this.keys, this.bst)

      expect(this.bst.max()).toBe('J')
    })
  })

  describe('BinarySearchTreeST#floor(key)', () => {
    beforeEach(() => insertKeys(this.keys, this.bst))

    it('should return the largest key in the BST that is less than the given key', () => {
      const targetKey = 'D'
      const expectedKey = 'C'

      expect(this.bst.floor(targetKey)).toBe(expectedKey)
    })

    it('should return the largest key in the BST that is equal to the given key', () => {
      const targetKey = 'B'
      const expectedKey = 'B'

      expect(this.bst.floor(targetKey)).toBe(expectedKey)
    })

    it('should throw if the target key is smaller than any of the keys in the BST', () => {
      const targetKey = 'A'

      expect(() => this.bst.floor(targetKey)).toThrowError(RangeError)
    })
  })

  describe('BinarySearchTreeST#ceiling(key)', () => {
    beforeEach(() => insertKeys(this.keys, this.bst))

    it('should return the smallest key in the BST that is greater than the given key', () => {
      const targetKey = 'H'
      const expectedKey = 'I'

      expect(this.bst.ceiling(targetKey)).toBe(expectedKey)
    })

    it('should return the smallest key in the BST that is equal to the given key', () => {
      const targetKey = 'J'
      const expectedKey = 'J'

      expect(this.bst.ceiling(targetKey)).toBe(expectedKey)
    })

    it('should throw if the target key is greater than any of the keys in the BST', () => {
      const targetKey = 'K'

      expect(() => this.bst.ceiling(targetKey)).toThrowError(RangeError)
    })
  })

  describe('BinarySearchTreeST#select(k)', () => {
    it('should throw if the BST is empty', () => {
      expect(() => this.bst.select(0)).toThrowError(RangeError)
    })

    it('should throw if the rank k is out of bounds of the BST', () => {
      this.bst.put('A', 0)

      expect(() => this.bst.select(-1)).toThrowError(RangeError)
      expect(() => this.bst.select(1)).toThrowError(RangeError)
    })

    it('should return the key in the rank k', () => {
      insertKeys(this.keys, this.bst)

      expect(this.bst.select(0)).toBe('B')
      expect(this.bst.select(1)).toBe('C')
      expect(this.bst.select(2)).toBe('E')
      expect(this.bst.select(3)).toBe('F')
      expect(this.bst.select(4)).toBe('G')
      expect(this.bst.select(5)).toBe('I')
      expect(this.bst.select(6)).toBe('J')
    })
  })

  describe('BinarySearchTreeST#rank(key)', () => {
    beforeEach(() => insertKeys(this.keys, this.bst))

    it('should return the rank for the min key', () => {
      expect(this.bst.rank('B')).toBe(0)
    })

    it('should return the rank for the middle key', () => {
      expect(this.bst.rank('F')).toBe(3)
    })

    it('should return the rank for the max key', () => {
      expect(this.bst.rank('J')).toBe(6)
    })

    it('should return 0 for a key that is smaller than the actual min key', () => {
      expect(this.bst.rank('A')).toBe(0)
    })

    it('should return the total keys for a key that is greater than all the other keys in the BST', () => {
      expect(this.bst.rank('K')).toBe(7)
    })
  })

  describe('BinarySearchTreeST#deleteMin()', () => {
    it('should delete the min key from the BST', () => {
      insertKeys(this.keys, this.bst)

      // safe validation before deletion
      expect(this.bst.size()).toBe(this.keys.length)
      expect(this.bst.min()).toBe('B')
      expect(this.bst.contains('B')).toBe(true)

      this.bst.deleteMin()

      expect(this.bst.size()).toBe(this.keys.length - 1)
      expect(this.bst.min()).toBe('C')
      expect(this.bst.contains('B')).toBe(false)
    })
  })

  describe('BinarySearchTreeST#deleteMax()', () => {
    it('should delete the max key from the BST', () => {
      insertKeys(this.keys, this.bst)

      // safe validation before deletion
      expect(this.bst.size()).toBe(this.keys.length)
      expect(this.bst.max()).toBe('J')
      expect(this.bst.contains('J')).toBe(true)

      this.bst.deleteMax()

      expect(this.bst.size()).toBe(this.keys.length - 1)
      expect(this.bst.max()).toBe('I')
      expect(this.bst.contains('J')).toBe(false)
    })
  })

  describe('BinarySearchTreeST#delete(key)', () => {
    beforeEach(() => insertKeys(this.keys, this.bst))

    it('should delete the min key from the BST', () => {
      // safe validation before deletion
      expect(this.bst.size()).toBe(this.keys.length)
      expect(this.bst.min()).toBe('B')
      expect(this.bst.contains('B')).toBe(true)

      this.bst.delete('B')

      expect(this.bst.size()).toBe(this.keys.length - 1)
      expect(this.bst.min()).toBe('C')
      expect(this.bst.contains('B')).toBe(false)
    })

    it('should delete the max key from the BST', () => {
      // safe validation before deletion
      expect(this.bst.size()).toBe(this.keys.length)
      expect(this.bst.max()).toBe('J')
      expect(this.bst.contains('J')).toBe(true)

      this.bst.delete('J')

      expect(this.bst.size()).toBe(this.keys.length - 1)
      expect(this.bst.max()).toBe('I')
      expect(this.bst.contains('J')).toBe(false)
    })

    it('should delete the root key from the BST', () => {
      // safe validation before deletion
      expect(this.bst.size()).toBe(this.keys.length)
      expect(this.bst.contains('F')).toBe(true)

      this.bst.delete('F')

      expect(this.bst.size()).toBe(this.keys.length - 1)
      expect(this.bst.contains('F')).toBe(false)
    })

    it('should delete the left child key from the root', () => {
      // safe validation before deletion
      expect(this.bst.size()).toBe(this.keys.length)
      expect(this.bst.contains('C')).toBe(true)
      expect(this.bst._root._left._key).toBe('C')

      this.bst.delete('C')

      expect(this.bst.size()).toBe(this.keys.length - 1)
      expect(this.bst.contains('C')).toBe(false)
      expect(this.bst._root._left._key).toBe('E')
    })

    it('should delete the right child key from the root', () => {
      // safe validation before deletion
      expect(this.bst.size()).toBe(this.keys.length)
      expect(this.bst.contains('I')).toBe(true)
      expect(this.bst._root._right._key).toBe('I')

      this.bst.delete('I')

      expect(this.bst.size()).toBe(this.keys.length - 1)
      expect(this.bst.contains('I')).toBe(false)
      expect(this.bst._root._right._key).toBe('J')
    })

    it('should delete all the nodes', () => {
      expect(this.bst.size()).toBe(this.keys.length)

      this.keys.forEach((k) => this.bst.delete(k))

      expect(this.bst.size()).toBe(0)
    })
  })

  describe('BinarySearchTreeST#keys()', () => {
    it('should call itself with the min and max keys', () => {
      spyOn(BinarySearchTreeST.prototype, 'keys').and.callThrough()
      spyOn(BinarySearchTreeST.prototype, 'min').and.callThrough()
      spyOn(BinarySearchTreeST.prototype, 'max').and.callThrough()

      insertKeys(this.keys, this.bst)

      this.bst.keys()

      expect(this.bst.keys).toHaveBeenCalledTimes(2)
      expect(this.bst.keys).toHaveBeenCalledWith('B', 'J')
    })

    it('should iterate over all the keys inserted', () => {
      const expectedKeys = ['B', 'C', 'E', 'F', 'G', 'I', 'J']
      insertKeys(this.keys, this.bst)

      expect([...this.bst.keys()]).toEqual(expectedKeys)
    })
  })

  describe('BinarySearchTreeST#keys(lo, hi)', () => {
    it('should return an iterator with the keys in [lo..hi] excluding the hi key when does NO exist in the BST', () => {
      const expectedKeys = ['E', 'F', 'G', 'I', 'J']
      insertKeys(this.keys, this.bst)

      expect([...this.bst.keys('E', 'K')]).toEqual(expectedKeys)
    })

    it('should return an iterator with the keys in [lo..hi] excluding the lo key when does NOT exist in the BST', () => {
      const expectedKeys = ['B', 'C', 'E', 'F', 'G']
      insertKeys(this.keys, this.bst)

      expect([...this.bst.keys('A', 'G')]).toEqual(expectedKeys)
    })

    it('should return an iterator with the keys in [lo..hi]', () => {
      const expectedKeys = ['C', 'E', 'F', 'G', 'I']
      insertKeys(this.keys, this.bst)

      expect([...this.bst.keys('C', 'I')]).toEqual(expectedKeys)
    })
  })
})
