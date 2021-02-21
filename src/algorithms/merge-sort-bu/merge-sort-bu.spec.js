const MergeBU = require('./merge-sort-bu')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Bottom-Up MergeBU Sort Algorithm', () => {
  describe('static merge method', () => {
    beforeEach(() => {
      /**
       * All test also pass without this line
       * but I'm adding it as a simulation of the
       * memory allocation that `sort` function
       * does before calling `merge`.
       * All test will use an array of length 10.
       */
      MergeBU._aux = new Array(10)
    })

    it('should merge the two sorted halves', () => {
      const a = [1, 3, 5, 7, 9, 0, 2, 4, 6, 8]
      const lo = 0
      const mid = Math.floor((a.length - 1) / 2) // index 4
      const hi = a.length - 1 // index 9
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      MergeBU.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })

    it('should only merge the array in the given lo & hi bounds', () => {
      const a = [5, 7, 9, 1, 3, 0, 2, 4, 6, 8]
      const lo = 3 // holding value 1
      const mid = 4 // holding value 3
      const hi = 6 // holding value 2
      const expectedArray = [5, 7, 9, 0, 1, 2, 3, 4, 6, 8]

      MergeBU.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })

    it('should copy remaining values on the right half', () => {
      const a = [1, 2, 3, 4, 5, 0, 6, 7, 8, 9]
      const lo = 0
      const mid = 4
      const hi = 9
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      MergeBU.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })

    it('should copy remaining values on the left half', () => {
      const a = [0, 6, 7, 8, 9, 1, 2, 3, 4, 5]
      const lo = 0
      const mid = 4
      const hi = 9
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      MergeBU.merge(a, lo, mid, hi)

      expect(a).toEqual(expectedArray)
    })
  })

  describe('static sort method', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      MergeBU.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      MergeBU.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      MergeBU.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all equal values', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      MergeBU.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      const n = 10000 // ten thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      MergeBU.sort(array)

      expect(MergeBU.isSorted(array)).toBeTrue()
    })

    it('should sort a medium random array', () => {
      const n = 100000 // a hundred thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      MergeBU.sort(array)

      expect(MergeBU.isSorted(array)).toBeTrue()
    })

    it('should sort a large random array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      MergeBU.sort(array)

      expect(MergeBU.isSorted(array)).toBeTrue()
    })

    describe('implementation details', () => {
      it('should allocate space in the _aux array', () => {
        const a = [9, 8, 7, 6, 5]

        MergeBU.sort(a)

        expect(MergeBU._aux.length).toBe(a.length)
      })

      it('should call static `merge` method x times', () => {
        spyOn(MergeBU, 'merge').and.callThrough()
        const a = [9, 8, 6, 5, 7, 4] // n = 6
        const comparator = (a, b) => a - b
        const expectedCallsArgs = [
          [a, 0, 0, 1, comparator], // len = 1; n - len = 5; lo = 0; mid = 0; hi = 1
          [a, 2, 2, 3, comparator], // len = 1; n - len = 5; lo = 2; mid = 2; hi = 3
          [a, 4, 4, 5, comparator], // len = 1; n - len = 5; lo = 4; mid = 4; hi = 5
          [a, 0, 1, 3, comparator], // len = 2; n - len = 4; lo = 0; mid = 1; hi = 3
          [a, 0, 3, 5, comparator] //  len = 4; n - len = 2; lo = 0; mid = 3; hi = 5
        ]

        MergeBU.sort(a, comparator)

        expect(MergeBU.merge.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should mutate the array', () => {
        const mutations = []
        const originalImplementation = MergeBU.merge.bind(MergeBU)
        spyOn(MergeBU, 'merge').and.callFake(
          (array, lo, mid, hi, comparator) => {
            originalImplementation(array, lo, mid, hi, comparator)
            mutations.push([...array])
          }
        )
        const a = [9, 8, 6, 5, 7, 4]
        // see test about calls to `merge` function
        const expectedMutations = [
          [8, 9, 6, 5, 7, 4],
          [8, 9, 5, 6, 7, 4],
          [8, 9, 5, 6, 4, 7],
          [5, 6, 8, 9, 4, 7],
          [4, 5, 6, 7, 8, 9]
        ]

        MergeBU.sort(a)

        expect(mutations).toEqual(expectedMutations)
      })
    })
  })
})
