# Algorithms (4th edition) - JavaScript implementation

> 🚧 Work In Progress Since April 2020

Personal notes and JavaScript code for the book Algorithms (4th edition) by Robert Sedgewick & Kevin Wayne.

[How much time do I have spent learning this book?](/md/my-stats.md)

## Chapters

- [ ] [Chapter 1. Fundamentals](/md/chapters/chapter-1.md)
- [ ] Chapter 2. Sorting
- [ ] Chapter 3. Searching
- [ ] Chapter 4. Graphs
- [ ] Chapter 5. Strings
- [ ] Chapter 6. Context

## Set Up

Install the NPM dependencies:

```sh
npm install
```

## Tests

I have written lots of tests in order to document and understand the implementation for some of the algorithms and data structures in the book.

Run the tests:

```sh
npm run test
```

## Benchmarks

List of the benchmarks for some of the algorithms:

- [Linear Search vs. Binary Search](benchmarks/searching/linear-vs-binary-search.js)

Example of how to run the benchmark of Linear Search vs Binary Search:

```sh
node benchmarks/searching/linear-vs-binary-search.js
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

🚧 **WIP:** I have written JSDoc documentation for all the algorithms and data structures of the book.

Generate the docs:

```sh
npm run docs
```

Then, open the `docs/html/index.hml` file in your browser.
