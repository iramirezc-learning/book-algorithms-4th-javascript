const Merge = require('./merge-sort')
const {
  arrays: { newArrayOf },
  Random
} = require('../../util')

describe('MergeSort', () => {
  describe('.merge()', () => {
    beforeEach(() => {
      /**
       * All tests also pass without this line
       * but I'm adding it as a simulation of the
       * memory allocation that `sort` function
       * does before calling `merge`.
       * All tests will use an array of length 10.
       */
      Merge._aux = new Array(10)
    })

    afterEach(() => {
      delete Merge._aux
    })

    it('should merge the two sorted halves', () => {
      const a = [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
      const lo = 0
      const mid = Math.floor((a.length - 1) / 2) // index 4
      const hi = a.length - 1 // index 9
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Merge.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })

    it('should only merge the array in the given lo & hi bounds', () => {
      const a = [5, 7, 9, 1, 3, 0, 2, 4, 6, 8]
      const lo = 3 // holding value 1
      const mid = 4 // holding value 3
      const hi = 6 // holding value 2
      const expectedArray = [5, 7, 9, 0, 1, 2, 3, 4, 6, 8]

      Merge.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })

    it('should copy remaining values on the right half', () => {
      const a = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9]
      const lo = 0
      const mid = 4
      const hi = 9
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Merge.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })

    it('should copy remaining values on the left half', () => {
      const a = [0, 6, 7, 8, 9, 1, 2, 3, 4, 5]
      const lo = 0
      const mid = 4
      const hi = 9
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Merge.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })
  })

  describe('.sort()', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Merge.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Merge.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Merge.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all equal values', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Merge.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      const n = A_THOUSAND
      // @ts-ignore
      const array = newArrayOf(n, () => Random.uniform(n))

      Merge.sort(array)

      expect(array.length).toBe(A_THOUSAND)
      expect(Merge.isSorted(array)).toBeTrue()
    })

    it('should sort a medium random array', () => {
      const n = A_HUNDRED_THOUSAND
      // @ts-ignore
      const array = newArrayOf(n, () => Random.uniform(n))

      Merge.sort(array)

      expect(array.length).toBe(A_HUNDRED_THOUSAND)
      expect(Merge.isSorted(array)).toBeTrue()
    })

    it('should sort a large random array', () => {
      const n = A_MILLION
      // @ts-ignore
      const array = newArrayOf(n, () => Random.uniform(n))

      Merge.sort(array)

      expect(array.length).toBe(A_MILLION)
      expect(Merge.isSorted(array)).toBeTrue()
    }, 500)

    describe('implementation details', () => {
      it('should allocate space in the _aux array', () => {
        const a = [9, 8, 7, 6, 5]

        Merge.sort(a)

        expect(Merge._aux.length).toBe(a.length)
      })

      it('should call private static `_sort` method n times', () => {
        // @ts-ignore
        spyOn(Merge, '_sort').and.callThrough()
        const a = [9, 8, 6, 5, 7, 4]
        const expectedCallsArgs = [
          [a, 0, 5], // initial call 0       : [9, 8, 6, 5, 7, 4]
          [a, 0, 2], // recursive call 1     : [9, 8, 6]
          [a, 0, 1], //   recursive call 2   : [9, 8]
          [a, 0, 0], //     recursive call 3 : [9]
          [a, 1, 1], //     recursive call 4 :    [8]
          [a, 2, 2], //   recursive call 5   :       [6]
          [a, 3, 5], // recursive call 6     :          [5, 7, 4]
          [a, 3, 4], //   recursive call 7   :          [5, 7]
          [a, 3, 3], //     recursive call 8 :          [5]
          [a, 4, 4], //     recursive call 9 :             [7]
          [a, 5, 5] //    recursive call 10  :                [4]
        ]

        Merge.sort(a)

        // @ts-ignore
        expect(Merge._sort.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should call static `merge` method n times', () => {
        spyOn(Merge, 'merge').and.callThrough()
        const a = [9, 8, 6, 5, 7, 4]
        const expectedCallsArgs = [
          [a, 0, 0, 1], // merge [9, 8]
          [a, 0, 1, 2], // merge [8, 9, 6]
          [a, 3, 3, 4], // merge [5, 7]
          [a, 3, 4, 5], // merge [5, 7, 4]
          [a, 0, 2, 5] //  merge [6, 8, 9, 4, 5, 7]
        ]

        Merge.sort(a)

        // @ts-ignore
        expect(Merge.merge.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should mutate the array', () => {
        const mutations = []
        const originalImplementation = Merge.merge.bind(Merge)
        spyOn(Merge, 'merge').and.callFake((array, lo, mid, hi) => {
          originalImplementation(array, lo, mid, hi)
          mutations.push([...array])
        })
        const a = [9, 8, 6, 5, 7, 4]
        // see test about calls to `merge` function
        const expectedMutations = [
          [8, 9, 6, 5, 7, 4],
          [6, 8, 9, 5, 7, 4],
          [6, 8, 9, 5, 7, 4],
          [6, 8, 9, 4, 5, 7],
          [4, 5, 6, 7, 8, 9]
        ]

        Merge.sort(a)

        expect(mutations).toEqual(expectedMutations)
      })
    })
  })
})
