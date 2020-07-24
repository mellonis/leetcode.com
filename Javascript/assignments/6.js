/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  const rows = [...new Array(numRows)].map(() => '');

  const phaseLength = numRows + (numRows > 2 ? numRows - 2 : 0);

  [...s]
    .forEach((char, ix) => {
      const phaseIx = ix % phaseLength;
      const rowIx = phaseIx < numRows ? phaseIx : phaseLength - phaseIx;

      rows[rowIx] += char;
    });

  return rows.reduce((result, row) => result + row);
}

module.exports = convert;
