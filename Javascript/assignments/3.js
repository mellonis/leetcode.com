/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const l = s.length;
  let i = 0;
  let j = 0;
  let maxSubstrLength = 0;
  let substr = '';

  while (i < l && j < l) {
    const currentChar = s[j];
    const ix = substr.indexOf(currentChar);

    substr += currentChar;
    j += 1;

    if (ix < 0) {
      if (substr.length > maxSubstrLength) {
        maxSubstrLength = substr.length;
      }
    } else {
      i += ix;
      substr = substr.substring(ix + 1);
    }
  }

  return maxSubstrLength;
}

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
