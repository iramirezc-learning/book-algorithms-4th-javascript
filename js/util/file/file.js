const path = require('path')
const fs = require('fs')

/**
 * File. JavaScript implementation to mimic the In library.
 * @see {@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/In.java.html}
 */
class File {
  constructor(fileName) {
    this.fileName = fileName
    this.filePath = path.resolve(this.fileName)
    this.content = fs.readFileSync(this.filePath, 'utf-8').toString().trim()
    this.lines = this.content.split('\n')
  }

  /**
   * Returns all the lines of the file as an array of integers.
   * @returns {Array<number>} The array of integers.
   */
  readAllInts() {
    return this.lines.map((line) => parseInt(line, 10))
  }
}

module.exports = File
