const ReversedArrayIterator = require('./reversed-array-iterator')

describe('Unit Tests: Abstract ReversedArrayIterator Interface', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.array = [1, 2]
      this.n = 2
      this.iterator = new ReversedArrayIterator(this.array, this.n)
    })

    describe('when initialized:', () => {
      it('should have a prop `_current` equal to `n - 1`', () => {
        expect(this.iterator._current).toBe(this.n - 1)
      })

      it('should have a prop `_a` equal to the array provided', () => {
        expect(this.iterator._a).toEqual(this.array)
        expect(this.iterator._a).not.toBe(this.array)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_current', '_a']

        this.iterator.newProp = null

        const actualProps = Object.getOwnPropertyNames(this.iterator)
        expect(actualProps).toEqual(expectedProps)
        expect(this.iterator.newProp).toBeUndefined()
      })
    })

    describe('hasNext() method', () => {
      it('should return false when no items', () => {
        this.iterator = new ReversedArrayIterator([], 0)

        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })

      it('should return true when there is an element', () => {
        const result = this.iterator.hasNext()

        expect(result).toBeTrue()
      })

      it('should return false when there are no more elements to iterate', () => {
        this.iterator._current = -1

        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })
    })

    describe('next() method', () => {
      it('should return an object with the item value of the _current element', () => {
        const result = this.iterator.next()

        expect(result).toEqual({
          value: this.array[this.n - 1],
          done: false
        })
      })

      it('should decrement _current on each call to next()', () => {
        this.iterator.next()

        expect(this.iterator._current).toBe(0)

        this.iterator.next()

        expect(this.iterator._current).toBe(-1)
      })

      it('should return an object with `done` false when there are no more elements', () => {
        this.iterator.next()
        this.iterator.next()

        expect(this.iterator.next()).toEqual({ done: true })
      })
    })
  })
})
