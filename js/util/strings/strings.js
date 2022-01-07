/**
 * Adds `n` whitespace to the left or right to a string.
 * @param {string} str The string to be padded.
 * @param {number} n It can be negative for right pad or positive for left pad.
 * @returns {string} The string with padding.
 */
function pad(str, n = 0) {
  const isLeftPad = n > 0
  let remaining = Math.abs(n) - String(str).length
  let pads = ''

  while (remaining-- > 0) pads += ' '

  return isLeftPad ? `${pads}${str}` : `${str}${pads}`
}

module.exports = {
  pad
}
