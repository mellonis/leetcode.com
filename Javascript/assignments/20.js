const parenthesesPair = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];

  return [...s].every((char) => {
    if (Object.prototype.hasOwnProperty.call(parenthesesPair, char)) {
      stack.push(parenthesesPair[char]);
      return true;
    }

    return stack.pop() === char;
  }) && stack.length === 0;
}

exports.isValid = isValid;
