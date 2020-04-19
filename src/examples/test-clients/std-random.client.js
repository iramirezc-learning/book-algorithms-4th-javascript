const { StdRandom } = require('../../libs')

console.log('uniform method')
console.log('  real between [0, 1):', StdRandom.uniform())
console.log('  integer between [0, 5):', StdRandom.uniform(5))
console.log('  integer between [5, 10):', StdRandom.uniform(5, 10))
console.log('  real between [5.5, 9.9):', StdRandom.uniform(5.5, 9.9))

console.log('bernoulli method')
console.log('  probability of 0.5:', StdRandom.bernoulli())
console.log('  probability of 0.9:', StdRandom.bernoulli(0.9))
console.log('  probability of 0.1:', StdRandom.bernoulli(0.1))
