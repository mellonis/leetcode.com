/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
function numsSameConsecDiff(N, K) {
  let candidateList = [...new Array(10)].map((_, ix) => ix);

  if (N > 1) {
    candidateList.shift();

    [...new Array(N - 1)].forEach(() => {
      const newCandidates = [];

      candidateList.forEach((candidate) => {
        const lastDigit = candidate % 10;
        const firstNewCandidate = lastDigit - K;

        if (firstNewCandidate > -1 && firstNewCandidate < 10) {
          newCandidates.push(candidate * 10 + firstNewCandidate);
        }

        const secondNewCandidate = lastDigit + K;

        if (
          secondNewCandidate !== firstNewCandidate
          && secondNewCandidate > -1
          && secondNewCandidate < 10
        ) {
          newCandidates.push(candidate * 10 + secondNewCandidate);
        }
      });

      candidateList = newCandidates;
    });
  }

  return candidateList;
}

exports.numsSameConsecDiff = numsSameConsecDiff;
