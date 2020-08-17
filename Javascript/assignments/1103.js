/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
// eslint-disable-next-line camelcase
function distributeCandies(candies, num_people) {
  const result = new Array(num_people).fill(0);

  let i = 1;

  while (candies > 0) {
    const ix = i - 1;
    // eslint-disable-next-line camelcase
    result[ix % num_people] += Math.min(candies, i);
    // eslint-disable-next-line no-param-reassign
    candies -= i;
    i += 1;
  }

  return result;
}

exports.distributeCandies = distributeCandies;
