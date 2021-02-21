/** @module common/validators */

/**
 * Helper function to determine if a given argument is defined.
 * @memberof module:common/validators
 * @param {*} arg - The argument to be evaluated.
 * @returns {boolean} Returns if the given argument is defined or not.
 */
function isDefined(arg) {
  return typeof arg !== 'undefined'
}

module.exports = {
  isDefined
}
