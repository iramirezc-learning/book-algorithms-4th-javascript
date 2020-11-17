const { GenericSort } = require('../../abstracts')

/**
 * Heap Sort Algorithm.
 * @augments GenericSort
 * @memberof module:Algorithms
 * @see page: 324.
 * @see [edu.princeton.cs.algs4.Heap.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/Heap.java.html}
 */
class Heap extends GenericSort {
  /**
   * Implementation of Heap Sort algorithm.
   * @param {Array<*>} a - The array of values to be sorted.
   * @param {ComparatorFn} [comparator] - The comparator function.
   */
  static sort (a, comparator) {
    let n = a.length

    // constructs the max heap from the first half of the array
    for (let k = Math.floor(n / 2); k >= 1; k--) {
      this.sink(a, k, n, comparator)
    }

    // sort down
    while (n > 1) {
      // decrement indices by 1 so the array
      // can be sorted from a[0] to a[n - 1]
      this.exchange(a, 1 - 1, n - 1)
      this.sink(a, 1, --n)
    }
  }

  /**
   * Sink algorithm. Restores the heap order by exchanging the node `k`
   * down to the tree until is no longer smaller than any of its children.
   * @param {Array<*>} a - The array of values treated also as the binary heap.
   * @param {number} k - The index of the heap to sink.
   * @param {number} n - The max length of the heap in which sink should run.
   * @param {ComparatorFn} [comparator] - The comparator function.
   */
  static sink (a, k, n, comparator) {
    while (2 * k <= n) {
      let j = 2 * k

      // decrement indices by 1 so the array
      // can be sorted from a[0] to a[n - 1]
      if (j < n && this.less(a[j - 1], a[j + 1 - 1], comparator)) {
        j++
      }

      // decrement indices by 1 so the array
      // can be sorted from a[0] to a[n - 1]
      if (!this.less(a[k - 1], a[j - 1], comparator)) {
        break
      }

      // decrement indices by 1 so the array
      // can be sorted from a[0] to a[n - 1]
      this.exchange(a, k - 1, j - 1)

      k = j
    }
  }
}

module.exports = Heap
