function isDigit(char) {
  return char >= '0' && char <= '9';
}

function isAlpha(char) {
  return char >= 'a' && char <= 'z';
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const str = s.toLowerCase();

  if (str === '' || str.length === 1) {
    return true;
  }

  let leftCharIx = 0;
  let rightCharIx = str.length - 1;

  while (leftCharIx < rightCharIx) {
    const leftChar = str[leftCharIx];
    const rightChar = str[rightCharIx];

    if (!isDigit(leftChar) && !isAlpha(leftChar)) {
      leftCharIx += 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!isDigit(rightChar) && !isAlpha(rightChar)) {
      rightCharIx -= 1;
      // eslint-disable-next-line no-continue
      continue;
    }

    if (leftChar !== rightChar) {
      return false;
    }

    leftCharIx += 1;
    rightCharIx -= 1;
  }

  return true;
}

exports.isPalindrome = isPalindrome;
