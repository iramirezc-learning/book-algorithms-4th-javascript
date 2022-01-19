const Stack = require('./stack')
const { Random } = require('../../util')

describe('Stack', () => {
  beforeEach(() => {
    this.stack = new Stack()
  })

  it('should have a prop `n` equal to `0`', () => {
    expect(this.stack.n).toBe(0)
  })

  it('should have a prop `first` equal to null', () => {
    expect(this.stack.first).toBeNull()
  })

  it('should start empty', () => {
    expect(this.stack.isEmpty()).toBeTrue()
  })

  it('should return a size of `0`', () => {
    expect(this.stack.size()).toBe(0)
  })

  it('should not be extensible', () => {
    const expectedProps = ['n', 'first']

    // @ts-ignore
    this.stack.newProp = 'hello'

    const actualProps = Object.getOwnPropertyNames(this.stack)
    expect(actualProps).toEqual(expectedProps)
    // @ts-ignore
    expect(this.stack.newProp).toBeUndefined()
  })

  describe('.push()', () => {
    describe('when inserting the first item', () => {
      beforeEach(() => {
        // @ts-ignore
        this.firstItem = Random.uniform(10)
      })

      it('should increment the n size to 1', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.n).toBe(1)
        expect(this.stack.size()).toBe(1)
      })

      it('should set the first element to be an instance of Node', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.first).not.toBeNull()
        expect(this.stack.first).toBeInstanceOf(Stack.Node)
      })

      it('should set first.item to be the item inserted', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.first.item).toBe(this.firstItem)
      })

      it('should set first.next to be null', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.first.next).toBeNull()
      })

      it('should not be empty', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.isEmpty()).toBeFalse()
      })
    })

    describe('when inserting 2 items', () => {
      beforeEach(() => {
        // @ts-ignore
        const firstItem = Random.uniform(10)
        this.stack.push(firstItem)
        // @ts-ignore
        this.secondItem = Random.uniform(10)
      })

      it('should increment the size to 2', () => {
        this.stack.push(this.secondItem)

        expect(this.stack.size()).toBe(2)
      })

      it('should set first to be a new Node with item equal to the new item', () => {
        this.stack.push(this.secondItem)

        expect(this.stack.first).toBeInstanceOf(Stack.Node)
        expect(this.stack.first.item).toBe(this.secondItem)
      })

      it('should set first.next to be the first item inserted', () => {
        const firstNode = this.stack.first

        this.stack.push(this.secondItem)

        expect(this.stack.first.next).toBe(firstNode)
      })
    })

    describe('when inserting `n` items', () => {
      it('should increment the size to `n`', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.stack.push(i)
        }

        expect(this.stack.size()).toBe(n)
      })

      it('should set first to be the last item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.stack.push(i)
        }

        expect(this.stack.first.item).toBe(n)
      })
    })
  })

  describe('.pop()', () => {
    describe('when removing items in an empty stack', () => {
      it('should throw an exception', () => {
        expect(() => {
          this.stack.pop()
        }).toThrowError('Stack is empty.')
      })
    })

    describe('when removing the only item in the stack', () => {
      beforeEach(() => {
        // @ts-ignore
        this.firstItem = Random.uniform(10)
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

      it('should set first to be null', () => {
        this.stack.pop()

        expect(this.stack.first).toBeNull()
      })

      it('should return the removed item', () => {
        const removedItem = this.stack.pop()

        expect(removedItem).toBe(this.firstItem)
      })
    })

    describe('when removing the last item in the stack', () => {
      beforeEach(() => {
        // @ts-ignore
        this.firstItem = Random.uniform(10)
        this.stack.push(this.firstItem)
        this.firstNode = this.stack.first
        // @ts-ignore
        this.secondItem = Random.uniform(10)
        this.stack.push(this.secondItem)
        this.secondNode = this.stack.first
      })

      it('should return the last inserted (first.item) in the stack', () => {
        const lastItem = this.stack.pop()

        expect(lastItem).toBe(this.secondItem)
      })

      it('should set first to be the next element of the latest item (first.next)', () => {
        this.stack.pop()

        expect(this.stack.first).toBe(this.firstNode)
      })

      it('should decrement the size to 1', () => {
        const initialSize = this.stack.size()

        this.stack.pop()

        expect(initialSize).toBe(2)
        expect(this.stack.size()).toBe(1)
      })
    })

    describe('when inserting and removing `n` elements', () => {
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
  })

  describe('[Symbol.iterator]', () => {
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

  describe('Stack.Node', () => {
    beforeEach(() => {
      this.node = new Stack.Node()
    })

    it('should be initialized with null values', () => {
      expect(this.node.item).toBeNull()
      expect(this.node.next).toBeNull()
    })

    it('should not be extensible', () => {
      const expectedProps = ['item', 'next']

      // @ts-ignore
      this.node.newProp = null

      const actualProps = Object.getOwnPropertyNames(this.node)
      expect(actualProps).toEqual(expectedProps)
      // @ts-ignore
      expect(this.node.newProp).toBeUndefined()
    })
  })

  describe('Stack.NodeIterator', () => {
    const NodeIterator = Stack.NodeIterator

    it('should have a prop `current` equal to null by default', () => {
      const iterator = new NodeIterator()

      expect(iterator.current).toBeNull()
    })

    it('should set `current` to be the node passed to the constructor', () => {
      const node = new Stack.Node()
      const iterator = new NodeIterator(node)

      expect(iterator.current).toBe(node)
    })

    it('should not be extensible', () => {
      const expectedProps = ['current']
      const iterator = new NodeIterator()

      // @ts-ignore
      iterator.newProp = null

      const actualProps = Object.getOwnPropertyNames(iterator)
      expect(actualProps).toEqual(expectedProps)
      // @ts-ignore
      expect(iterator.newProp).toBeUndefined()
    })

    describe('.hasNext()', () => {
      it('should return false when current is null', () => {
        const iterator = new NodeIterator()

        expect(iterator.hasNext()).toBeFalse()
      })

      it('should return true when there is a node', () => {
        const iterator = new NodeIterator(new Stack.Node())

        const result = iterator.hasNext()

        expect(result).toBeTrue()
      })

      it('should return false when there are no more elements to iterate', () => {
        const node = new Stack.Node()
        node.item = 1
        node.next = null
        const iterator = new NodeIterator(node)
        iterator.current = iterator.current.next

        const result = iterator.hasNext()

        expect(result).toBeFalse()
      })
    })

    describe('.next()', () => {
      it('should return an object with the item value of the current node', () => {
        const node = new Stack.Node()
        node.item = 1
        node.next = null
        const iterator = new NodeIterator(node)

        const result = iterator.next()

        expect(result).toEqual({
          value: node.item,
          done: false
        })
      })

      it('should set current to the current.next', () => {
        const node1 = new Stack.Node()
        const node2 = new Stack.Node()
        node1.item = 1
        node1.next = node2
        node2.item = 2
        node2.next = null
        const iterator = new NodeIterator(node1)

        iterator.next()

        expect(iterator.current).toBe(node2)

        iterator.next()

        expect(iterator.current).toBeNull()
      })

      it('should return an object with `done` false when there are no more elements', () => {
        const node1 = new Stack.Node()
        const node2 = new Stack.Node()
        node1.item = 1
        node1.next = node2
        node2.item = 2
        node2.next = null
        const iterator = new NodeIterator(node1)

        iterator.next()
        iterator.next()

        expect(iterator.next()).toEqual({ done: true })
      })
    })
  })
})
