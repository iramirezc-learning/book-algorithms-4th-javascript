const { pad } = require('./strings')

describe('Utils/Strings', () => {
  describe('.pad()', () => {
    it('should add 5 whitespace to the left', () => {
      const expected = '     1.0'

      // length of string is 3
      const str = pad('1.0', 8)

      expect(str).toBe(expected)
    })

    it('should add 5 whitespace to the right', () => {
      const expected = '1.0     '

      // length of string is 3
      const str = pad('1.0', -8)

      expect(str).toBe(expected)
    })
  })
})
