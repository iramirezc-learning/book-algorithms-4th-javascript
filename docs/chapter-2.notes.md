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

#### Quick Sort

> Was invented in 1960 by C.A.R. Hoare.
>
> Quick Sort is warranted to run in a constant factor of `1.39n lg(n)`.
>
> Quick Sort can be improved up to 20-30%, with care, with some recommended changes:
>
> * Cutoff to insertion sort
> * Median-of-three partitioning
> * Entropy-optimal sorting
>
> Quick Sort is slower than insertion sort for tiny sub-arrays.

#### Heaps

##### Binary Heap aka Heap

> The binary heap is a data structure that can efficiently support the basic priority-queue operations.
>
> It can be represented by:
>
> * Linked-lists (having 3 pointer links: 1 for the parent node and 2 for the children nodes)
> * Arrays (by using complete binary trees each node can be placed in lever order: the root goes to the 1, then its children go to 2 and 3, their children in positions 4, 5, and 7, and so on.)