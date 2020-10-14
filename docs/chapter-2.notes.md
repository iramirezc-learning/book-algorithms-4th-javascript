# Algorithms (4th Edition)

## Chapter 2. Sorting

### Key Concepts

#### Selection Sort

> Is simple to understand and serves as an introduction for sorting algorithms.
>
> A notorious disadvantage is:
>
> * Selection Sort takes the same time to sort an ordered array as if the array has all the keys randomly dispersed or all the keys to be equal.

#### Insertion Sort

> Is an excellent method for partially sorted arrays and is also a fine method for tiny arrays.

#### Steps to Compare two Sorting Algorithms

> * Implement and debug them
> * Analyze their basic properties
> * Formulate a hypothesis about comparative performance
> * Run experiments to validate the Hypothesis

#### Merge Sort

> * is an asymptotically optimal compare-based sorting algorithm `~n lg(n)`.
> * is not optimal with respect to use space usage.

#### Merge Sort Bottom-Up Approach

> Is the sorting method for choice when sorting elements stored in a Linked-List as it rearranges the links to sort the list in place (no extra memory).

#### Top-Down (Divide n Conquer) vs Bottom-Up

> When implementing a Top-Down or a Bottom-Up approach it is worth considering the other.
>
> Top-Down: Break a problem to smaller problems and solve them recursively.
>
> Bottom-Up: Build small solutions into larges ones.
