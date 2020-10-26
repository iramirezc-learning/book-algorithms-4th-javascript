const MaxPQ = require('./priority-queue-max')
const UNDEF = undefined

describe('Unit Tests: Maximum Priority Queue', () => {
  describe('instance', () => {
    describe('when initialized', () => {
      beforeEach(() => {
        this.max = 1
        this.pq = new MaxPQ(this.max)
      })

      it('should have a prop `_n` equal to `0`', () => {
        expect(this.pq._n).toBe(0)
      })

      it('should have a prop `_pq` which is an array of length `max`', () => {
        const expectedLength = this.max + 1
        const expectedArray = [UNDEF, UNDEF]

        expect(this.pq._pq.length).toBe(expectedLength)
        expect(this.pq._pq).toEqual(expectedArray)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_n', '_pq']

        this.pq.newProp = 'hello'

        const actualProps = Object.getOwnPropertyNames(this.pq)
        expect(actualProps).toEqual(expectedProps)
        expect(this.pq.newProp).toBeUndefined()
      })
    })

    describe('private less method', () => {
      beforeEach(() => {
        this.max = 2
        this.pq = new MaxPQ(this.max)
      })

      it('should return true when key at index `i` is less than key at index `j`', () => {
        this.pq._pq[1] = 10
        this.pq._pq[2] = 20

        expect(this.pq.less(1, 2)).toBeTrue()
      })

      it('should return false when key at index `i` is not less than key at index `j`', () => {
        this.pq._pq[1] = 'B'
        this.pq._pq[2] = 'A'

        expect(this.pq.less(1, 2)).toBeFalse()
      })

      it('should return false when key at index `i` is equal to key at index `j`', () => {
        this.pq._pq[1] = 'same'
        this.pq._pq[2] = 'same'

        expect(this.pq.less(1, 2)).toBeFalse()
      })
    })

    describe('private exch method', () => {
      beforeEach(() => {
        this.max = 2
        this.pq = new MaxPQ(this.max)
      })

      it('should interchange keys at indexes `i` and `j`', () => {
        this.pq._pq[1] = 'first key'
        this.pq._pq[2] = 'second key'

        this.pq.exch(1, 2)

        expect(this.pq._pq[1]).toBe('second key')
        expect(this.pq._pq[2]).toBe('first key')
      })
    })

    describe('private swim method', () => {
      beforeEach(() => {
        this.max = 5
        this.pq = new MaxPQ(this.max)
        this.pq._pq = [UNDEF, 'S', 'P', 'R', 'N', 'T']
      })

      it('should restore the heap order by swimming up the `T` key to the root', () => {
        const indexToSwim = 5 // 'T' violates the heap order
        const expectedOrder = [UNDEF, 'T', 'S', 'R', 'N', 'P']

        this.pq.swim(indexToSwim)

        expect(this.pq._pq).toEqual(expectedOrder)
      })
    })

    describe('private sink method', () => {
      beforeEach(() => {
        this.max = 5
        this.pq = new MaxPQ(this.max)
        this.pq._pq = [UNDEF, 'T', 'H', 'R', 'P', 'S']
        this.pq._n = 5 // important that size is updated
      })

      it('should restore the heap order by sinking down the `H` key', () => {
        const indexToSink = 2 // 'H' violates the heap order
        const expectedOrder = [UNDEF, 'T', 'S', 'R', 'P', 'H']

        this.pq.sink(indexToSink)

        expect(this.pq._pq).toEqual(expectedOrder)
      })
    })

    describe('public isEmpty method', () => {
      beforeEach(() => {
        this.max = 1
        this.pq = new MaxPQ(this.max)
      })

      it('should start empty', () => {
        expect(this.pq.isEmpty()).toBeTrue()
      })

      it('should return false when `_n` has changed', () => {
        this.pq._n = 1

        expect(this.pq.isEmpty()).toBeFalse()
      })
    })

    describe('public size method', () => {
      beforeEach(() => {
        this.max = 1
        this.pq = new MaxPQ(this.max)
      })

      it('should return a size of `0`', () => {
        expect(this.pq.size()).toBe(0)
      })

      it('should return the new size if updated', () => {
        this.pq._n++

        expect(this.pq.size()).toBe(1)
      })
    })

    describe('public insert method', () => {
      beforeEach(() => {
        this.max = 6
        this.pq = new MaxPQ(this.max)
      })

      it('should insert the first key as the root', () => {
        const key = 'Z'

        this.pq.insert(key)

        expect(this.pq._pq[1]).toEqual(key)
      })

      it('should increment the size by 1', () => {
        const originalSize = this.pq.size()
        const expectedSize = originalSize + 1

        this.pq.insert('A')

        expect(this.pq._n).toEqual(expectedSize)
      })

      it('should insert multiple keys keeping the heap order', () => {
        const keysToInsert = ['A', 'B', 'C', 'X', 'Y', 'Z']
        const expectedPQ = [UNDEF, 'Z', 'X', 'Y', 'A', 'C', 'B']

        keysToInsert.forEach(key => this.pq.insert(key))

        expect(this.pq._pq).toEqual(expectedPQ)
      })

      describe('implementations details', () => {
        it('should call private `exch` method x times', () => {
          spyOn(MaxPQ.prototype, 'exch').and.callThrough()
          const keysToInsert = ['A', 'B', 'C', 'X', 'Y', 'Z']
          const expectedCallsArgs = [
            [1, 2], // A <-> B
            [1, 3], // B <-> C
            [2, 4], // A <-> X
            [1, 2], // C <-> X
            [2, 5], // C <-> Y
            [1, 2], // X <-> Y
            [3, 6], // B <-> Z
            [1, 3] //  Y <-> Z
          ]

          keysToInsert.forEach(key => this.pq.insert(key))

          expect(this.pq.exch.calls.allArgs()).toEqual(expectedCallsArgs)
        })

        it('should mutate the `_pq` array after every call to `swim`', () => {
          const mutations = []
          const originalImplementation = this.pq.swim.bind(this.pq)
          spyOn(MaxPQ.prototype, 'swim').and.callFake((n) => {
            originalImplementation(n)
            mutations.push([...this.pq._pq])
          })
          const keysToInsert = ['A', 'B', 'C', 'X', 'Y', 'Z']
          const expectedMutations = [
            [UNDEF, 'A', UNDEF, UNDEF, UNDEF, UNDEF, UNDEF],
            [UNDEF, 'B', 'A', UNDEF, UNDEF, UNDEF, UNDEF],
            [UNDEF, 'C', 'A', 'B', UNDEF, UNDEF, UNDEF],
            [UNDEF, 'X', 'C', 'B', 'A', UNDEF, UNDEF],
            [UNDEF, 'Y', 'X', 'B', 'A', 'C', UNDEF],
            [UNDEF, 'Z', 'X', 'Y', 'A', 'C', 'B']
          ]

          keysToInsert.forEach(key => this.pq.insert(key))

          expect(mutations).toEqual(expectedMutations)
        })
      })
    })

    describe('public delMax method', () => {
      beforeEach(() => {
        this.max = 6
        this.pq = new MaxPQ(this.max)

        const keys = ['A', 'B', 'C', 'X', 'Y', 'Z']
        keys.forEach(k => this.pq.insert(k))
      })

      it('should return the maximum key `Z`', () => {
        const expectedMax = 'Z'

        expect(this.pq.delMax()).toBe(expectedMax)
      })

      it('should decrement the size of the PQ by 1', () => {
        const originalSize = this.pq.size()
        const expectedSize = originalSize - 1

        this.pq.delMax()

        expect(this.pq.size()).toBe(expectedSize)
      })

      it('should set the last key in the `_pq` array as `undefined`', () => {
        const indexOfLastKey = this.pq.size()

        this.pq.delMax()

        expect(this.pq._pq[indexOfLastKey]).toBeUndefined()
      })

      it('should delete multiple keys keeping the heap order', () => {
        let keysToRemove = 3
        const deletedKeys = []
        const expectedPQ = [UNDEF, 'C', 'A', 'B', UNDEF, UNDEF, UNDEF]
        const expectedDeletedKeys = ['Z', 'Y', 'X']

        while (keysToRemove--) {
          deletedKeys.push(this.pq.delMax())
        }

        expect(this.pq._pq).toEqual(expectedPQ)
        expect(deletedKeys).toEqual(expectedDeletedKeys)
      })

      describe('implementation details', () => {
        it('should call private `exch` method x times', () => {
          spyOn(MaxPQ.prototype, 'exch').and.callThrough()
          let keysToRemove = 3
          const expectedCallsArgs = [
            [1, 6], // Z <-> B
            [1, 3], // B <-> Y
            [1, 5], // Y <-> C
            [1, 2], // C <-> X
            [1, 4], // X <-> A
            [1, 2] //  A <-> C
          ]

          while (keysToRemove--) {
            this.pq.delMax()
          }

          expect(this.pq.exch.calls.allArgs()).toEqual(expectedCallsArgs)
        })

        it('should mutate the `_pq` array after every call to `swim`', () => {
          const mutations = []
          const originalImplementation = this.pq.sink.bind(this.pq)
          spyOn(MaxPQ.prototype, 'sink').and.callFake((n) => {
            originalImplementation(n)
            mutations.push([...this.pq._pq])
          })
          let keysToRemove = 3
          const expectedMutations = [
            [UNDEF, 'Y', 'X', 'B', 'A', 'C', UNDEF],
            [UNDEF, 'X', 'C', 'B', 'A', UNDEF, UNDEF],
            [UNDEF, 'C', 'A', 'B', UNDEF, UNDEF, UNDEF]
          ]

          while (keysToRemove--) {
            this.pq.delMax()
          }

          expect(mutations).toEqual(expectedMutations)
        })
      })
    })

    describe('public max method', () => {
      beforeEach(() => {
        this.max = 3
        this.pq = new MaxPQ(this.max)
      })

      it('should throw when PQ is empty', () => {
        expect(this.pq.max.bind(this.pq)).toThrowError('MaxPQ is empty.')
      })

      it('should return the current maximum key', () => {
        this.pq.insert('Z')
        this.pq.insert('A')
        this.pq.insert('M')

        expect(this.pq.max()).toBe('Z')

        this.pq.delMax()
        expect(this.pq.max()).toBe('M')

        this.pq.delMax()
        expect(this.pq.max()).toBe('A')
      })
    })
  })
})
