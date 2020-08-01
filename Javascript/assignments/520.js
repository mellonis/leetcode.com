function isUpperCaseChar(char) {
  return char.toUpperCase() === char;
}

const State = {
  START: 0,
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  TRUE: 4,
  FALSE: 5,
};

/*
  START ---U--> FIRST
  START ---L--> SECOND
  FIRST --U--> 3
  FIRST --EOF--> TRUE
  SECOND --U--> FALSE
  SECOND --L--> SECOND
  SECOND --EOF--> TRUE
  THIRD --L--> FALSE
  THIRD --U--> THIRD
  THIRD --EOF-->TRUE
*/

/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
  if (word.length === 0) {
    throw new Error('Illigal state: word is empty string');
  }

  let state = State.START;

  let i = 0;

  while (state !== State.TRUE && state !== State.FALSE) {
    if (i === word.length) {
      // { FIRST, SECOND, THIRD } --EOF--> TRUE
      state = State.TRUE;
      // eslint-disable-next-line no-continue
      continue;
    }

    const isUpperCase = isUpperCaseChar(word[i]);

    switch (state) {
      case State.START:
        state = isUpperCase ? State.FIRST : State.SECOND;
        break;
      case State.FIRST:
        state = isUpperCase ? State.THIRD : State.SECOND;
        break;
      case State.SECOND:
        state = isUpperCase ? State.FALSE : State.SECOND;
        break;
      case State.THIRD:
        state = isUpperCase ? State.THIRD : State.FALSE;
        break;
      default:
        throw new Error('Illigal state');
    }

    i += 1;
  }

  return state === State.TRUE;
}

exports.detectCapitalUse = detectCapitalUse;
