const { StdRandom } = require('../../libs')

console.log('uniform method')
console.log('  real between [0, 1):', StdRandom.uniform())
console.log('  integer between [0, 1):', StdRandom.uniform(1))
console.log('  integer between [0, 5):', StdRandom.uniform(5))
console.log('  integer between [5, 10):', StdRandom.uniform(5, 10))
console.log('  real between [5.5, 9.9):', StdRandom.uniform(5.5, 9.9))

console.log('bernoulli method')
console.log('  probability of 0.5:', StdRandom.bernoulli())
console.log('  probability of 0.9:', StdRandom.bernoulli(0.9))
console.log('  probability of 0.1:', StdRandom.bernoulli(0.1))

console.log('discrete method')
console.log('  discrete distribution:', StdRandom.discrete([0.1, 0.3, 0.0, 0.4, 0.1, 0.05, 0.05]))

console.log('shuffle method')
const integers = [1, 2, 3, 4, 5]
StdRandom.shuffle(integers)
console.log('  shuffle array of integers [1, 2, 3, 4, 5] ->', integers)
const chars = ['a', 'b', 'c', 'd', 'e']
StdRandom.shuffle(chars)
console.log("  shuffle array of chars ['a', 'b', 'c', 'd', 'e'] ->", chars)
