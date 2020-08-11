const charBeforeACharCode = 'A'.charCodeAt(0) - 1;

/**
 * @param {string} azDigit
 */
function azDigitToNumber(azDigit) {
  return azDigit.charCodeAt(0) - charBeforeACharCode;
}

/**
 * @param {string} s
 * @return {number}
 */
function titleToNumber(s) {
  const { length } = s;
  const lastIndex = length - 1;
  let number = 0;

  for (let power = 0; power < length; power += 1) {
    const azDigit = s[lastIndex - power];

    number += 26 ** power * azDigitToNumber(azDigit);
  }

  return number;
}

exports.titleToNumber = titleToNumber;
