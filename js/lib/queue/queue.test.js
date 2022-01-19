const Queue = require('./queue')
const { Random } = require('../../util')

describe('Queue', () => {
  beforeEach(() => {
    this.queue = new Queue()
  })

  it('should have a prop `n` equal to `0`', () => {
    expect(this.queue.n).toBe(0)
  })

  it('should have a prop `first` equal to null', () => {
    expect(this.queue.first).toBeNull()
  })

  it('should have a prop `last` equal to null', () => {
    expect(this.queue.last).toBeNull()
  })

  it('should start empty', () => {
    expect(this.queue.isEmpty()).toBeTrue()
  })

  it('should return a size of `0`', () => {
    expect(this.queue.size()).toBe(0)
  })

  it('should not be extensible', () => {
    const expectedProps = ['n', 'first', 'last']

    // @ts-ignore
    this.queue.newProp = 'hello'

    const actualProps = Object.getOwnPropertyNames(this.queue)
    expect(actualProps).toEqual(expectedProps)
    // @ts-ignore
    expect(this.queue.newProp).toBeUndefined()
  })

  describe('.enqueue()', () => {
    describe('when inserting the first item', () => {
      beforeEach(() => {
        // @ts-ignore
        this.firstItem = Random.uniform(10)
      })

      it('should increment the n size to 1', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue.n).toBe(1)
        expect(this.queue.size()).toBe(1)
      })

      it('should set the last element to be an instance of Node', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue.last).not.toBeNull()
        expect(this.queue.last).toBeInstanceOf(Queue.Node)
      })

      it('should set last.item to be the item inserted', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue.last.item).toBe(this.firstItem)
      })

      it('should set last.next to be null', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue.last.next).toBeNull()
      })

      it('should set the first item to be last', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue.first).not.toBeNull()
        expect(this.queue.last).not.toBeNull()
        expect(this.queue.first).toBe(this.queue.last)
      })

      it('should not be empty', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue.isEmpty()).toBeFalse()
      })
    })

    describe('when inserting 2 items', () => {
      beforeEach(() => {
        // @ts-ignore
        const firstItem = Random.uniform(10)
        this.queue.enqueue(firstItem)
        // @ts-ignore
        this.secondItem = Random.uniform(10)
      })

      it('should increment the size to 2', () => {
        this.queue.enqueue(this.secondItem)

        expect(this.queue.size()).toBe(2)
      })

      it('should set last to be a new Node with item equal to the new item', () => {
        this.queue.enqueue(this.secondItem)

        expect(this.queue.last).toBeInstanceOf(Queue.Node)
        expect(this.queue.last.item).toBe(this.secondItem)
      })

      it('should set last.next to be null', () => {
        this.queue.enqueue(this.secondItem)

        expect(this.queue.last.next).toBeNull()
      })

      it('should set the oldLastNode.next to be the new last', () => {
        const oldLastNode = this.queue.last

        this.queue.enqueue(this.secondItem)

        expect(oldLastNode.next).toBe(this.queue.last)
      })
    })

    describe('when inserting `n` items', () => {
      it('should increment the size to `n`', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.queue.enqueue(i)
        }

        expect(this.queue.size()).toBe(n)
      })

      it('should set first to be the first item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.queue.enqueue(i)
        }

        expect(this.queue.first.item).toBe(1)
      })

      it('should set last to be the last item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.queue.enqueue(i)
        }

        expect(this.queue.last.item).toBe(n)
      })
    })
  })

  describe('.dequeue()', () => {
    describe('when removing items in an empty queue', () => {
      it('should throw an exception', () => {
        expect(() => {
          this.queue.dequeue()
        }).toThrowError('Queue is empty.')
      })
    })

    describe('when removing the only item in the queue', () => {
      beforeEach(() => {
        // @ts-ignore
        this.firstItem = Random.uniform(10)
        this.queue.enqueue(this.firstItem)
      })

      it('should empty the queue', () => {
        this.queue.dequeue()

        expect(this.queue.isEmpty()).toBeTrue()
      })

      it('should return a size of `0`', () => {
        this.queue.dequeue()

        expect(this.queue.size()).toBe(0)
      })

      it('should set first to be null', () => {
        this.queue.dequeue()

        expect(this.queue.first).toBeNull()
      })

      it('should set last to be null', () => {
        this.queue.dequeue()

        expect(this.queue.last).toBeNull()
      })

      it('should return the dequeued item', () => {
        const removedItem = this.queue.dequeue()

        expect(removedItem).toBe(this.firstItem)
      })
    })

    describe('when removing the last item in the queue', () => {
      beforeEach(() => {
        // @ts-ignore
        this.firstItem = Random.uniform(10)
        this.queue.enqueue(this.firstItem)
        this.firstNode = this.queue.first
        // @ts-ignore
        this.secondItem = Random.uniform(10)
        this.queue.enqueue(this.secondItem)
        this.secondNode = this.queue.last
      })

      it('should return the first item inserted (first.item) in the queue', () => {
        const firstItem = this.queue.dequeue()

        expect(firstItem).toBe(this.firstItem)
      })

      it('should set first to be the next element of the queue (first.next)', () => {
        this.queue.dequeue()

        expect(this.queue.first).toBe(this.secondNode)
      })

      it('should decrement the size to 1', () => {
        const initialSize = this.queue.size()

        this.queue.dequeue()

        expect(initialSize).toBe(2)
        expect(this.queue.size()).toBe(1)
      })
    })

    describe('when inserting and removing `n` elements', () => {
      it('should return the object in the same order of insertion', () => {
        const items = [1, 2, 3, 4, 5]
        const expectedItems = [1, 2, 3, 4, 5]
        const removedItems = []

        for (const item of items) {
          this.queue.enqueue(item)
        }

        while (!this.queue.isEmpty()) {
          removedItems.push(this.queue.dequeue())
        }

        expect(removedItems).toEqual(expectedItems)
      })
    })
  })

  describe('[Symbol.iterator]', () => {
    it('should traverse the items in order of insertion using `for...of` loop', () => {
      const items = [1, 2, 3, 4, 5]
      const expectedItems = [1, 2, 3, 4, 5]
      const iteratedItems = []

      for (const item of items) {
        this.queue.enqueue(item)
      }

      for (const current of this.queue) {
        iteratedItems.push(current)
      }

      expect(iteratedItems).toEqual(expectedItems)
    })

    it('should traverse the items in order of insertion using spread operator `...`', () => {
      const items = [1, 2, 3, 4, 5]
      const expectedItems = [1, 2, 3, 4, 5]

      for (const item of items) {
        this.queue.enqueue(item)
      }

      expect([...this.queue]).toEqual(expectedItems)
    })
  })

  describe('Queue.Node', () => {
    beforeEach(() => {
      this.node = new Queue.Node()
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

  describe('Queue.NodeIterator', () => {
    const NodeIterator = Queue.NodeIterator

    it('should have a prop `current` equal to null by default', () => {
      const iterator = new NodeIterator()

      expect(iterator.current).toBeNull()
    })

    it('should set `current` to be the node passed to the constructor', () => {
      const node = new Queue.Node()
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
        const iterator = new NodeIterator(new Queue.Node())

        const result = iterator.hasNext()

        expect(result).toBeTrue()
      })

      it('should return false when there are no more elements to iterate', () => {
        const node = new Queue.Node()
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
        const node = new Queue.Node()
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
        const node1 = new Queue.Node()
        const node2 = new Queue.Node()
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
        const node1 = new Queue.Node()
        const node2 = new Queue.Node()
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
