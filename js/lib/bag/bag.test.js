const Bag = require('./bag')
const { Random } = require('../../util')

describe('Bag', () => {
  beforeEach(() => {
    this.bag = new Bag()
  })

  it('should have a prop `n` equal to `0`', () => {
    expect(this.bag.n).toBe(0)
  })

  it('should have a prop `first` equal to null', () => {
    expect(this.bag.first).toBeNull()
  })

  it('should start empty', () => {
    expect(this.bag.isEmpty()).toBeTrue()
  })

  it('should return a size of `0`', () => {
    expect(this.bag.size()).toBe(0)
  })

  it('should not be extensible', () => {
    const expectedProps = ['n', 'first']

    this.bag.newProp = 'hello'

    const actualProps = Object.getOwnPropertyNames(this.bag)
    expect(actualProps).toEqual(expectedProps)
    expect(this.bag.newProp).toBeUndefined()
  })

  describe('.add()', () => {
    describe('when inserting the first item', () => {
      beforeEach(() => {
        this.firstItem = Random.uniform(10)
      })

      it('should increment the n size to 1', () => {
        this.bag.add(this.firstItem)

        expect(this.bag.n).toBe(1)
        expect(this.bag.size()).toBe(1)
      })

      it('should set the first node to be an instance of Node', () => {
        this.bag.add(this.firstItem)

        expect(this.bag.first).not.toBeNull()
        expect(this.bag.first).toBeInstanceOf(Bag.Node)
      })

      it('should set first.item to be the item inserted', () => {
        this.bag.add(this.firstItem)

        expect(this.bag.first.item).toBe(this.firstItem)
      })

      it('should set first.next to be null', () => {
        this.bag.add(this.firstItem)

        expect(this.bag.first.next).toBeNull()
      })

      it('should not be empty', () => {
        this.bag.add(this.firstItem)

        expect(this.bag.isEmpty()).toBeFalse()
      })
    })

    describe('when inserting 2 items', () => {
      beforeEach(() => {
        const firstItem = Random.uniform(10)
        this.bag.add(firstItem)
        this.firstNode = this.bag.first
        this.secondItem = Random.uniform(10)
      })

      it('should increment the size to 2', () => {
        this.bag.add(this.secondItem)

        expect(this.bag.size()).toBe(2)
      })

      it('should set first to be a new Node with item equal to the new item', () => {
        this.bag.add(this.secondItem)

        expect(this.bag.first).toBeInstanceOf(Bag.Node)
        expect(this.bag.first.item).toBe(this.secondItem)
      })

      it('should set first.next to be the first item inserted', () => {
        this.bag.add(this.secondItem)

        expect(this.bag.first.next).toBe(this.firstNode)
      })
    })

    describe('when inserting `n` items', () => {
      it('should increment the size to `n`', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.bag.add(i)
        }

        expect(this.bag.size()).toBe(n)
      })

      it('should set first to be the last item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.bag.add(i)
        }

        expect(this.bag.first.item).toBe(n)
      })
    })
  })

  describe('[Symbol.iterator]', () => {
    it('should traverse the items in reverse order using `for...of` loop', () => {
      const items = [1, 2, 3, 4, 5]
      const expectedItems = [5, 4, 3, 2, 1]
      const iteratedItems = []

      for (const item of items) {
        this.bag.add(item)
      }

      for (const current of this.bag) {
        iteratedItems.push(current)
      }

      expect(iteratedItems).toEqual(expectedItems)
    })

    it('should traverse the items in reverse order using spread operator `...`', () => {
      const items = [1, 2, 3, 4, 5]
      const expectedItems = [5, 4, 3, 2, 1]

      for (const item of items) {
        this.bag.add(item)
      }

      expect([...this.bag]).toEqual(expectedItems)
    })
  })

  describe('Bag.Node', () => {
    beforeEach(() => {
      this.node = new Bag.Node()
    })

    it('should be initialized with null values', () => {
      expect(this.node.item).toBeNull()
      expect(this.node.next).toBeNull()
    })

    it('should not be extensible', () => {
      const expectedProps = ['item', 'next']

      this.node.newProp = null

      const actualProps = Object.getOwnPropertyNames(this.node)
      expect(actualProps).toEqual(expectedProps)
      expect(this.node.newProp).toBeUndefined()
    })
  })

  describe('Bag.NodeIterator', () => {
    const NodeIterator = Bag.NodeIterator

    beforeEach(() => {
      this.iterator = new NodeIterator()
    })

    it('should have a prop `current` equal to null by default', () => {
      expect(this.iterator.current).toBeNull()
    })

    it('should set `current` to be the node passed to the constructor', () => {
      const node = new Bag.Node()

      this.iterator = new NodeIterator(node)

      expect(this.iterator.current).toBe(node)
    })

    it('should not be extensible', () => {
      const expectedProps = ['current']

      this.iterator.newProp = null

      const actualProps = Object.getOwnPropertyNames(this.iterator)
      expect(actualProps).toEqual(expectedProps)
      expect(this.iterator.newProp).toBeUndefined()
    })

    describe('.hasNext()', () => {
      it('should return false when current is null', () => {
        expect(this.iterator.hasNext()).toBeFalse()
      })

      it('should return true when there is a node', () => {
        this.iterator = new NodeIterator(new Bag.Node())

        const result = this.iterator.hasNext()

        expect(result).toBeTrue()
      })

      it('should return false when there are no more elements to iterate', () => {
        const node = new Bag.Node()
        node.item = 1
        node.next = null
        this.iterator = new NodeIterator(node)
        this.iterator.current = this.iterator.current.next

        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })
    })

    describe('.next()', () => {
      it('should return an object with the item value of the current node', () => {
        const node = new Bag.Node()
        node.item = 1
        node.next = null
        this.iterator = new NodeIterator(node)

        const result = this.iterator.next()

        expect(result).toEqual({
          value: node.item,
          done: false
        })
      })

      it('should set current to the current.next', () => {
        const node1 = new Bag.Node()
        const node2 = new Bag.Node()
        node1.item = 1
        node1.next = node2
        node2.item = 2
        node2.next = null
        this.iterator = new NodeIterator(node1)

        this.iterator.next()

        expect(this.iterator.current).toBe(node2)

        this.iterator.next()

        expect(this.iterator.current).toBeNull()
      })

      it('should return an object with `done` false when there are no more elements', () => {
        const node1 = new Bag.Node()
        const node2 = new Bag.Node()
        node1.item = 1
        node1.next = node2
        node2.item = 2
        node2.next = null
        this.iterator = new NodeIterator(node1)

        this.iterator.next()
        this.iterator.next()

        expect(this.iterator.next()).toEqual({ done: true })
      })
    })
  })
})
