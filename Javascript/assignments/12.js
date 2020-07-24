const weights = [
  { weight: 1000, literal: 'M' },
  { weight: 900, literal: 'CM' },
  { weight: 500, literal: 'D' },
  { weight: 400, literal: 'CD' },
  { weight: 100, literal: 'C' },
  { weight: 90, literal: 'XC' },
  { weight: 50, literal: 'L' },
  { weight: 40, literal: 'XL' },
  { weight: 10, literal: 'X' },
  { weight: 9, literal: 'IX' },
  { weight: 5, literal: 'V' },
  { weight: 4, literal: 'IV' },
  { weight: 1, literal: 'I' },
];

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let result = '';
  let currentWeight = 0;

  while (num > 0) {
    while (num >= weights[currentWeight].weight) {
      result += weights[currentWeight].literal;
      // eslint-disable-next-line no-param-reassign
      num -= weights[currentWeight].weight;
    }

    currentWeight += 1;
  }

  return result;
}

module.exports = intToRoman;
