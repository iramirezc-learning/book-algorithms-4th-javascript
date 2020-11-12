const Exercise = require('../ex-1.1.3')

describe('Unit Tests: Exercise 1.1.3', () => {
  describe('static areEqual method', () => {
    it('should return false if all numbers are different', () => {
      const numbers = [1, 2, 3]

      expect(Exercise.areEqual(...numbers)).toBeFalse()
    })

    it('should return false if only 2 numbers are equal but 1 is not', () => {
      const numbers1 = [1, 1, 2]
      const numbers2 = [1, 2, 1]
      const numbers3 = [2, 1, 1]

      expect(Exercise.areEqual(...numbers1)).toBeFalse()
      expect(Exercise.areEqual(...numbers2)).toBeFalse()
      expect(Exercise.areEqual(...numbers3)).toBeFalse()
    })

    it('should return true if all 3 numbers are equal', () => {
      const numbers = [1, 1, 1]

      expect(Exercise.areEqual(...numbers)).toBeTrue()
    })
  })
})
