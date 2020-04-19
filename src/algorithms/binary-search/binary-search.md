# Binary Search Algorithm

Finds the index of an element in a sorted Array or returns `-1` if not found.

## JS Code

```js
class BinarySearch {
  static _iterativeIndexOf (a, key) {
    let lo = 0
    let hi = a.length - 1
    let mid

    while (lo <= hi) {
      mid = Math.floor(lo + (hi - lo) / 2)

      if (key < a[mid]) {
        hi = mid - 1
      } else if (key > a[mid]) {
        lo = mid + 1
      } else {
        return mid
      }
    }

    return -1
  }

  static _recursiveIndexOf (a, key, lo, hi) {
    if (lo > hi) {
      return -1
    }

    const mid = Math.floor(lo + (hi - lo) / 2)

    if (key < a[mid]) {
      return BinarySearch._recursiveIndexOf(a, key, lo, mid - 1)
    } else if (key > a[mid]) {
      return BinarySearch._recursiveIndexOf(a, key, mid + 1, hi)
    } else {
      return mid
    }
  }

  static indexOf (a, key) {
    return BinarySearch._iterativeIndexOf(a, key)
  }

  static recursiveIndexOf (a, key) {
    return BinarySearch._recursiveIndexOf(a, key, 0, a.length - 1)
  }
}

```

## Use Cases

* [binary-search.client.js](/src/examples/test-clients/binary-search.client.js)

## Learning Resources

* [BinarySearch.java (Source Code) | Book site](https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/BinarySearch.java.html)
* [Binary search | Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)

## Challenges

* None
