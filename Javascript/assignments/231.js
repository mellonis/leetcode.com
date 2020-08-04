function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  // eslint-disable-next-line no-bitwise
  while (n & 1 ^ n) {
    // eslint-disable-next-line no-bitwise
    if (n & 1) {
      return false;
    }

    // eslint-disable-next-line no-bitwise, no-param-reassign
    n >>= 1;
  }

  return true;
}

exports.isPowerOfTwo = isPowerOfTwo;
