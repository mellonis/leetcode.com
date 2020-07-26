/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const xStr = String(x);
  const l = xStr.length;

  for (let i = 0; i < l / 2; i += 1) {
    if (xStr[i] !== xStr[l - i - 1]) {
      return false;
    }
  }

  return true;
}

exports.isPalindrome = isPalindrome;
