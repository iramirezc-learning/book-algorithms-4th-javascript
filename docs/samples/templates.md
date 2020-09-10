# Templates

## Code

### Exercise Class

```js
const { StdOut } = require('../../../libs')

/**
 * Exercise 1.1.x
 */
class Exercise {
  /**
   * Solution Exercise 1.1.x
   * @param {[]} args [x, y]
   * @example <caption>example 1</caption>
   * ```shell
   * $ node ex-1.1.x.js 0.5 0.9
   * TODO:
   * ```
   * @example <caption>example 2</caption>
   * ```shell
   * $ node ex-1.1.x.js 0.5 1.5
   * TODO:
   * ```
   */
  static solution (args) {
    StdOut.println('TODO', args)
  }
}

module.exports = Exercise

// Execution
// ==============================
if (require.main === module) Exercise.solution(process.argv.slice(2))
```

### Test Clients

```js
const { StdOut } = require('../../libs')

/**
 * Client
 * @classdesc Client code
 * @see p. xx
 */
class Client {
  /**
   * What is the client doing
   * @param {[]} args [x, y]
   * @example <caption>test</caption>
   * ```sh
   * $ node test.client.js 10 50
   * TODO:
   * ```
   */
  static main (args) {
    StdOut.println('TODO', args)
  }
}

// Execution
// ==============================
Client.main(process.argv.slice(2))
```

## Markdown

### Exercise Answer

### [Exercise 1.1.x](./samples/ex-1.1.x.js)

:pencil2: **Answer**

> your answer here

:memo: **Example**

> your example here

:computer: **Output**

```sh
# your output here
```

:warning: **Note**

> your notes here

:bar_chart: **Drawing**

![exercise 1.1.x preview](/docs/img/octocat.png "Octocat")
