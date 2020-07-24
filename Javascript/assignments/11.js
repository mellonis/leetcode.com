/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(heightList) {
  let maxAreaValue = 0;
  let i = 0;
  let j = heightList.length - 1;

  while (i < j) {
    const currentArea = (j - i) * Math.min.apply(null, [heightList[i], heightList[j]]);

    if (maxAreaValue < currentArea) {
      maxAreaValue = currentArea;
    }

    if (heightList[i] > heightList[j]) {
      j -= 1;
    } else if (heightList[i] < heightList[j]) {
      i += 1;
    } else {
      i += 1;
      j -= 1;
    }
  }

  return maxAreaValue;
}

module.exports = maxArea;
