function indexOfMaxOnInterval(array, i, j) {
  let ixOfMax = i;

  for (let k = i + 1; k < j; k += 1) {
    if (array[k] > array[ixOfMax]) {
      ixOfMax = k;
    }
  }

  return ixOfMax;
}

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(heightList) {
  const { length } = heightList;
  const ixLast = length - 1;
  let sum = 0;

  if (length > 2) {
    let leftMaxIx = 0;
    let rightMaxIx = indexOfMaxOnInterval(heightList, 2, length);

    for (let i = 1; i < ixLast; i += 1) {
      const minMaxIx = heightList[leftMaxIx] < heightList[rightMaxIx] ? leftMaxIx : rightMaxIx;
      const waterAmount = heightList[minMaxIx] - heightList[i];

      if (waterAmount > 0) {
        sum += waterAmount;
      }

      if (heightList[i] > heightList[leftMaxIx]) {
        leftMaxIx = i;
      }

      if (i + 1 === rightMaxIx) {
        rightMaxIx = indexOfMaxOnInterval(heightList, i + 2, length);
      }
    }
  }

  return sum;
}

exports.trap = trap;
