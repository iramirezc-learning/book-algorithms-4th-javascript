class TestCase {
  constructor({ args, expected, description = '' }) {
    this.args = args
    this.expected = expected
    this.description = description
  }
}

module.exports = TestCase
