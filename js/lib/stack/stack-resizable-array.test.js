const StackResizableArray = require('./stack-resizable-array')
const { Random } = require('../../util')

describe('StackResizableArray', () => {
  beforeEach(() => {
    this.stack = new StackResizableArray()
  })

  it('should have a prop `a` which is an array of length 1', () => {
    expect(this.stack.a).toBeInstanceOf(Array)
    expect(this.stack.a.length).toBe(1)
  })

  it('should have a prop `n` equal to `0`', () => {
    expect(this.stack.n).toBe(0)
  })

  it('should start empty', () => {
    expect(this.stack.isEmpty()).toBeTrue()
  })

  it('should return a size of `0`', () => {
    expect(this.stack.size()).toBe(0)
  })

  it('should not be extensible', () => {
    const expectedProps = ['a', 'n']

    this.stack.newProp = 'hello'

    const actualProps = Object.getOwnPropertyNames(this.stack)
    expect(actualProps).toEqual(expectedProps)
    expect(this.stack.newProp).toBeUndefined()
  })

  describe('.resize()', () => {
    it('should change `a` to be a new array', () => {
      const oldArray = this.stack.a
      const newLength = 5

      this.stack.resize(5)

      expect(this.stack.a).not.toBe(oldArray)
      expect(this.stack.a.length).toBe(newLength)
    })

    it('should keep the same size after resizing', () => {
      const sizeBeforeResizing = this.stack.size()

      this.stack.resize(500)

      expect(this.stack.size()).toBe(sizeBeforeResizing)
    })

    it('should keep the same elements after resizing', () => {
      this.stack.a = [1, 2, 3] // force elements
      this.stack.n = 3 // force length

      this.stack.resize(6)

      expect(this.stack.a).toEqual([1, 2, 3, undefined, undefined, undefined])
    })
  })

  describe('.push()', () => {
    describe('when inserting the first item', () => {
      beforeEach(() => {
        this.firstItem = Random.uniform(10)
      })

      it('should increment the n size to 1', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.n).toBe(1)
        expect(this.stack.size()).toBe(1)
      })

      it('should set a[0] be item inserted', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.a[0]).toBe(this.firstItem)
      })

      it('should not be empty', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.isEmpty()).toBeFalse()
      })

      it('should not increment the size of the `a` array', () => {
        this.stack.push(this.firstItem)

        expect(this.stack.a.length).toBe(1)
      })
    })

    describe('when inserting 2 items', () => {
      beforeEach(() => {
        const firstItem = Random.uniform(10)
        this.stack.push(firstItem)
        this.secondItem = Random.uniform(10)
      })

      it('should increment the size to 2', () => {
        this.stack.push(this.secondItem)

        expect(this.stack.size()).toBe(2)
      })

      it('should set a[1] to be the new item inserted', () => {
        this.stack.push(this.secondItem)

        expect(this.stack.a[1]).toBe(this.secondItem)
      })

      it('should double the length of `a`', () => {
        this.stack.push(this.secondItem)

        expect(this.stack.a.length).toBe(2)
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

      it('should set a[n - 1] to be the last item inserted', () => {
        const n = 1000

        for (let i = 1; i <= n; i++) {
          this.stack.push(i)
        }

        expect(this.stack.a[n - 1]).toBe(n)
      })

      it('should double the length of `a` when is full', () => {
        const n = 1025
        const expectedLength = 2048

        for (let i = 1; i <= n; i++) {
          this.stack.push(i)
        }

        expect(this.stack.a.length).toBe(expectedLength)
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

      it('should not resize the length of `a`', () => {
        this.stack.pop()

        expect(this.stack.a.length).toBe(1)
      })
    })

    describe('when removing the last item in the stack', () => {
      beforeEach(() => {
        // first item
        this.firstItem = Random.uniform(10)
        this.stack.push(this.firstItem)
        // second item
        this.secondItem = Random.uniform(10)
        this.stack.push(this.secondItem)
      })

      it('should return the last inserted (a[1]) in the stack', () => {
        const lastItem = this.stack.pop()

        expect(lastItem).toBe(this.secondItem)
      })

      it('should decrement the size to 1', () => {
        const initialSize = this.stack.size()

        this.stack.pop()

        expect(initialSize).toBe(2)
        expect(this.stack.size()).toBe(1)
      })

      it('should keep a length of 2 for `a`', () => {
        this.stack.pop()

        expect(this.stack.a.length).toBe(2)
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

      it('should reduce the length of `a`', () => {
        for (const item of [1, 2, 3, 4, 5]) {
          this.stack.push(item)
        }

        expect(this.stack.a.length).toBe(8)

        while (!this.stack.isEmpty()) {
          this.stack.pop()
        }

        expect(this.stack.a.length).toBe(2)
      })

      it('should left `a` with 2 undefined elements', () => {
        for (const item of [1, 2, 3, 4, 5]) {
          this.stack.push(item)
        }

        while (!this.stack.isEmpty()) {
          this.stack.pop()
        }

        expect(this.stack.a).toEqual([undefined, undefined])
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

  describe('StackResizableArray.ReversedArrayIterator', () => {
    const ReversedArrayIterator = StackResizableArray.ReversedArrayIterator

    beforeEach(() => {
      this.array = [1, 2]
      this.n = 2
      this.iterator = new ReversedArrayIterator(this.array, this.n)
    })

    it('should have a prop `current` equal to `n - 1`', () => {
      expect(this.iterator.current).toBe(this.n - 1)
    })

    it('should have a prop `a` equal to the array provided', () => {
      expect(this.iterator.a).toEqual(this.array)
      expect(this.iterator.a).not.toBe(this.array)
    })

    it('should not be extensible', () => {
      const expectedProps = ['current', 'a']

      this.iterator.newProp = null

      const actualProps = Object.getOwnPropertyNames(this.iterator)
      expect(actualProps).toEqual(expectedProps)
      expect(this.iterator.newProp).toBeUndefined()
    })

    describe('.hasNext()', () => {
      it('should return false when it has no items', () => {
        this.iterator = new ReversedArrayIterator([], 0)

        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })

      it('should return true when there is an element', () => {
        const result = this.iterator.hasNext()

        expect(result).toBeTrue()
      })

      it('should return false when there are no more elements to iterate', () => {
        this.iterator.current = -1

        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })
    })

    describe('.next()', () => {
      it('should return an object with the item value of the current element', () => {
        const result = this.iterator.next()

        expect(result).toEqual({
          value: this.array[this.n - 1],
          done: false
        })
      })

      it('should decrement current on each call to next()', () => {
        this.iterator.next()

        expect(this.iterator.current).toBe(0)

        this.iterator.next()

        expect(this.iterator.current).toBe(-1)
      })

      it('should return an object with `done` false when there are no more elements', () => {
        this.iterator.next()
        this.iterator.next()

        expect(this.iterator.next()).toEqual({ done: true })
      })
    })
  })
})
