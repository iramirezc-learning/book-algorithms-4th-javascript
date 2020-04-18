# Euclidean Algorithm

Finds the Greatest Common Divisor of two numbers.

## Code

```js
class Euclidean {
  static gcd (p, q) {
    if (q === 0) {
      return p
    }

    const r = p % q

    return Euclidean.gcd(q, r)
  }
}
```

## Learning Resources

* [Euclidean Algorithm Explained Visually | Math Hacks - Medium](https://medium.com/i-math/why-does-the-euclidean-algorithm-work-aaf43bd3288e)
* [The Euclidean Algorithm (article) | Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm)
* [How to Find the Greatest Common Divisor by Using the Euclidian Algorithm | Learn Math Tutorials - YouTube](https://www.youtube.com/watch?v=JUzYl1TYMcU)

## Challenges

* [Greatest common divisor (JavaScript) | CodeWars](https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/javascript)
