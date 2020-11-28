const Queue = require('./queue')
const { Node } = require('../../abstracts')
const { StdRandom } = require('../../libs')

describe('Unit Tests: FIFO Queue', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.queue = new Queue()
    })

    describe('when initialized:', () => {
      it('should have a prop `_n` equal to `0`', () => {
        expect(this.queue._n).toBe(0)
      })

      it('should have a prop `_first` equal to null', () => {
        expect(this.queue._first).toBeNull()
      })

      it('should have a prop `_last` equal to null', () => {
        expect(this.queue._last).toBeNull()
      })

      it('should start empty', () => {
        expect(this.queue.isEmpty()).toBeTrue()
      })

      it('should return a size of `0`', () => {
        expect(this.queue.size()).toBe(0)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_n', '_first', '_last']

        this.queue.newProp = 'hello'

        const actualProps = Object.getOwnPropertyNames(this.queue)
        expect(actualProps).toEqual(expectedProps)
        expect(this.queue.newProp).toBeUndefined()
      })
    })

    describe('when inserting the first item:', () => {
      beforeEach(() => {
        this.firstItem = StdRandom.uniform(10)
      })

      it('should increment the _n size to 1', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue._n).toBe(1)
        expect(this.queue.size()).toBe(1)
      })

      it('should set the _last element to be an instance of Node', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue._last).not.toBeNull()
        expect(this.queue._last).toBeInstanceOf(Node)
      })

      it('should set _last._item to be the item inserted', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue._last._item).toBe(this.firstItem)
      })

      it('should set _last._next to be null', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue._last._next).toBeNull()
      })

      it('should set the _first item to be _last', () => {
        this.queue.enqueue(this.firstItem)

        expect(this._first).toBe(this._last)
      })

      it('should not be empty', () => {
        this.queue.enqueue(this.firstItem)

        expect(this.queue.isEmpty()).toBeFalse()
      })
    })

    describe('when inserting 2 items:', () => {
      beforeEach(() => {
        const firstItem = StdRandom.uniform(10)
        this.queue.enqueue(firstItem)
        this.firstNode = this.queue._first
        this.oldLastNode = this.queue._last
        this.secondItem = StdRandom.uniform(10)
      })

      it('should increment the size to 2', () => {
        this.queue.enqueue(this.secondItem)

        expect(this.queue.size()).toBe(2)
      })

      it('should set _last to be a new Node with _item equal to the new item', () => {
        this.queue.enqueue(this.secondItem)

        expect(this.queue._last).toBeInstanceOf(Node)
        expect(this.queue._last._item).toBe(this.secondItem)
      })

      it('should set _last._next to be null', () => {
        this.queue.enqueue(this.secondItem)

        expect(this.queue._last._next).toBeNull()
      })

      it('should set the oldLastNode._next to be the new _last', () => {
        this.queue.enqueue(this.secondItem)

        expect(this.oldLastNode._next).toBe(this.queue._last)
      })
    })

    describe('when inserting `n` items:', () => {
      it('should increment the size to `n`', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.queue.enqueue(i)
        }

        expect(this.queue.size()).toBe(n)
      })

      it('should set _first to be the first item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.queue.enqueue(i)
        }

        expect(this.queue._first._item).toBe(1)
      })

      it('should set _last to be the last item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.queue.enqueue(i)
        }

        expect(this.queue._last._item).toBe(n)
      })
    })

    describe('when removing items in an empty queue:', () => {
      it('should throw an exception', () => {
        expect(() => {
          this.queue.dequeue()
        }).toThrowError('queue is empty')
      })
    })

    describe('when removing the only item in the queue:', () => {
      beforeEach(() => {
        this.firstItem = StdRandom.uniform(10)
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

      it('should set _first to be null', () => {
        this.queue.dequeue()

        expect(this.queue._first).toBeNull()
      })

      it('should set _last to be null', () => {
        this.queue.dequeue()

        expect(this.queue._last).toBeNull()
      })

      it('should return the dequeued item', () => {
        const removedItem = this.queue.dequeue()

        expect(removedItem).toBe(this.firstItem)
      })
    })

    describe('when removing the last item in the queue:', () => {
      beforeEach(() => {
        // first item
        this.firstItem = StdRandom.uniform(10)
        this.queue.enqueue(this.firstItem)
        this.firstNode = this.queue._first
        // second item
        this.secondItem = StdRandom.uniform(10)
        this.queue.enqueue(this.secondItem)
        this.secondNode = this.queue._last
      })

      it('should return the first item inserted (_first._item) in the queue', () => {
        const firstItem = this.queue.dequeue()

        expect(firstItem).toBe(this.firstItem)
      })

      it('should set _first to be the next element of the queue (_first._next)', () => {
        this.queue.dequeue()

        expect(this.queue._first).toBe(this.secondNode)
      })

      it('should decrement the size to 1', () => {
        const initialSize = this.queue.size()

        this.queue.dequeue()

        expect(initialSize).toBe(2)
        expect(this.queue.size()).toBe(1)
      })
    })

    describe('when inserting and removing `n` elements:', () => {
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

    describe('iterators:', () => {
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
  })
})
