const Stack = require('./stack')
const Node = require('../node/node')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Stack ADT', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.stack = new Stack()
    })

    describe('when initialized:', () => {
      it('should have a prop `_n` equal to `0`', () => {
        expect(this.stack._n).toBe(0)
      })

      it('should have a prop `_first` equal to null', () => {
        expect(this.stack._first).toBeNull()
      })

      it('should start empty', () => {
        expect(this.stack.isEmpty()).toBeTrue()
      })

      it('should return a size of `0`', () => {
        expect(this.stack.size()).toBe(0)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_n', '_first']

        this.stack.newProp = 'hello'

        const actualProps = Object.getOwnPropertyNames(this.stack)
        expect(actualProps).toEqual(expectedProps)
        expect(this.stack.newProp).toBeUndefined()
      })
    })

    describe('when inserting the first item:', () => {
      beforeEach(() => {
        this.firstItem = StdRandom.uniform(10)
      })

      it('should increment the _n size to 1', () => {
        this.stack.push(this.firstItem)

        expect(this.stack._n).toBe(1)
        expect(this.stack.size()).toBe(1)
      })

      it('should set the _first element to be an instance of Node', () => {
        this.stack.push(this.firstItem)

        expect(this.stack._first).not.toBeNull()
        expect(this.stack._first).toBeInstanceOf(Node)
      })

      it('should set _first._item to be the item inserted', () => {
        this.stack.push(this.firstItem)

        expect(this.stack._first._item).toBe(this.firstItem)
      })

      it('should set _first._next to be null', () => {
        this.stack.push(this.firstItem)

        expect(this.stack._first._next).toBeNull()
      })

      it('should not be empty', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.isEmpty()).toBeFalse()
      })
    })

    describe('when inserting 2 items:', () => {
      beforeEach(() => {
        const firstItem = StdRandom.uniform(10)
        this.stack.push(firstItem)
        this.firstNode = this.stack._first
        this.secondItem = StdRandom.uniform(10)
      })

      it('should increment the size to 2', () => {
        this.stack.push(this.secondItem)

        expect(this.stack.size()).toBe(2)
      })

      it('should set _first to be a new Node with _item equal to the new item', () => {
        this.stack.push(this.secondItem)

        expect(this.stack._first).toBeInstanceOf(Node)
        expect(this.stack._first._item).toBe(this.secondItem)
      })

      it('should set _first._next to be the first item inserted', () => {
        this.stack.push(this.secondItem)

        expect(this.stack._first._next).toBe(this.firstNode)
      })
    })

    describe('when inserting `n` items:', () => {
      it('should increment the size to `n`', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.stack.push(i)
        }

        expect(this.stack.size()).toBe(n)
      })

      it('should set _first to be the last item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.stack.push(i)
        }

        expect(this.stack._first._item).toBe(n)
      })
    })

    describe('when removing items in an empty stack:', () => {
      it('should throw an exception', () => {
        expect(() => {
          this.stack.pop()
        }).toThrowError('stack is empty')
      })
    })

    describe('when removing the only item in the stack:', () => {
      beforeEach(() => {
        this.firstItem = StdRandom.uniform(10)
        this.stack.push(this.firstItem)
      })

      it('should empty the stack', () => {
        this.stack.pop()

        expect(this.stack.isEmpty()).toBeTrue()
      })

      it('should return a size of `0`', () => {
        this.stack.pop()

        expect(this.stack.size()).toBe(0)
      })
    })

    describe('when removing the last item in the stack:', () => {
      beforeEach(() => {
        // first item
        this.firstItem = StdRandom.uniform(10)
        this.stack.push(this.firstItem)
        this.firstNode = this.stack._first
        // second item
        this.secondItem = StdRandom.uniform(10)
        this.stack.push(this.secondItem)
        this.secondNode = this.stack._first
      })

      it('should return the last inserted (_first._item) in the stack', () => {
        const lastItem = this.stack.pop()

        expect(lastItem).toBe(this.secondItem)
      })

      it('should set _first to be the next element of the latest item (_first._next)', () => {
        this.stack.pop()

        expect(this.stack._first).toBe(this.firstNode)
      })

      it('should decrement the size to 1', () => {
        const initialSize = this.stack.size()

        this.stack.pop()

        expect(initialSize).toBe(2)
        expect(this.stack.size()).toBe(1)
      })
    })

    describe('when inserting and removing `n` elements:', () => {
      it('should reverse the elements', () => {
        const items = [1, 2, 3, 4, 5]
        const expectedItems = [5, 4, 3, 2, 1]
        const removedItems = []

        for (const item of items) {
          this.stack.push(item)
        }

        while (!this.stack.isEmpty()) {
          removedItems.push(this.stack.pop())
        }

        expect(removedItems).toEqual(expectedItems)
      })
    })

    describe('iterators:', () => {
      it('should traverse the items in reverse order using `for...of` loop', () => {
        const items = [1, 2, 3, 4, 5]
        const expectedItems = [5, 4, 3, 2, 1]
        const iteratedItems = []

        for (const item of items) {
          this.stack.push(item)
        }

        for (const current of this.stack) {
          iteratedItems.push(current)
        }

        expect(iteratedItems).toEqual(expectedItems)
      })

      it('should traverse the items in reverse order using spread operator `...`', () => {
        const items = [1, 2, 3, 4, 5]
        const expectedItems = [5, 4, 3, 2, 1]

        for (const item of items) {
          this.stack.push(item)
        }

        expect([...this.stack]).toEqual(expectedItems)
      })
    })
  })
})
