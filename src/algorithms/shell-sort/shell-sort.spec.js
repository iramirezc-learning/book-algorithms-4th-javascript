const Shell = require('./shell-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

describe('Unit Tests: Shell Sort Algorithm', () => {
  describe('static sort method', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Shell.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Shell.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Shell.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all equal values', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Shell.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      const n = 10000 // ten thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Shell.sort(array)

      expect(Shell.isSorted(array)).toBeTrue()
    })

    it('should sort a medium random array', () => {
      const n = 100000 // a hundred thousand
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Shell.sort(array)

      expect(Shell.isSorted(array)).toBeTrue()
    })

    it('should sort a large random array', () => {
      const n = 1000000 // a million!
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Shell.sort(array)

      expect(Shell.isSorted(array)).toBeTrue()
    })

    describe('implementation details', () => {
      it('should call `exchange` n times', () => {
        spyOn(Shell, 'exchange').and.callThrough()
        const array = [9, 8, 6, 5, 7, 4]
        /**
         * Initialization of `h`:
         *   n = a.length // 6
         *   h = 1 // initial value
         *   while (h < n / 3) h = 3 * h + 1 // 1, 4, 13, 40, 121, ...
         *     // 1st iteration | is 1 < 6 / 3 ? then h = 3 * 1 + 1 = 4
         *     // 2nd iteration | is 4 < 6 / 3 ? no
         *   h = 4 // ending value
         * Loop (while h >= 1):
         *   Loop (for i = h; i < 9; i++):
         *     Loop (for j = i; j >= h && a[j] is less than a[j - h]; j = j - h):
         *   [0, 1, 2, 3, 4, 5]
         * |        array       | h | i | j | j-h | a[j] < a[j-h] | then
         * | [9, 8, 6, 5, 7, 4] | 4 | 4 | 4 |  0  |   7 < 9 ? T   | 7 <-> 9; j = 0;
         * | [7, 8, 6, 5, 9, 4] | 4 | 4 | 0 |  3  |   N/A         | break !(j >= h); i++; j = i;
         * | [7, 8, 6, 5, 9, 4] | 4 | 5 | 5 |  1  |   4 < 8 ? T   | 4 <-> 8; j = 1;
         * | [7, 4, 6, 5, 9, 8] | 4 | 5 | 1 |  3  |   N/A         | break !(j >= h); i++; j = i;
         * | [7, 4, 6, 5, 9, 8] | 4 | 6 | - |  2  |   N/A         | break !(i < n); h = h/3;
         * | [7, 4, 6, 5, 9, 8] | 1 | 1 | 1 |  0  |   4 < 7 ? T   | 4 <-> 7; j = 0;
         * | [4, 7, 6, 5, 9, 8] | 1 | 1 | 0 |  0  |   N/A         | break !(j >= h); i++; j = i;
         * | [4, 7, 6, 5, 9, 8] | 1 | 2 | 2 |  1  |   6 < 7 ? T   | 6 <-> 7; j = 1;
         * | [4, 6, 7, 5, 9, 8] | 1 | 2 | 1 |  0  |   N/A         | break !(j >= h); i++; j = i;
         * | [4, 6, 7, 5, 9, 8] | 1 | 3 | 3 |  2  |   5 < 7 ? T   | 5 <-> 7; j = 2;
         * | [4, 6, 5, 7, 9, 8] | 1 | 3 | 2 |  1  |   5 < 6 ? T   | 5 <-> 6; j = 1;
         * | [4, 5, 6, 7, 9, 8] | 1 | 3 | 1 |  0  |   N/A         | break !(j >= h); i++; j = i;
         * | [4, 5, 6, 7, 9, 8] | 1 | 4 | 4 |  3  |   9 < 7 ? F   | break !(9 < 7); i++; j = i;
         * | [4, 5, 6, 7, 9, 8] | 1 | 5 | 5 |  4  |   8 < 9 ? T   | 8 <-> 9; j = 4;
         * | [4, 5, 6, 7, 8, 9] | 1 | 5 | 4 |  3  |   8 < 7 ? F   | break !(8 < 7); i++;
         * | [4, 5, 6, 7, 8, 9] | 1 | 6 | - |  -  |   N/A         | break !(i < n); h = h/3;
         * | [4, 5, 6, 7, 8, 9] | 0 | - | - |  -  |   N/A         | break !(h >= 1);
         */
        const expectedCallsArgs = [
          [array, 4, 0],
          [array, 5, 1],
          [array, 1, 0],
          [array, 2, 1],
          [array, 3, 2],
          [array, 2, 1],
          [array, 5, 4]
        ]

        Shell.sort(array)

        expect(Shell.exchange.calls.allArgs()).toEqual(expectedCallsArgs)
      })

      it('should mutate the array', () => {
        const mutations = []
        const originalImplementation = Shell.exchange.bind(Shell)
        spyOn(Shell, 'exchange').and.callFake((array, i, j) => {
          originalImplementation(array, i, j)
          mutations.push(array.slice(0))
        })
        const array = [9, 8, 6, 5, 7, 4]
        // see previous test
        const expectedMutations = [
          [7, 8, 6, 5, 9, 4],
          [7, 4, 6, 5, 9, 8],
          [4, 7, 6, 5, 9, 8],
          [4, 6, 7, 5, 9, 8],
          [4, 6, 5, 7, 9, 8],
          [4, 5, 6, 7, 9, 8],
          [4, 5, 6, 7, 8, 9]
        ]

        Shell.sort(array)

        expect(mutations).toEqual(expectedMutations)
      })
    })
  })
})
