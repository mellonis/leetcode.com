/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome(s) {
  const letterToCountMap = {};

  for (let i = 0, l = s.length; i < l; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(letterToCountMap, s[i])) {
      letterToCountMap[s[i]] = 0;
    }

    letterToCountMap[s[i]] += 1;
  }

  let oddWasUsed = false;

  return Object.values(letterToCountMap).reduce((maxLength, letterCount) => {
    if (!oddWasUsed && letterCount % 2 === 1) {
      oddWasUsed = true;
      // eslint-disable-next-line no-param-reassign
      maxLength += 1;
      // eslint-disable-next-line no-param-reassign
      letterCount -= 1;
    }

    return maxLength + Math.trunc(letterCount / 2) * 2;
  }, 0);
}

exports.longestPalindrome = longestPalindrome;
