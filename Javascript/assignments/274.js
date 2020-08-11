/**
 * @param {number[]} citations
 * @return {number}
 */
function hIndex(citations) {
  citations.sort((a, b) => a - b);

  const appropriateIndex = citations.findIndex((citationCount, ix, list) => {
    const restCount = list.length - ix;

    return restCount <= citationCount;
  });

  return appropriateIndex >= 0 ? citations.length - appropriateIndex : 0;
}

exports.hIndex = hIndex;
