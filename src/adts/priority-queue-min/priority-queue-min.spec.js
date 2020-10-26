const MinPQ = require('./priority-queue-min')

describe('Unit Tests: Minimum Priority Queue', () => {
  describe('instance', () => {
    describe('when initialized', () => {
      beforeEach(() => {
        this.max = 1
        this.pq = new MinPQ(this.max)
      })

      it('should have a prop `_n` equal to `0`', () => {
        expect(this.pq._n).toBe(0)
      })

      it('should have a prop `_pq` which is an array of length `max`', () => {
        const expectedLength = this.max + 1
        const expectedArray = [
          undefined,
          undefined
        ]

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
        this.pq = new MinPQ(this.max)
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
        this.pq = new MinPQ(this.max)
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
        this.pq = new MinPQ(this.max)
        this.pq._pq = [undefined, 'B', 'C', 'D', 'E', 'A']
      })

      it('should restore the heap order by swimming up the `A` key to the root', () => {
        const indexToSwim = 5 // 'A' violates the heap order
        const expectedOrder = [undefined, 'A', 'B', 'D', 'E', 'C']

        this.pq.swim(indexToSwim)

        expect(this.pq._pq).toEqual(expectedOrder)
      })
    })

    describe('private sink method', () => {
      beforeEach(() => {
        this.max = 5
        this.pq = new MinPQ(this.max)
        this.pq._pq = [undefined, 'Z', 'A', 'B', 'C', 'D']
        this.pq._n = 6 // important that size is updated
      })

      it('should restore the heap order by sinking down the `Z` key', () => {
        const indexToSink = 1 // 'Z' violates the heap order
        const expectedOrder = [undefined, 'A', 'C', 'B', 'Z', 'D']

        this.pq.sink(indexToSink)

        expect(this.pq._pq).toEqual(expectedOrder)
      })
    })

    describe('public isEmpty method', () => {
      beforeEach(() => {
        this.max = 1
        this.pq = new MinPQ(this.max)
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
        this.pq = new MinPQ(this.max)
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
        this.pq = new MinPQ(this.max)
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
        const keysToInsert = ['Z', 'Y', 'X', 'C', 'B', 'A']
        const expectedPQ = [undefined, 'A', 'C', 'B', 'Z', 'X', 'Y']

        keysToInsert.forEach(key => this.pq.insert(key))

        expect(this.pq._pq).toEqual(expectedPQ)
      })

      describe('implementations details', () => {
        it('should call private `exch` method x times', () => {
          spyOn(MinPQ.prototype, 'exch').and.callThrough()
          const keysToInsert = ['Z', 'Y', 'X', 'C', 'B', 'A']
          const expectedCallsArgs = [
            [1, 2], // Z <-> Y
            [1, 3], // Y <-> X
            [2, 4], // Z <-> C
            [1, 2], // X <-> C
            [2, 5], // X <-> B
            [1, 2], // C <-> B
            [3, 6], // Y <-> A
            [1, 3] //  B <-> A
          ]

          keysToInsert.forEach(key => this.pq.insert(key))

          expect(this.pq.exch.calls.allArgs()).toEqual(expectedCallsArgs)
        })

        it('should mutate the `_pq` array after every call to `swim`', () => {
          const mutations = []
          const originalImplementation = this.pq.swim.bind(this.pq)
          spyOn(MinPQ.prototype, 'swim').and.callFake((n) => {
            originalImplementation(n)
            mutations.push([...this.pq._pq])
          })
          const keysToInsert = ['Z', 'Y', 'X', 'C', 'B', 'A']
          const expectedMutations = [
            [undefined, 'Z', undefined, undefined, undefined, undefined, undefined],
            [undefined, 'Y', 'Z', undefined, undefined, undefined, undefined],
            [undefined, 'X', 'Z', 'Y', undefined, undefined, undefined],
            [undefined, 'C', 'X', 'Y', 'Z', undefined, undefined],
            [undefined, 'B', 'C', 'Y', 'Z', 'X', undefined],
            [undefined, 'A', 'C', 'B', 'Z', 'X', 'Y']
          ]

          keysToInsert.forEach(key => this.pq.insert(key))

          expect(mutations).toEqual(expectedMutations)
        })
      })
    })

    describe('public delMin method', () => {
      beforeEach(() => {
        this.max = 6
        this.pq = new MinPQ(this.max)

        const keys = ['Z', 'Y', 'X', 'C', 'B', 'A']
        keys.forEach(k => this.pq.insert(k))
      })

      it('should return the minimum key `A`', () => {
        const expectedMin = 'A'

        expect(this.pq.delMin()).toBe(expectedMin)
      })

      it('should decrement the size of the PQ by 1', () => {
        const originalSize = this.pq.size()
        const expectedSize = originalSize - 1

        this.pq.delMin()

        expect(this.pq.size()).toBe(expectedSize)
      })

      it('should set the last key in the `_pq` array as `undefined`', () => {
        const indexOfLastKey = this.pq.size()

        this.pq.delMin()

        expect(this.pq._pq[indexOfLastKey]).toBeUndefined()
      })

      it('should delete multiple keys keeping the heap order', () => {
        let keysToRemove = 3
        const deletedKeys = []
        const expectedPQ = [undefined, 'X', 'Z', 'Y', undefined, undefined, undefined]
        const expectedDeletedKeys = ['A', 'B', 'C']

        while (keysToRemove--) {
          deletedKeys.push(this.pq.delMin())
        }

        expect(this.pq._pq).toEqual(expectedPQ)
        expect(deletedKeys).toEqual(expectedDeletedKeys)
      })

      describe('implementation details', () => {
        it('should call private `exch` method x times', () => {
          spyOn(MinPQ.prototype, 'exch').and.callThrough()
          let keysToRemove = 3
          const expectedCallsArgs = [
            [1, 6], // A <-> Y
            [3, 1], // B <-> Y
            [1, 5], // B <-> X
            [2, 1], // C <-> X
            [1, 4], // C <-> Z
            [2, 1] //  X <-> Z
          ]

          while (keysToRemove--) {
            this.pq.delMin()
          }

          expect(this.pq.exch.calls.allArgs()).toEqual(expectedCallsArgs)
        })

        it('should mutate the `_pq` array after every call to `swim`', () => {
          const mutations = []
          const originalImplementation = this.pq.sink.bind(this.pq)
          spyOn(MinPQ.prototype, 'sink').and.callFake((n) => {
            originalImplementation(n)
            mutations.push([...this.pq._pq])
          })
          let keysToRemove = 3
          const expectedMutations = [
            [undefined, 'B', 'C', 'Y', 'Z', 'X', undefined],
            [undefined, 'C', 'X', 'Y', 'Z', undefined, undefined],
            [undefined, 'X', 'Z', 'Y', undefined, undefined, undefined]
          ]

          while (keysToRemove--) {
            this.pq.delMin()
          }

          expect(mutations).toEqual(expectedMutations)
        })
      })
    })

    describe('public min method', () => {
      beforeEach(() => {
        this.max = 3
        this.pq = new MinPQ(this.max)
      })

      it('should throw when PQ is empty', () => {
        expect(this.pq.min.bind(this.pq)).toThrowError('MinPQ is empty.')
      })

      it('should return the current minimum key', () => {
        this.pq.insert('Z')
        this.pq.insert('A')
        this.pq.insert('M')

        expect(this.pq.min()).toBe('A')

        this.pq.delMin()
        expect(this.pq.min()).toBe('M')

        this.pq.delMin()
        expect(this.pq.min()).toBe('Z')
      })
    })
  })
})
