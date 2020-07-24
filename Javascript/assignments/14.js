/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  const firstString = strs[0];

  if (firstString.length === 0) {
    return '';
  }

  let i = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const char = firstString[i];

    if (!char) {
      break;
    }

    // eslint-disable-next-line no-loop-func
    if (!strs.every((str) => str[i] === char)) {
      break;
    }

    i += 1;
  }

  return strs[0].substring(0, i);
}

module.exports = longestCommonPrefix;
