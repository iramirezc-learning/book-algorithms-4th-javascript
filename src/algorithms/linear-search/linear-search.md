# Linear Search Algorithm

Finds the index of an element in an Array or returns `-1` if not found.

## JS Code

```js
class LinearSearch {
  static indexOf (a, key) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === key) return i
    }

    return -1
  }
}
```

## Use Cases

* [linear-search.client.js](/src/examples/test-clients/linear-search.client.js)

## Learning Resources

* None

## Challenges

* None
