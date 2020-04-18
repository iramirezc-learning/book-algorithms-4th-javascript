const Euclidean = require('./euclidean')
const { TestCase } = require('../../spec')

describe('Unit Tests: Euclidean Algorithm', () => {
  describe('static gcd method', () => {
    it('should return the greatest common divisor of two given numbers', () => {
      const testCases = [
        new TestCase({ input: [3, 0], output: 3 }),
        new TestCase({ input: [0, 5], output: 5 }),
        new TestCase({ input: [54, 24], output: 6 }),
        new TestCase({ input: [180, 48], output: 12 }),
        new TestCase({ input: [1701, 3768], output: 3 }),
        new TestCase({ input: [15996751, 3870378], output: 4057 })
      ]

      testCases.forEach(({ input, output }) => {
        expect(Euclidean.gcd(...input)).toBe(output)
      })
    })
  })
})
