const romanDigitsToWeight = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  return [...s]
    .reduce((result, romanDigit, ix, digitList) => {
      const nextRomanDigitWeight = romanDigitsToWeight[digitList[ix + 1]];
      const weight = romanDigitsToWeight[romanDigit];

      if (nextRomanDigitWeight && nextRomanDigitWeight > weight) {
        return result - weight;
      }

      return result + weight;
    }, 0);
}

exports.romanToInt = romanToInt;
