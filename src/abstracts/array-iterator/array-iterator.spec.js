const ArrayIterator = require('./array-iterator')

describe('Unit Tests: Abstract ArrayIterator Interface', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.array = [1, 2]
      this.n = 2
      this.iterator = new ArrayIterator(this.array, this.n)
    })

    describe('when initialized:', () => {
      it('should have a prop `_current` equal to `0`', () => {
        expect(this.iterator._current).toBe(0)
      })

      it('should have a prop `_a` equal to the array provided', () => {
        expect(this.iterator._a).toEqual(this.array)
        expect(this.iterator._a).not.toBe(this.array)
      })

      it('should have a prop `_n` equal to the n provided', () => {
        expect(this.iterator._n).toEqual(this.n)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_current', '_a', '_n']

        this.iterator.newProp = null

        const actualProps = Object.getOwnPropertyNames(this.iterator)
        expect(actualProps).toEqual(expectedProps)
        expect(this.iterator.newProp).toBeUndefined()
      })
    })

    describe('hasNext() method', () => {
      it('should return false when _current is 0', () => {
        this.iterator = new ArrayIterator([], 0)

        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })

      it('should return true when there is an element', () => {
        const result = this.iterator.hasNext()

        expect(result).toBeTrue()
      })

      it('should return false when there are no more elements to iterate', () => {
        this.iterator._current = this.iterator._n

        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })
    })

    describe('next() method', () => {
      it('should return an object with the item value of the _current element', () => {
        const result = this.iterator.next()

        expect(result).toEqual({
          value: this.array[0],
          done: false
        })
      })

      it('should increment _current on each call to next()', () => {
        this.iterator.next()

        expect(this.iterator._current).toBe(1)

        this.iterator.next()

        expect(this.iterator._current).toBe(2)
      })

      it('should return an object with `done` false when there are no more elements', () => {
        this.iterator.next()
        this.iterator.next()

        expect(this.iterator.next()).toEqual({ done: true })
      })
    })
  })
})
