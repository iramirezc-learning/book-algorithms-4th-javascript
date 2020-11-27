const Quick = require('./quick-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Quick Sort Algorithm', () => {
  describe('static private _partition method', () => {
    it('should exchange numbers and place partition `6` in the correct position', () => {
      const array = [6, 1, 2, 7, 5, 0, 4, 3, 8, 9]
      const expectedArray = [4, 1, 2, 3, 5, 0, 6, 7, 8, 9]

      Quick._partition(array, 0, array.length - 1)

      expect(array).toEqual(expectedArray)
    })

    it('should return the new position of the element used as partition', () => {
      const array = [6, 1, 2, 7, 5, 0, 4, 3, 8, 9]
      const expectedIndex = 6

      const index = Quick._partition(array, 0, array.length - 1)

      expect(index).toEqual(expectedIndex)
    })

    it('should call public method `exchange`', () => {
      spyOn(Quick, 'exchange').and.callThrough()
      const a = [6, 1, 2, 7, 5, 0, 4, 3, 8, 9]
      const expectedCallsArgs = [
        [a, 3, 7],
        [a, 0, 6]
      ]

      Quick._partition(a, 0, a.length - 1)

      expect(Quick.exchange.calls.allArgs()).toEqual(expectedCallsArgs)
    })
  })

  describe('static sort method', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Quick.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Quick.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Quick.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all equal values', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Quick.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      const n = 10000 // ten thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Quick.sort(array)

      expect(Quick.isSorted(array)).toBeTrue()
    })

    it('should sort a medium random array', () => {
      const n = 100000 // a hundred thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Quick.sort(array)

      expect(Quick.isSorted(array)).toBeTrue()
    })

    it('should sort a large random array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Quick.sort(array)

      expect(Quick.isSorted(array)).toBeTrue()
    })

    describe('implementation details', () => {
      beforeAll(() => {
        // do not shuffle the array
        spyOn(Quick, 'sort').and.callFake((array, comparator) => {
          Quick._sort(array, 0, array.length - 1, comparator)
        })
      })

      it('should call private static `_sort` method x times', () => {
        spyOn(Quick, '_sort').and.callThrough()
        const a = [9, 8, 6, 5, 7, 4]
        const comparator = (a, b) => a - b
        const expectedCallsArgs = [
          [a, 0, 5, comparator], // initial call 0               : [9, 8, 6, 5, 7, 4]
          [a, 0, 4, comparator], //   recursive call 1           : [4, 8, 6, 5, 7]
          [a, 0, -1, comparator], //    recursive call 2         : [4]
          [a, 1, 4, comparator], //     recursive call 3         :    [8, 6, 5, 7]
          [a, 1, 3, comparator], //       recursive call 4       :    [7, 6, 5]
          [a, 1, 2, comparator], //         recursive call 5     :    [5, 6]
          [a, 1, 0, comparator], //           recursive call 6   :    [5]
          [a, 2, 2, comparator], //           recursive call 7   :       [6]
          [a, 4, 3, comparator], //         recursive call 8     :          [7]
          [a, 5, 4, comparator], //       recursive call 9       :             [8]
          [a, 6, 5, comparator] //    recursive call 10          :                [9]
        ]

        Quick.sort(a, comparator)

        expect(Quick._sort.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should call private static `_partition` method x times', () => {
        spyOn(Quick, '_partition').and.callThrough()
        const a = [9, 8, 6, 5, 7, 4]
        const comparator = (a, b) => a - b
        const expectedCallsArgs = [
          [a, 0, 5, comparator], // call 0:    [9, 8, 6, 5, 7, 4]
          [a, 0, 4, comparator], // call 1:    [4, 8, 6, 5, 7]
          [a, 1, 4, comparator], // call 2:       [8, 6, 5, 7]
          [a, 1, 3, comparator], // call 3:       [7, 6, 5]
          [a, 1, 2, comparator] //  call 4:       [5, 6]
        ]

        Quick.sort(a, comparator)

        expect(Quick._partition.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should mutate the array', () => {
        const mutations = []
        const originalImplementation = Quick._partition.bind(Quick)
        spyOn(Quick, '_partition').and.callFake((array, lo, hi, comparator) => {
          const j = originalImplementation(array, lo, hi, comparator)
          mutations.push([...array])
          return j
        })
        const a = [9, 8, 6, 5, 7, 4]
        // see calls test for the `_sort` method
        const expectedMutations = [
          [4, 8, 6, 5, 7, 9], // exchanged 9 <-> 4
          [4, 8, 6, 5, 7, 9], // nothing changed
          [4, 7, 6, 5, 8, 9], // exchanges 8 <-> 7
          [4, 5, 6, 7, 8, 9], // exchanges 7 <-> 5
          [4, 5, 6, 7, 8, 9] //  nothing changed
        ]

        Quick.sort(a)

        expect(mutations).toEqual(expectedMutations)
      })
    })
  })
})
