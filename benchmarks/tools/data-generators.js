/**
 * Returns a sorted array with numbers from `0` to `n - 1`.
 * @param {number} n Size of the sorted array.
 * @returns {[]} Sorted array of `n` number elements.
 */
const getSortedArray = (n) => {
  const a = []

  for (let i = 0; i < n; i++) {
    a[i] = i
  }

  return a
}

/**
 * Returns a random integer number from [0, max).
 * @param {number} max Max limit (exclusive) to generate the random number.
 */
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

module.exports = {
  getSortedArray,
  getRandomInt
}
