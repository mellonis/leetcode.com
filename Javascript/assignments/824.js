function isSpace(char) {
  return char === ' ';
}

function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) >= 0;
}

/**
 * @param {string} S
 * @return {string}
 */
function toGoatLatin(S) {
  const suffixChar = 'a';
  const zeroSuffix = 'ma';
  let nextSuffix = suffixChar;
  let result = '';
  let wordStartIx = 0;

  for (let i = 0, l = S.length; i <= l; i += 1) {
    const char = S[i];

    if (!char || isSpace(char)) {
      if (wordStartIx < i) {
        const firstLetter = S[wordStartIx];
        const prefix = isVowel(firstLetter)
          ? S.substring(wordStartIx, i)
          : S.substring(wordStartIx + 1, i) + firstLetter;

        result = `${result}${prefix}${zeroSuffix}${nextSuffix}`;
        nextSuffix += suffixChar;
      }

      wordStartIx = i + 1;

      if (char) {
        result += ' ';
      }
    }
  }

  return result;
}

exports.toGoatLatin = toGoatLatin;
