function newArrayOf (n, data) {
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

function arrayToString (a) {
  return JSON.stringify(a)
}

function isMatrix (m) {
  if (Array.isArray(m) && m.length > 0) {
    return m.every(row => isVector(row))
  }
  return false
}

function isVector (v) {
  if (Array.isArray(v) && v.length > 0) {
    return v.every(n => !Array.isArray(n))
  }
  return false
}

module.exports = {
  arrayToString,
  isMatrix,
  isVector,
  newArrayOf,
  pad
}
