const Bag = require('./bag')
const { Node } = require('../../abstracts')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Bag ADT', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.bag = new Bag()
    })

    describe('when initialized:', () => {
      it('should have a prop `_n` equal to `0`', () => {
        expect(this.bag._n).toBe(0)
      })

      it('should have a prop `_first` equal to null', () => {
        expect(this.bag._first).toBeNull()
      })

      it('should start empty', () => {
        expect(this.bag.isEmpty()).toBeTrue()
      })

      it('should return a size of `0`', () => {
        expect(this.bag.size()).toBe(0)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_n', '_first']

        this.bag.newProp = 'hello'

        const actualProps = Object.getOwnPropertyNames(this.bag)
        expect(actualProps).toEqual(expectedProps)
        expect(this.bag.newProp).toBeUndefined()
      })
    })

    describe('when inserting the first item:', () => {
      beforeEach(() => {
        this.firstItem = StdRandom.uniform(10)
      })

      it('should increment the _n size to 1', () => {
        this.bag.add(this.firstItem)

        expect(this.bag._n).toBe(1)
        expect(this.bag.size()).toBe(1)
      })

      it('should set the _first element to be an instance of Node', () => {
        this.bag.add(this.firstItem)

        expect(this.bag._first).not.toBeNull()
        expect(this.bag._first).toBeInstanceOf(Node)
      })

      it('should set _first._item to be the item inserted', () => {
        this.bag.add(this.firstItem)

        expect(this.bag._first._item).toBe(this.firstItem)
      })

      it('should set _first._next to be null', () => {
        this.bag.add(this.firstItem)

        expect(this.bag._first._next).toBeNull()
      })

      it('should not be empty', () => {
        this.bag.add(this.firstItem)

        expect(this.bag.isEmpty()).toBeFalse()
      })
    })

    describe('when inserting 2 items:', () => {
      beforeEach(() => {
        const firstItem = StdRandom.uniform(10)
        this.bag.add(firstItem)
        this.firstNode = this.bag._first
        this.secondItem = StdRandom.uniform(10)
      })

      it('should increment the size to 2', () => {
        this.bag.add(this.secondItem)

        expect(this.bag.size()).toBe(2)
      })

      it('should set _first to be a new Node with _item equal to the new item', () => {
        this.bag.add(this.secondItem)

        expect(this.bag._first).toBeInstanceOf(Node)
        expect(this.bag._first._item).toBe(this.secondItem)
      })

      it('should set _first._next to be the first item inserted', () => {
        this.bag.add(this.secondItem)

        expect(this.bag._first._next).toBe(this.firstNode)
      })
    })

    describe('when inserting `n` items:', () => {
      it('should increment the size to `n`', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.bag.add(i)
        }

        expect(this.bag.size()).toBe(n)
      })

      it('should set _first to be the last item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.bag.add(i)
        }

        expect(this.bag._first._item).toBe(n)
      })
    })

    describe('iterators:', () => {
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
  })
})
