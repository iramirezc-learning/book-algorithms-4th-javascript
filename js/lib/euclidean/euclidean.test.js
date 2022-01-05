const Euclidean = require('./euclidean')

describe('Euclidean', () => {
  describe('.gcd()', () => {
    it('should return the greatest common divisor of two given positive numbers', () => {
      const testCases = [
        new TestCase({ args: [3, 0], expected: 3 }),
        new TestCase({ args: [0, 5], expected: 5 }),
        new TestCase({ args: [54, 24], expected: 6 }),
        new TestCase({ args: [180, 48], expected: 12 }),
        new TestCase({ args: [1701, 3768], expected: 3 }),
        new TestCase({ args: [15996751, 3870378], expected: 4057 })
      ]

      testCases.forEach(({ args, expected }) => {
        // @ts-ignore
        expect(Euclidean.gcd(...args)).toBe(expected)
      })
    })
  })
})
