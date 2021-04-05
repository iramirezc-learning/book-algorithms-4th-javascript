# Algorithms (4th edition) - JavaScript implementation

> 🚧 WIP Since April 2020

Personal notes and JavaScript code for the book Algorithms (4th edition) by Robert Sedgewick & Kevin Wayne.

## Standard libraries for JavaScript

These are my implementations, _(trying to use the same API of the book)_, for the standard libraries shared across the algorithms and data structures.

- [In](src/libs/in/in.js)
- StdDraw (_not implemented_)
- [StdIn](src/libs/std-in/std-in.js)
- [StdOut](src/libs/std-out/std-out.js)
- [StdRandom](src/libs/std-random/std-random.js)

## Algorithms & Data Structures

These are the list of the algorithms and data structures I have implemented in JavaScript.

- [Algorithms, ADTs and Clients](docs/markdown/algorithms-list.md)
- [Book site list](docs/markdown/booksite-list.md)

## Installation

> _TODO: write to documentation to set up the folder with the algorithms test data._

Install the npm dependencies:

```sh
$ yarn install
```

## Tests

I have written tons of tests in order to document and understand the implementation better for the algorithms and data structures in the book.

Run the tests:

```sh
$ yarn test
```

## Benchmarks

List of the benchmarks for some of the algorithms:

- [Linear Search vs. Binary Search](benchmarks/searching/linear-vs-binary-search.js)

Example of how to run them:

```sh
$ node benchmarks/searching/linear-vs-binary-search.js
```

The output should look like the following:

```sh
Searching Algorithms Benchmark - 1000 iterations
┌──────────────────────────┬──────────┬───────┬───────────────────────────────────────────────────┐
│         (index)          │  total   │  avg  │                      output                       │
├──────────────────────────┼──────────┼───────┼───────────────────────────────────────────────────┤
│       LinearSearch       │ 3529.236 │ 3.529 │ [ 5334788, 9868889, 8100599, ... 997 more items ] │
│       BinarySearch       │  45.72   │ 0.046 │ [ 5334788, 9868889, 8100599, ... 997 more items ] │
│ BinarySearch (Recursive) │  2.785   │ 0.003 │ [ 5334788, 9868889, 8100599, ... 997 more items ] │
└──────────────────────────┴──────────┴───────┴───────────────────────────────────────────────────┘
```

## JSDoc

I have written JSDoc documentation _(🚧 needs some fixes)_ for all the algorithms and data structures of the book.

To generate the docs:

```sh
$ yarn docs
```

Then, open the `docs/html/index.hml` file in your browser.

## Exercises solutions

:warning: _**IMPORTANT NOTE:** Do **NOT** copy any of my solutions, these are only for the future me. You should have attempted solving any of these exercises by your own at least for a couple of days before trying to look for a solution. My solutions can be **wrong**._

Run the tests for my exercises' solutions:

```sh
$ yarn test:exercises
```

## My Stats

Oh yeah! This wasn't easy! I've tried to keep track of how much time I have invested in each section using the Pomodoro technique. 

The time invested in each section takes into account the following activities:

- Read the lesson.
- Write diagrams of some sort.
- Write the implementation code.
- Write client code.
- Write unit tests.
- Write JSDoc & Documentation.
- Refactors & fixes.
- Manual testing.
- Consulting external sources.
- Solving exercises _(A note about that: I' have decided not to spend more time on solving all the exercises! It is too much already 😥. For now, I just want to understand the implementation of the most basic algorithms and then, if I have the time, I'll come back and continue solving them.)_

These are my results:

| Section                     | Started on   | Completed on | Total time       |
|-----------------------------|--------------|--------------|------------------|
| 1.1 Basic Programming Model | Apr 18, 2020 | May 18, 2020 | ~4 hours, 10 min |
| 1.2 Data Abstraction        | May 18, 2020 | May 24, 2020 | ~4 hours, 10 min |
| 1.3 Bags, Queues and Stacks | May 25, 2020 | Aug 3, 2020  | ~6 hours, 15 min |
| 1.4 Analysis of Algorithms  | Aug 3, 2020  | Sep 12, 2020 | ~4 hours, 10 min |
| 1.5 Case Study: Union-Find  | Sep 12, 2020 | Sep 20, 2020 | ~4 hours, 10 min |
| 2.1 Elementary Sorts        | Sep 22, 2020 | Sep 28, 2020 | ~3 hours, 20 min |
| 2.2 Mergesort               | Sep 28, 2020 | Oct 14, 2020 | ~1 hour, 40 min  |
| 2.3 Quicksort               | Oct 14, 2020 | Oct 18, 2020 | ~2 hours, 30 min |
| 2.4 Priority Queues         | Oct 21, 2020 | Nov 17, 2020 | ~9 hours, 10 min |
| 2.5 Applications            | Nov 18, 2020 | Nov 18, 2020 | ~2 hours, 5 min  |
| 3.1 Symbol Tables           | Nov 19, 2020 | Dec 9, 2020  | 2 hours, 5 min   |
| 3.2 Binary Search Trees     | Feb 21, 2021 | Apr 5, 2021  | 10 hours         |
