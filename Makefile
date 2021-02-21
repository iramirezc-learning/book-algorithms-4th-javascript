# shortcuts to execute clients

bs: # binary search
	./client BSClient algs4-data/tinyW.txt < algs4-data/tinyT.txt | more

randomseq: # random sequence
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
