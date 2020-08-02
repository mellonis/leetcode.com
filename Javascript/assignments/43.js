function add(accumulator, digits, accumulatorDigitIx) {
  let curry = 0;

  for (let i = 0, l = digits.length; i < l; i += 1) {
    let d1 = accumulator[accumulatorDigitIx + i];

    if (d1 === undefined) {
      d1 = 0;
      accumulator.push(d1);
    }

    let sum = curry + d1 + digits[i];

    if (sum >= 10) {
      sum -= 10;
      curry = 1;
    } else {
      curry = 0;
    }

    accumulator[accumulatorDigitIx + i] = sum;
  }

  if (curry) {
    add(accumulator, [curry], accumulatorDigitIx + digits.length);
  }

  return 0;
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }

  if (num1 === '1') {
    return num2;
  }

  if (num2 === '1') {
    return num1;
  }

  const accumulator = [0];
  let accumulatorDigitIx = 0;

  for (let i = 0, l1 = num1.length; i < l1; i += 1) {
    const n1 = Number(num1[l1 - i - 1]);

    for (let j = 0, l2 = num2.length; j < l2; j += 1) {
      const n2 = Number(num2[l2 - j - 1]);

      const product = n1 * n2;
      const productDigits = [product % 10, Math.trunc(product / 10)];

      add(accumulator, productDigits, accumulatorDigitIx + j + i);
    }
  }

  accumulatorDigitIx += 1;

  if (accumulator[accumulator.length - 1] === 0) {
    accumulator.pop();
  }

  return accumulator.reduce((result, digit) => digit + result, '');
}

exports.multiply = multiply;
