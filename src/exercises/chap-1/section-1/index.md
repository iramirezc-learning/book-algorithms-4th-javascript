# Exercise Solutions

## Chapter 1 > Section 1.1

### [Exercise 1.1.1](./ex-1.1.1.js)

:computer: **Output**

```sh
$ node ex-1.1.1.js
a) 7.5
b) 200.0000002
c) true
```

:warning: **Note**

> Java outputs:
>
> a) `7`

### [Exercise 1.1.2](./ex-1.1.2.js)

:computer: **Output**

```sh
$ node ex-1.1.2.js
a) 1.618 (number)
b) 10 (number)
c) true (boolean)
d) 33 (string)
```

:warning: **Note**

> Java outputs:
>
> a) `1.618 (double)`
>
> b) `10.0 (double)`
>
> c) `6 (int)`

### [Exercise 1.1.3](./ex-1.1.3.js)

:computer: **Output**

```sh
$ node ex-1.1.3.js 3 3 3
equal
$ node ex-1.1.3.js 1 2 3
not equal
```

### [Exercise 1.1.4](./ex-1.1.4.js)

:pencil2: **Answer**

> a) `SyntaxError`: `then` is not valid syntax both for Java & JavaScript.
>
> b) `SyntaxError`: `if` statement condition should have `()`.
>
> c) Is OK
>
> d) `SyntaxError`: For Java is missing `;` at the end. In JS this is not a valid syntax, missing `{}` for the `else` block.

:computer: **Output**

```sh
$ node ex-1.1.4.js
a) if (a > b) then c = 0; | SyntaxError: Unexpected identifier
b) if a > b { c = 0; } | SyntaxError: Unexpected identifier
c) if (a > b) c = 0; | 0
d) if (a > b) c = 0 else b = 0; | SyntaxError: Unexpected token else
```

### [Exercise 1.1.5](./ex-1.1.5.js)

:computer: **Output**

```sh
$ node ex-1.1.5.js 0.5 0.9
true
$ node ex-1.1.5.js 0.5 1.5
false
```

### [Exercise 1.1.6](./ex-1.1.6.js)

:pencil2: **Answer**

> Prints the first 15th numbers of the Fibonacci series.

:clipboard: **Iteration Table**

> Variables: `i`, `f = 0`, `g = 1`
>
> Output: `{f}`

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

:computer: **Output**

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

### [Exercise 1.1.7](./ex-1.1.7.js)

:pencil2: **Answer**

> For code fragment:
>
> `b)` you can use the Gauss formula: `n (n + 1) / 2` to sum a series of numbers.

```sh
# variable `i` will loop from `1` to `999`
# variable `f` will loop from `0` to `i`
# so, `sum++` will be executed `999` times
# meaning that we will sum the numbers from `1...999`
# by using the Gauss formula, we can say `n = 999`

999 (999 + 1) / 2
999 * 1000 / 2
999000 / 2
499500
```

:computer: **Output**

```sh
$ node ex-1.1.7.js
a) 3.00009
b) 499500
c) 10000
```

### [Exercise 1.1.8](./ex-1.1.8.js)

:pencil2: **Answer**

> a) prints `b`
>
> b) prints `bc`
>
> c) JS prints `a4` | Java prints `e`

:computer: **Output**

```sh
$ node ex-1.1.8.js
b
bc
a4
```

### [Exercise 1.1.9](./ex-1.1.9.js)

:computer: **Output**

```sh
$ node ex-1.1.9.js 50
50 to binary -> 110010
```

### [Exercise 1.1.10](./ex-1.1.10.js)

:pencil2: **Answer**

> In Java code won't compile because variable `a` is not initialized with a size.
>
> `The local variable a may not have been initialized`
>
> JavaScript will execute the code correctly.

:computer: **Output**

```sh
$ node ex-1.1.10.js
[ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
```

### [Exercise 1.1.11](./ex-1.1.11.js)

:computer: **Output**

```sh
$ node ex-1.1.11.js 5 5
  1  2  3  4  5
1 *        *
2    *     *
3    *  *  *  *
4       *  *  *
5 *  *        *
```

### [Exercise 1.1.12](./ex-1.1.12.js)

:pencil2: **Answer**

> `[0, 1, 2, 3, 4, 4, 3, 2, 1, 0]`

:clipboard: **Iteration Table**

> Table is truncated as values `a[5]` to `a[9]` won't change.

| a[0] | a[1] | a[2] | a[3] | a[4] | a[5] | a[6] | a[7] | a[8] | a[9] | i |
|------|------|------|------|------|------|------|------|------|------|---|
|     9|     0|     0|     0|     0|     0|     0|     0|     0|     0|  0|
|     9|     8|     0|     0|     0|     0|     0|     0|     0|     0|  1|
|     9|     8|     7|     0|     0|     0|     0|     0|     0|     0|  2|
|     9|     8|     7|     6|     0|     0|     0|     0|     0|     0|  3|
|     9|     8|     7|     6|     5|     0|     0|     0|     0|     0|  4|
|     9|     8|     7|     6|     5|     4|     0|     0|     0|     0|  5|
|     9|     8|     7|     6|     5|     4|     3|     0|     0|     0|  6|
|     9|     8|     7|     6|     5|     4|     3|     2|     0|     0|  7|
|     9|     8|     7|     6|     5|     4|     3|     2|     1|     0|  8|
|     9|     8|     7|     6|     5|     4|     3|     2|     1|     0|  9|
|     0|     8|     7|     6|     5|     4|     3|     2|     1|     0|  0|
|     0|     1|     7|     6|     5|     4|     3|     2|     1|     0|  1|
|     0|     1|     2|     6|     5|     4|     3|     2|     1|     0|  2|
|     0|     1|     2|     3|     5|     4|     3|     2|     1|     0|  3|
|     0|     1|     2|     3|     4|     4|     3|     2|     1|     0|  4|
|     0|     1|     2|     3|     4|     4|     3|     2|     1|     0|  5|

:computer: **Output**

```sh
$ node ex-1.1.12.js
[ 0, 1, 2, 3, 4, 4, 3, 2, 1, 0 ]
```

### [Exercise 1.1.13](./ex-1.1.13.js)

:computer: **Output**

```sh
$ node ex-1.1.13.js 4 3
[before]
0,1,2,3
1,3,0,2
2,3,0,1

[after]
0,1,2
1,3,3
2,0,0
3,2,1
```

### [Exercise 1.1.14](./ex-1.1.14.js)

:computer: **Output**

```sh
$ node ex-1.1.14.js 123456789
123456789 -> 26
```
