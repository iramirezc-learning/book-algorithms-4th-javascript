const Iterator = require('./iterator')
const Node = require('../../adts/node/node')

describe('Unit Tests: Abstract Iterator Interface', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.iterator = new Iterator()
    })

    describe('when initialized:', () => {
      it('should have a prop `_current` equal to null by default', () => {
        expect(this.iterator._current).toBeNull()
      })

      it('should set _current to be the element passed to the constructor', () => {
        const element = new Node()

        this.iterator = new Iterator(element)

        expect(this.iterator._current).toBe(element)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_current']

        this.iterator.newProp = null

        const actualProps = Object.getOwnPropertyNames(this.iterator)
        expect(actualProps).toEqual(expectedProps)
        expect(this.iterator.newProp).toBeUndefined()
      })
    })

    describe('hasNext() method', () => {
      it('should return false when _current is null', () => {
        expect(this.iterator.hasNext()).toBeFalse()
      })

      it('should return true when there is an element', () => {
        this.iterator = new Iterator(new Node())

        const result = this.iterator.hasNext()

        expect(result).toBeTrue()
      })

      it('should return false when there are no more elements to iterate', () => {
        const node1 = new Node()
        node1._item = 1
        node1._next = null

        this.iterator = new Iterator(node1)
        this.iterator._current = this.iterator._current._next
        const result = this.iterator.hasNext()

        expect(result).toBeFalse()
      })
    })

    describe('next() method', () => {
      it('should return an object with the item value of the _current element', () => {
        const node1 = new Node()
        node1._item = 1
        node1._next = null

        this.iterator = new Iterator(node1)
        const result = this.iterator.next()

        expect(result).toEqual({
          value: node1._item,
          done: false
        })
      })

      it('should set _current to the the _current._next', () => {
        const node1 = new Node()
        const node2 = new Node()
        node1._item = 1
        node1._next = node2
        node2._item = 2
        node2._next = null

        this.iterator = new Iterator(node1)

        this.iterator.next()

        expect(this.iterator._current).toBe(node2)

        this.iterator.next()

        expect(this.iterator._current).toBeNull()
      })

      it('should return an object with `done` false when there are no more elements', () => {
        const node1 = new Node()
        const node2 = new Node()
        node1._item = 1
        node1._next = node2
        node2._item = 2
        node2._next = null

        this.iterator = new Iterator(node1)
        this.iterator.next()
        this.iterator.next()

        expect(this.iterator.next()).toEqual({ done: true })
      })
    })
  })
})
