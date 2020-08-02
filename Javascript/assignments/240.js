/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return false;
  }

  let row = 0;
  let col = matrix[row].length - 1;

  while (col >= 0 && row < matrix.length) {
    if (matrix[row][col] === target) {
      return true;
    }

    if (matrix[row][col] > target) {
      col -= 1;
    } else {
      row += 1;
    }
  }

  return false;
}

exports.searchMatrix = searchMatrix;
