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

### [Exercise 1.1.15](./ex-1.1.15.js)

:computer: **Output**

```sh
$ node ex-1.1.15.js 5
array: 4,0,1,4,3
array.length: 5
histogram: 1,1,0,1,2
sum(histogram): 5
```

### [Exercise 1.1.16](./ex-1.1.16.js)

:computer: **Output**

```sh
$ node ex-1.1.16.js 6
exR1(6) = 311361142246
```

### [Exercise 1.1.17](./ex-1.1.17.js)

:pencil2: **Answer**

> Base case will never be reached, causing an stack overflow error.

:computer: **Output**

```sh
$ node ex-1.1.17.js 6
RangeError: Maximum call stack size exceeded
```

### [Exercise 1.1.18](./ex-1.1.18.js)

:pencil2: **Answer**

> `mystery` returns the product of `a * b`:
>
> > `mystery(2, 25) = 50`
> >
> > `mystery(3, 11) = 33`
>
> `mystery2` (`*` version) returns the power of base `a` to exponent `b`, `Math.pow(a, b)`:
>
> > `mystery2(2, 25) = 33554432`
> >
> > `mystery2(3, 11) = 177147`

:computer: **Output**

```sh
$ node ex-1.1.18.js 2 25
mystery(2, 25) = 50
mystery2(2, 25) = 33554432

$ node ex-1.1.18.js 3 11
mystery(3, 11) = 33
mystery2(3, 11) = 177147
```

### [Exercise 1.1.19](./ex-1.1.19.js)

:pencil2: **Answer**

> The fibonacci number computed in less than 1 hour was: `58 591286729879`

:computer: **Output**

```sh
$ node ex-1.1.19.js
0 0
1 1
2 1
3 2
4 3
5 5
6 8
7 13
8 21
9 34
10 55
...
89 1779979416004714189
```

:warning: **Note**

> After `fib(78)`, JavaScript returns incorrect values due to an overflow of `Number.MAX_VALUE`. The correct values are to the left after the `#` symbol.

```sh
78 8944394323791464
79 14472334024676220 # 14472334024676221
80 23416728348467684 # 23416728348467685
81 37889062373143900 # 37889062373143906
82 61305790721611580 # 61305790721611591
83 99194853094755490 # 99194853094755497
84 160500643816367070 # 160500643816367088
85 259695496911122560 # 259695496911122585
86 420196140727489660 # 420196140727489673
87 679891637638612200 # 679891637638612258
88 1100087778366101900 # 1100087778366101931
89 1779979416004714000 # 1779979416004714189
```

> The `mathjs` library can help with the issue of big numbers not to overflow.

```sh
78 8944394323791464
79 14472334024676221
80 23416728348467685
81 37889062373143906
82 61305790721611591
83 99194853094755497
84 160500643816367088
85 259695496911122585
86 420196140727489673
87 679891637638612258
88 1100087778366101931
89 1779979416004714189
```

### [Exercise 1.1.20](./ex-1.1.20.js)

:computer: **Output**

```sh
$ node ex-1.1.20.js 10
ln(10!) = 15
```

### [Exercise 1.1.21](./ex-1.1.21.js)

:file_folder: **Files**

> /custom/names.txt

```txt
java 10 10
c 8 4
haskell 10 2
rubi 7 3
python 9 5
node 3 2
```

:computer: **Output**

```sh
$ node ex-1.1.21.js < ~/algs4-data/custom/names.txt
java       10    10    1.000
c           8     4    2.000
haskell    10     2    5.000
rubi        7     3    2.333
python      9     5    1.800
node        3     2    1.500
```

### [Exercise 1.1.22](./ex-1.1.22.js)

:computer: **Output**

```sh
$ node ex-1.1.22.js ~/algs4-data/tinyW.txt < ~/algs4-data/tinyT.txt | more
key = 23
 1[0,14]
  2[0,6]
   3[4,6]
index = 5
key = 50
 1[0,14]
  2[8,14]
   3[8,10]
    4[8,8]
     5[9,8]
index = -1
...
```

### [Exercise 1.1.23](./ex-1.1.23.js)

:computer: **Output**

```sh
$ node ex-1.1.23.js ~/algs4-data/tinyW.txt + < ~/algs4-data/tinyT.txt
50
99
13

$ node ex-1.1.23.js ~/algs4-data/tinyW.txt - < ~/algs4-data/tinyT.txt
23
10
18
23
98
84
11
10
48
77
54
98
77
77
68
```

### [Exercise 1.1.24](./ex-1.1.24.js)

:pencil2: **Answer**

> `p = 105`; `q = 24`; `p % q = 9`
>
> `p = 24`; `q = 9`; `p % q = 6`
>
> `p = 9`; `q = 6`; `p % q = 3`
>
> `p = 6`; `q = 3`; `p % q = 0`
>
> **`gcd = 3`**

:computer: **Output**

```sh
$ node ex-1.1.24.js 1111111 1234567
p = 1111111; q = 1234567; r = 1111111
p = 1234567; q = 1111111; r = 123456
p = 1111111; q = 123456; r = 7
p = 123456; q = 7; r = 4
p = 7; q = 4; r = 3
p = 4; q = 3; r = 1
p = 3; q = 1; r = 0
p = 1; q = 0

gcd(1111111, 1234567) = 1
```

### Exercise 1.1.25

:pencil2: **Answer**

> :exclamation:TODO

### [Exercise 1.1.26](./ex-1.1.26.js)

:pencil2: **Answer**

> initialization

| a | b | c | t |
|--:|--:|--:|--:|
| 3 | 2 | 1 | ∅ |

> `a > b` ? `true`

| a > b | a | b | c | t |
|    --:|--:|--:|--:|--:|
| t = a | 3 | 2 | 1 | 3 |
| a = b | 2 | 2 | 1 | 3 |
| b = t | 2 | 3 | 1 | 3 |

> `a > c` ? `true`

| a > c | a | b | c | t |
|    --:|--:|--:|--:|--:|
| t = a | 2 | 3 | 1 | 2 |
| a = c | 1 | 3 | 1 | 2 |
| c = t | 1 | 3 | 2 | 2 |

> `b > c` ? `true`

| b > c | a | b | c | t |
|    --:|--:|--:|--:|--:|
| t = b | 1 | 3 | 2 | 3 |
| b = c | 1 | 2 | 2 | 3 |
| c = t | 1 | 2 | 3 | 3 |

:computer: **Output**

```sh
$ node ex-1.1.26.js 3 2 1
a = 3; b = 2; c = 1
a = 1; b = 2; c = 3
```

### [Exercise 1.1.27](./ex-1.1.27.js)

:pencil2: **Answer**

> :exclamation:TODO: estimation of recursive calls
>
> :exclamation:TODO: better implementation of binomial

:computer: **Output**

```sh
$ node ex-1.1.27.js 100 50 0.25
{ n: 100, k: 50, p: 0.25 }
# will take a while
binomial(100, 50, 0.25) = ???

$ node ex-1.1.27.js 10 5 0.25
{ n: 10, k: 5, p: 0.25 }
binomial(10, 5, 0.25) = 0.058399200439453125
```

### [Exercise 1.1.28](./ex-1.1.28.js)

:computer: **Output**

```sh
$ node ex-1.1.28.js ~/algs4-data/largeW.txt < ~/algs4-data/largeT.txt | more
Whitelist length: 1000000
Unique length: 632469

499569
984875
295754
207807
140925
161828
17672230
51849195
40363603
1820537
57187544
... # truncated
```

### [Exercise 1.1.29](./ex-1.1.29.js)

:memo: **Example**

```js
// consider sorted array with duplicated keys
const a = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8]
//  index [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// consider key
const k = 5

// there are 4 items less than key `5`
const i = BinarySearch.rank(a, k) // returns 4
// there are 3 duplicated items for key `5`
const j = BinarySearch.count(a, k) // returns 3

// the book states that `[i..i+j-1]` are
// the values in the array that are equal to `k`
// if `i` = 4 and `j` = 3
// then
// a[4..4 + 3 - 1]
// a[4..6]
// a[4, 5, 6] (indexes) = [5, 5, 5] (values)
```

:warning: **Note**

> I decided to make a much more fun exercise by getting the key that is the most duplicated in a whitelist file using the `rank` and `count` methods for this exercise.
>
> I actually created 2 implementations of the same method for comparison purposes.

:computer: **Output**

```sh
$ node ex-1.1.29.js ~/algs4-data/tinyW.txt
mostDuplicatedKey (v1): { key: 10, rank: 0, count: 1, length: 15 }
mostDuplicatedKey (v2): { key: 10, rank: 0, count: 1, length: 15 }

$ node ex-1.1.29.js ~/algs4-data/largeW.txt
mostDuplicatedKey (v1): { key: 471981, rank: 471499, count: 9, length: 1000000 }
mostDuplicatedKey (v2): { key: 471981, rank: 471499, count: 9, length: 1000000 }
```

### [Exercise 1.1.30](./ex-1.1.30.js)

:computer: **Output**

```sh
$ node ex-1.1.30.js 20
  •
• • • • • • • • • • • • • • • • • • • •
  •   •   •   •   •   •   •   •   •   •
  • •   • •   • •   • •   • •   • •   •
  •   •   •   •   •   •   •   •   •   •
  • • • •   • • • •   • • • •   • • • •
  •       •   •       •   •       •   •
  • • • • • •   • • • • • •   • • • • •
  •   •   •   •   •   •   •   •   •   •
  • •   • •   • •   • •   • •   • •   •
  •   •       •   •   •   •       •   •
  • • • • • • • • • •   • • • • • • • •
  •       •   •       •   •       •   •
  • • • • • • • • • • • •   • • • • • •
  •   •   •       •   •   •   •   •   •
  • •   •     • •     •   • •   • •   •
  •   •   •   •   •   •   •   •   •   •
  • • • • • • • • • • • • • • • •   • •
  •       •   •       •   •       •   •
  • • • • • • • • • • • • • • • • • •
```

### Exercise 1.1.31

> :exclamation:TODO: I need to implement an StdDraw library

:bar_chart: **Drawing**

![exercise 1.1.31 preview](/docs/img/1.1.31.png "Random Connections")

### Exercise 1.1.32

> :exclamation:TODO: I need to implement an StdDraw library

:bar_chart: **Drawing**

![exercise 1.1.32 preview](/docs/img/1.1.32.png "Histogram")

### [Exercise 1.1.33](./ex-1.1.33.js)

:computer: **Output**

```sh
$ node ex-1.1.33.js [[1,2,3],[4,5,6],[7,8,9]]
Transpose:
[[1,4,7],[2,5,8],[3,6,9]]

$ node ex-1.1.33.js [9,2,7] [4,8,10]
Vector Dot Product:
122

$ node ex-1.1.33.js [[0,4,-2],[-4,-3,0]] [[0,1],[1,-1],[2,3]]
Matrix-Matrix Product:
[[0,-10],[-3,-1]]

$ node ex-1.1.33.js [[1,-1,2],[0,-3,1]] [2,1,0]
Matrix-Vector Product:
[1,-3]

$ node ex-1.1.33.js [2,1,3] [[1,2,3],[4,5,6],[7,8,9]]
Vector-Matrix Product:
[13,31,49]
```

### Exercise 1.1.34 (_Not coding exercise_)

:pencil2: **Answer**

> Print the maximum and minimum numbers.
> > can be implemented as a filter. By having `max` and `min` variables and updating those when reading the values.
>
> Print the median of the numbers.
> > requires saving all the values. We need to store all numbers from standard input and sort them, then we can select the median.
>
> Print the `k`th smallest value, for `k` less than `100`.
> > can be implemented as a filter. By having `min` and `minCount` variables.
>
> Print the sum of the squares of the numbers.
> > can be implemented as a filter. By having only a `sum` variable to store the square of each number + `sum`.
>
> Print the average of the `n` numbers.
> > can be implemented as a filter. By having `sum` and `count` variables.
>
> Print the percentage of numbers greater than the average.
> > requires saving all the values. We need to store all numbers to get the `average` and then count all the numbers greater than it.
>
> Print the `n` numbers in increasing order.
> > requires saving all the values. We need to store all numbers then sort them in increasing order.
>
> Print the `n` numbers in random order.
> > requires saving all the values. We need to store all numbers and then print them in random order.

### [Exercise 1.1.35](./ex-1.1.35.js)

:pencil2: **Answer**

> The number of throws vary a lot to match the exact probability distribution from 38,346,018~ to 100,572,005~

:computer: **Output**

```sh
$ node ex-1.1.35.js
Exact Results:
Dice Sum:  0  Freq:  0  P: 0
Dice Sum:  1  Freq:  0  P: 0
Dice Sum:  2  Freq:  1  P: 0.028
Dice Sum:  3  Freq:  2  P: 0.056
Dice Sum:  4  Freq:  3  P: 0.083
Dice Sum:  5  Freq:  4  P: 0.111
Dice Sum:  6  Freq:  5  P: 0.139
Dice Sum:  7  Freq:  6  P: 0.167
Dice Sum:  8  Freq:  5  P: 0.139
Dice Sum:  9  Freq:  4  P: 0.111
Dice Sum: 10  Freq:  3  P: 0.083
Dice Sum: 11  Freq:  2  P: 0.056
Dice Sum: 12  Freq:  1  P: 0.028
Total Throws: 36, Total P: 1

Simulation Empirical Results:
Dice Sum:  0  Freq:  0  P: 0
Dice Sum:  1  Freq:  0  P: 0
Dice Sum:  2  Freq: 380557  P: 0.028
Dice Sum:  3  Freq: 762385  P: 0.056
Dice Sum:  4  Freq: 1140840  P: 0.083
Dice Sum:  5  Freq: 1523698  P: 0.111
Dice Sum:  6  Freq: 1905290  P: 0.139
Dice Sum:  7  Freq: 2285261  P: 0.167
Dice Sum:  8  Freq: 1902612  P: 0.139
Dice Sum:  9  Freq: 1525440  P: 0.111
Dice Sum: 10  Freq: 1141563  P: 0.083
Dice Sum: 11  Freq: 760805  P: 0.056
Dice Sum: 12  Freq: 379734  P: 0.028
Total Throws: 13708185, Total P: 1
```

### [Exercise 1.1.36](./ex-1.1.36.js)

:computer: **Output**

```sh
$ node ex-1.1.36.js 1000000 8
Total Shuffles (n): 1000000
Array Size (m): 8
n/m: 125000
Empirical Shuffle Check:
[ [ 124985, 125251, 124740, 124920, 125098, 124652, 125468, 124886 ],
  [ 125358, 125181, 124482, 125173, 124697, 125177, 124973, 124959 ],
  [ 124651, 125071, 124770, 124813, 124880, 125504, 125229, 125082 ],
  [ 125083, 125527, 124982, 124521, 125542, 124405, 124989, 124951 ],
  [ 125145, 124915, 124869, 124815, 125198, 125103, 125098, 124857 ],
  [ 124804, 124895, 125620, 124943, 124981, 124819, 125210, 124728 ],
  [ 125035, 124571, 125104, 125718, 124789, 125326, 124473, 124984 ],
  [ 124939, 124589, 125433, 125097, 124815, 125014, 124560, 125553 ] ]

$ node ex-1.1.36.js 10000000 5
Total Shuffles (n): 10000000
Array Size (m): 5
n/m: 2000000
Empirical Shuffle Check:
[ [ 1998646, 2000785, 2000112, 2000986, 1999471 ],
  [ 1999746, 2001194, 2000083, 1998939, 2000038 ],
  [ 2001169, 1999430, 2000780, 1998711, 1999910 ],
  [ 2001698, 1999479, 1999161, 1999547, 2000115 ],
  [ 1998741, 1999112, 1999864, 2001817, 2000466 ] ]
```

### [Exercise 1.1.37](./ex-1.1.37.js)

:computer: **Output**

```sh
$ node ex-1.1.37.js 1000000 8
Total Shuffles (n): 1000000
Array Size (m): 8
n/m: 125000
Empirical Shuffle Check:
[ [ 124955, 124685, 125188, 124333, 125868, 125145, 124874, 124952 ],
  [ 158384, 116335, 118005, 118880, 119546, 121452, 123009, 124389 ],
  [ 144590, 151873, 110692, 112724, 114966, 118160, 121856, 125139 ],
  [ 132750, 139792, 147959, 107810, 111608, 114895, 120218, 124968 ],
  [ 122478, 129239, 137191, 146915, 107897, 112804, 118513, 124963 ],
  [ 113396, 120609, 128365, 137193, 147695, 110837, 117251, 124654 ],
  [ 105051, 112461, 119872, 129808, 139799, 151510, 116240, 125259 ],
  [ 98396, 105006, 112728, 122337, 132621, 145197, 158039, 125676 ] ]

$ node ex-1.1.37.js 10000000 5
Total Shuffles (n): 10000000
Array Size (m): 5
n/m: 2000000
Empirical Shuffle Check:
[ [ 1999800, 1998775, 2001753, 2001489, 1998183 ],
  [ 2419150, 1805946, 1855000, 1919011, 2000893 ],
  [ 2099193, 2304450, 1739481, 1855201, 2001675 ],
  [ 1843721, 2046718, 2305007, 1803177, 2001377 ],
  [ 1638136, 1844111, 2098759, 2421122, 1997872 ] ]
```

### [Exercise 1.1.38](./ex-1.1.38.js)

:computer: **Output**

```sh
$ node ex-1.1.38.js ~/algs4-data/largeW.txt ~/algs4-data/largeT.txt
Running benchmark...
Whitelist length: 1000000
Keys length: 10000000

BinarySearch:
Running Time: 4939.283277988434 # 4.9 secs
Filtered Keys: 367966

BruteForce:
Running Time: 13918111.657770991 # 3.8 hours!
Filtered Keys: 367966
```

### [Exercise 1.1.39](./ex-1.1.39.js)

:computer: **Output**

```sh
$ node ex-1.1.39.js 100
Running 100 trials for n = 1000
Duplicated keys: 102
Average: 1.02

Running 100 trials for n = 10000
Duplicated keys: 10919
Average: 109.19

Running 100 trials for n = 100000
Duplicated keys: 1051018
Average: 10510.18

Running 100 trials for n = 1000000
Duplicated keys: 67079632
Average: 670796.32
```
