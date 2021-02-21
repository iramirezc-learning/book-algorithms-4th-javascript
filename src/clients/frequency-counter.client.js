// Choose any of the ST implementations
// - SequentialSearchST
// - BinarySearchST
const { BinarySearchST: ST } = require('../adts')
const { StdIn, StdOut } = require('../libs')

/**
 * A ST client.
 * @memberof module:test-clients
 * @see page: 372.
 * @see [edu.princeton.cs.algs4.FrequencyCounter.java]{@link https://algs4.cs.princeton.edu/code/edu/princeton/cs/algs4/FrequencyCounter.java.html}
 */
class FrequencyCounter {
  /**
   * Counts the frequency of occurrence of the strings
   * in StdIn, then prints out one that occurs with
   * highest frequency.
   * @example <caption>Tiny Tale</caption>
   * {@lang bash}
   * $ ./client FrequencyCounter 1 < algs4-data/tinyTale.txt
   * it 10
   * @example <caption>Tale</caption>
   * {@lang bash}
   * $ ./client FrequencyCounter 8 < algs4-data/tale.txt
   * business 122
   * @example <caption>Leipzig</caption>
   * {@lang bash}
   * $ ./client FrequencyCounter 10 < algs4-data/leipzig1M.txt
   * government 24763
   * @param {...string} args - Params: `[minLength]`
   * * @type {number} `args[0]` - Number `minLength`.
   */
  static main(args) {
    const minLength = parseInt(args[0], 10)
    const st = new ST()

    StdIn.read()
      .on('line', (line) => {
        line
          .trim()
          .split(' ')
          .forEach((word) => {
            if (word.length < minLength) {
              return
            }

            if (!st.contains(word)) {
              st.put(word, 1)
            } else {
              st.put(word, st.get(word) + 1)
            }
          })
      })
      .on('close', () => {
        let max = ''

        st.put(max, 0)

        for (const word of st.keys()) {
          if (st.get(word) >= st.get(max)) {
            max = word
          }
        }

        StdOut.println(`${max} ${st.get(max)}`)
      })
  }
}

module.exports = { FrequencyCounter }
