const { StdIn, StdOut } = require('../../libs')
const { Stack } = require('../../adts')

/**
 * StackClient
 * @classdesc Stack Test client.
 * @see p. 147, 148
 */
class StackClient {
  /**
   * Create a stack and push/pop strings from the StdIn.
   * @example <caption>To be or not to be</caption>
   * ```sh
   * $ node stack.client.js < ~/algs4-data/tobe.txt
   * to be not that or be (2 left on stack)
   * ```
   */
  static main () {
    const stack = new Stack()

    StdIn.read()
      .on('line', line => {
        line.split(' ').forEach(item => {
          if (item === '-' && !stack.isEmpty()) {
            StdOut.printf(stack.pop() + ' ')
          } else {
            stack.push(item)
          }
        })
      })
      .on('close', () => {
        StdOut.println(`(${stack.size()} left on stack)`)
      })
  }
}

// Execution
// ==============================
if (require.main === module) StackClient.main()
