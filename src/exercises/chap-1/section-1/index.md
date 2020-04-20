# Section 1.1 - Exercise Solutions

[Exercise 1.1.1](./ex-1.1.1.js)

> Output:

```sh
$ node ex-1.1.1.js
a) 7.5 # Java returns integer `7`
b) 200.0000002
c) true
```

[Exercise 1.1.2](./ex-1.1.2.js)

> Output:

```sh
$ node ex-1.1.2.js
a) 1.618 (number) # Java returns `1.618 (double)`
b) 10 (number) # Java returns `10.0 (double)`
c) true (boolean)
d) 33 (string) # Java returns `6 (int)`
```

[Exercise 1.1.3](./ex-1.1.3.js)

> Output:

```sh
$ node ex-1.1.3.js 3 3 3
equal
$ node ex-1.1.3.js 1 2 3
not equal
```

[Exercise 1.1.4](./ex-1.1.4.js)

> Output:

```sh
$ node ex-1.1.4.js
a) if (a > b) then c = 0; | SyntaxError: Unexpected identifier # Java also throws SyntaxError
b) if a > b { c = 0; } | SyntaxError: Unexpected identifier # Java also throws SyntaxError
c) if (a > b) c = 0; | 0
d) if (a > b) c = 0 else b = 0; | SyntaxError: Unexpected token else # Java also throws SyntaxError
```

[Exercise 1.1.5](./ex-1.1.5.js)

> Output:

```sh
$ node ex-1.1.5.js 0.5 0.9
true
$ node ex-1.1.5.js 0.5 1.5
false
```

[Exercise 1.1.6](./ex-1.1.6.js)

> Answer:

Prints the first 15th Fibonacci numbers.

> Iteration Test Table:

| i |  f |  g | { f } |
|--:| --:| --:|    --:|
| - |   0|   1|       |
|  0|   1|   0|      0|
|  1|   1|   1|      1|
|  2|   2|   1|      1|
|  3|   3|   2|      2|
|  4|   5|   3|      3|
|  5|   8|   5|      5|
|  6|  13|   8|      8|
|  7|  21|  13|     13|
|  8|  34|  21|     21|
|  9|  55|  34|     34|
| 10|  89|  55|     55|
| 11| 144|  89|     89|
| 12| 133| 144|    144|
| 13| 377| 233|    233|
| 14| 610| 377|    377|
| 15| 987| 610|    610|

> Output:

```sh
$ node ex-1.1.6.js
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
```

[Exercise 1.1.7](./ex-1.1.7.js)

> Answer:

For code fragment `b)` you can use the formula: `n (n + 1) / 2`

```sh
# given: i = 1 and i < 1000
# n = 999
999 (999 + 1) / 2
999 * 1000 / 2
999000 / 2
499500
```

> Output:

```sh
$ node ex-1.1.7.js
a) 3.00009
b) 499500
c) 10000
```
