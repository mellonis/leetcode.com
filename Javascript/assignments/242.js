function qsort(array) {
  return array.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sChars = s.split('');
  const tChars = t.split('');

  qsort(sChars);
  qsort(tChars);

  return sChars.every((c, ix) => c === tChars[ix]);
}

exports.isAnagram = isAnagram;
