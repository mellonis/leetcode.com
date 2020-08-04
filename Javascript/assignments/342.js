/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
  if (num < 1) {
    return false;
  }

  while (num !== 1) {
    if (num % 4 !== 0) {
      return false;
    }

    // eslint-disable-next-line no-param-reassign
    num = Math.floor(num / 4);
  }

  return true;
}

exports.isPowerOfFour = isPowerOfFour;
