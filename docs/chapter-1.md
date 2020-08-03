# Algorithms (4th Edition)

## Chapter 1. Fundamentals

### Algorithms

* [Euclid's - Algorithm - p. 4](/src/algorithms/euclidean/euclidean.js)
* [BinarySearch - Algorithm - p.47](/src/algorithms/binary-search/binary-search.js)
* [LinearSearch - Algorithm - p.48](/src/algorithms/linear-search/linear-search.js)
* [Dijkstra's Two-Stack: Expression Evaluation - Algorithm - p.129](/src/algorithms/dijkstra-two-stack/dijkstra-two-stack.js)

### ADTs

* [BasicDate - ADT - p. 79](/src/adts/basic-date/basic-date.js)
* [SmallDate - ADT - p. 79](/src/adts/small-date/small-date.js)
* [Transaction - ADT - p. 79](/src/adts/transaction/transaction.js)
* [Counter - ADT - p. 85](/src/adts/counter/counter.js)
* [Accumulator - ADT - p. 93](/src/adts/accumulator/accumulator.js)
* [FixedCapacityStack - ADT - p. 135](/src/adts/fixed-capacity-stack/fixed-capacity-stack.js)
* [ResizingArrayStack - ADT - p. 141](/src/adts/resizable-array-stack/resizable-array-stack.js)
* [Node - ADT - p. 142](/src/adts/node/node.js)
* [Stack - ADT - p. 149](/src/adts/stack/stack.js)
* [Queue - ADT - p. 151](/src/adts/queue/queue.js)
* [Bag - ADT - p. 155](/src/adts/bag/bag.js)

### Examples & Code Snippets

* [StdRandom - TestClient - p. 32](/src/examples/test-clients/std-random.client.js)
* [RandomSeq - TestClient - p. 37](/src/examples/test-clients/random-seq.client.js)
* [Average - TestClient - p. 39](/src/examples/test-clients/average.client.js)
* [BinarySearch - TestClient - p.47](/src/examples/test-clients/binary-search.client.js)
* [LinearSearch - TestClient - p.48](/src/examples/test-clients/linear-search.client.js)
* [Counter: Flips - TestClient - p.70](/src/examples/test-clients/flips.client.js)
* [Counter: Rolls - TestClient - p.72](/src/examples/test-clients/rolls.client.js)
* [Accumulator - TestClient - p.93](/src/examples/test-clients/accumulator.client.js)
* [Bag - TestClient - p.125](/src/examples/test-clients/bag.client.js)
* [Stack - TestClient - p.147](/src/examples/test-clients/stack.client.js)
* [Queue - TestClient - p.150](/src/examples/test-clients/queue.client.js)

### Key Concepts

#### Algorithm

> A finite, deterministic and effective problem-solving method suitable for implementation as a computer program.

#### Primitive Data Types

> A Data Type is a set of values and a set of operations on those values.
>
> Examples of Primitive Data Types:
>
> * integers (`int` with arithmetic operations)
> * real numbers (`double` with arithmetic operations)
> * booleans (`bool` with logical operations)
> * characters (`char` representing Alphanumeric Characters and Symbols)

#### Identifier

> A sequence of letters, digits and symbols that represents the name of something (like a function or variable).

#### Variable

> Names a data-type value using an Identifier.

#### Operator

> Names a data-type operation on its value.

#### Literal

> Source-code representation of a data-type value.

#### Expression

> A literal, a variable or a sequence of operations on literals and/or variables that produces a value.

#### Statements

> A program is a sequence of statements which define the computation by creating and manipulating variables, assigning data-type values to them, and controlling the flow of execution of such operations. Statements are often organized in blocks, sequences of statements withing curly braces.
>
> Examples:
>
> * declarations. Associates a variable name with a type at compile time.
> * assignments. Associates a data-type value with a variable.
> * conditionals. Controls different actions for different inputs.
> * loops. Repetitive computations.
> * calls. Invoking of methods.
> * returns. Retuning from methods.

#### Arrays

> Stores a sequence of values of the same type. _This is not true in non-typed programming languages like JS._ The stored values can be accessed by its index which starts from `0` for the first item.

#### Static Methods

> Allow encapsulation, reuse of code and development of programs as a set of independent modules.

#### Strings

> Sequence of Characters.

#### Input/Output

> Communication with the outside world.

#### Data Abstraction

> Extends encapsulation and reuse to allow defining non-primitive data types, supporting Object-Oriented programming.

#### Data Structures

> Two ways of representing object collections:
>
> * Arrays aka *Sequential Allocation*
> * Linked Lists aka *Linked Allocation*
