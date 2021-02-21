# shortcuts to execute clients

bs: # binary search
	./client BSClient algs4-data/tinyW.txt < algs4-data/tinyT.txt | more

random-seq: # random sequence
	./client RandomSeq 5 100.0 199.99

average: # average from input stream
	./client RandomSeq 1000 100 199.99 | ./client Average

ls: # linear search
	./client LSClient algs4-data/tinyW.txt < algs4-data/tinyT.txt | more

flips: # flips
	./client Flips 1000

acc: # test accumulator
	./client TestAccumulator 100000

rolls: # rolls
	./client Rolls 100000

stats: # bag client returns mean and standard deviation
	./client Stats

stack: # linked stack
	./client StackClient < algs4-data/tobe.txt

queue: # queue
	./client QueueClient < algs4-data/tobe.txt

threesum: # triplets sum
	./client ThreeSumClient algs4-data/1Kints.txt

stopwatch: # stop watch
	./client StopWatchClient 1000

twosum: # two sum fast
	./client TwoSumFastClient algs4-data/1Mints.txt

threesumfast: # three sum fast
	./client ThreeSumFastClient algs4-data/8Kints.txt

uf: # union quick-find
	./client UFClient < algs4-data/mediumUF.txt

quf: # quick-union find
	./client UFQClient < algs4-data/mediumUF.txt

wquf: # weighted quick-union
	./client WeightedQuickUnionUFClient < algs4-data/mediumUF.txt

selection-sort: # selection sort
	./client SelectionSortClient < algs4-data/words3.txt

insertion-sort: # insertion sort
	./client InsertionSortClient < algs4-data/words3.txt

shell-sort: # shell sort
	./client ShellSortClient < algs4-data/words3.txt
