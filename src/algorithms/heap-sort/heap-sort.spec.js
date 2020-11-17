const Heap = require('./heap-sort')
const { newArrayOf } = require('../../utils')
const { StdRandom } = require('../../libs')

describe('Unit Tests: HeapSort', () => {
  describe('Heap.sort()', () => {
    it('should sort an ordered array', () => {
      const orderedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Heap.sort(orderedArray)

      expect(orderedArray).toEqual(expectedArray)
    })

    it('should sort a reversed array', () => {
      const reversedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Heap.sort(reversedArray)

      expect(reversedArray).toEqual(expectedArray)
    })

    it('should sort an unordered array', () => {
      const unorderedArray = [0, 9, 5, 2, 1, 8, 7, 6, 4, 3]
      const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      Heap.sort(unorderedArray)

      expect(unorderedArray).toEqual(expectedArray)
    })

    it('should sort an array with all equal values', () => {
      const allEqualArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
      const expectedArray = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]

      Heap.sort(allEqualArray)

      expect(allEqualArray).toEqual(expectedArray)
    })

    it('should sort a small random array', () => {
      const n = CONFIG.SMALL_ARRAY_LENGTH
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Heap.sort(array)

      expect(Heap.isSorted(array)).toBeTrue()
    })

    it('should sort a medium random array', () => {
      const n = CONFIG.MEDIUM_ARRAY_LENGTH
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Heap.sort(array)

      expect(Heap.isSorted(array)).toBeTrue()
    })

    it('should sort a large random array', () => {
      const n = CONFIG.LARGE_ARRAY_LENGTH
      const array = newArrayOf(n, () => StdRandom.uniform(n))

      Heap.sort(array)

      expect(Heap.isSorted(array)).toBeTrue()
    })
  })
})

describe('Explain me: HeapSort', () => {
  it('should perform n exchanges and mutate the array', () => {
    const a = [8, 9, 6, 5, 7, 4]
    const mutations = [[...a]] // initial state
    const originalExchange = Heap.exchange.bind(Heap)
    spyOn(Heap, 'sink').and.callThrough()
    spyOn(Heap, 'exchange').and.callFake((array, i, j) => {
      originalExchange(array, i, j)
      mutations.push([...array])
    })
    const expectedExchanges = [
      [a, 0, 1], // exch 1: 8 <-> 9  : heap construction
      [a, 0, 5], // exch 2: 9 <-> 4  : max goes to the end
      [a, 0, 1], // exch 3: 4 <-> 8  : sink
      [a, 1, 4], // exch 4: 4 <-> 7  :
      [a, 0, 4], // exch 5: 8 <-> 4  : max goes to the end
      [a, 0, 1], // exch 6: 4 <-> 7  : sink
      [a, 1, 3], // exch 7: 4 <-> 5  :
      [a, 0, 3], // exch 8: 7 <-> 4  : max goes to the end
      [a, 0, 2], // exch 9: 4 <-> 6  : sink
      [a, 0, 2], // exch 10: 6 <-> 4 : max goes to the end
      [a, 0, 1], // exch 11: 4 <-> 5 : sink
      [a, 0, 1] // exch 12: 5 <-> 4  : max goes to the end, sink
    ]
    const expectedMutations = [
      [8, 9, 6, 5, 7, 4], // initial state
      [9, 8, 6, 5, 7, 4], // exch 1
      [4, 8, 6, 5, 7, 9], // exch 2
      [8, 4, 6, 5, 7, 9], // exch 3
      [8, 7, 6, 5, 4, 9], // exch 4
      [4, 7, 6, 5, 8, 9], // exch 5
      [7, 4, 6, 5, 8, 9], // exch 6
      [7, 5, 6, 4, 8, 9], // exch 7
      [4, 5, 6, 7, 8, 9], // exch 8
      [6, 5, 4, 7, 8, 9], // exch 9
      [4, 5, 6, 7, 8, 9], // exch 10
      [5, 4, 6, 7, 8, 9], // exch 11
      [4, 5, 6, 7, 8, 9] //  exch 12
    ]

    Heap.sort(a)

    expect(Heap.exchange.calls.allArgs()).toEqual(expectedExchanges)
    expect(Heap.sink).toHaveBeenCalledTimes(8)
    expect(mutations).toEqual(expectedMutations)
  })
})
