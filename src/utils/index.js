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

function pad (str, n = 0) {
  const isLeftPad = n > 0
  let remaining = Math.abs(n) - String(str).length
  let pads = ''

  while (remaining-- > 0) pads += ' '

  return isLeftPad ? `${pads}${str}` : `${str}${pads}`
}

module.exports = {
  buildArrayOf,
  pad
}
