const { StdIn, StdOut } = require('../../libs')
const UF = require('./union-find')

/**
 * UFClient
 * @classdesc Union-Find Test client.
 * @see p. 221
 */
class UFClient {
  /**
   * Solves dynamic connectivity problem on StdIn.
   * @example <caption>Tiny UF</caption>
   * ```sh
   * $ node union-find.client.js < ~/algs4-data/tinyUF.txt
   * ...
   * 2 components
   * ```
   */
  static main () {
    let n
    let uf

    StdIn.read()
      .on('line', line => {
        if (!n) {
          // read firs line
          n = StdIn.readInt(line)
          uf = new UF(n)
        } else {
          const [p, q] = line.split(' ').map(n => parseInt(n, 10))

          if (uf.connected(p, q)) {
            // do nothing
          } else {
            uf.union(p, q)
            StdOut.println(`${p} ${q}`)
          }
        }
      })
      .on('close', () => {
        StdOut.println(`${uf.count()} components`)
      })
  }
}

// Execution
// ==============================
UFClient.main()
