class TestCase {
  constructor({ description = '', args, expected }) {
    this.description = description
    this.args = args
    this.expected = expected
  }
}

module.exports = TestCase
