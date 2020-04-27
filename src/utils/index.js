function buildArrayOf (n, data) {
  const a = []

  if (typeof data === 'function') {
    for (let i = 0; i < n; i++) {
      a[i] = data(i)
    }
  } else {
    for (let i = 0; i < n; i++) {
      a[i] = data
    }
  }

  return a
}

module.exports = {
  buildArrayOf
}
