const DIRECTION = {
  toRight: 1,
  toBottom: 2,
  toLeft: 3,
  toTop: 4,
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  const result = [];

  if (matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  let top = 0;
  let left = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let direction = DIRECTION.toRight;
  let i = top;
  let j = left;

  while (i >= top && i <= bottom && j >= left && j <= right) {
    result.push(matrix[i][j]);

    switch (direction) {
      case DIRECTION.toRight:
        if (j === right) {
          direction = DIRECTION.toBottom;
          top += 1;
          i += 1;
        } else {
          j += 1;
        }
        break;
      case DIRECTION.toBottom:
        if (i === bottom) {
          direction = DIRECTION.toLeft;
          right -= 1;
          j -= 1;
        } else {
          i += 1;
        }
        break;
      case DIRECTION.toLeft:
        if (j === left) {
          direction = DIRECTION.toTop;
          bottom -= 1;
          i -= 1;
        } else {
          j -= 1;
        }
        break;
      case DIRECTION.toTop:
        if (i === top) {
          direction = DIRECTION.toRight;
          left += 1;
          j += 1;
        } else {
          i -= 1;
        }
        break;
      // no default
    }
  }

  return result;
}

exports.spiralOrder = spiralOrder;
