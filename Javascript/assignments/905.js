/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortArrayByParity(A) {
  let i = 0;
  let j = A.length - 1;

  while (i < j) {
    if (A[i] % 2 > A[j] % 2) {
      const tmp = A[i];

      // eslint-disable-next-line no-param-reassign
      A[i] = A[j];
      // eslint-disable-next-line no-param-reassign
      A[j] = tmp;
    }

    if (A[i] % 2 === 0) {
      i += 1;
    }

    if (A[j] % 2 === 1) {
      j -= 1;
    }
  }

  return A;
}

exports.sortArrayByParity = sortArrayByParity;
