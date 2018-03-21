import { PHONE_NUM_LETTER_MAPPING } from './t9.const';

/**
 * For a given list of words this function generates new
 * words by appending a given letter to each word in words.
 * @param {Array.<string>} words a list of words.
 * @param {string} letter a letter to append to given words.
 * @returns {Array.<string>} the array of words resultant of the append operation.
 */
function appendLetterToWords(words, letter) {
    return words.reduce((acc, word) => {
        const newWord = `${word}${letter}`;

        acc.push(newWord);

        return acc;
    }, []);
}

/**
 * For a given digit maps its correspondent characters and appends
 * them to all given words. If no words are provided it simply returns
 * array of characters for given digit.
 * @param {Array.<string>} words array of words.
 * @param {number|string} digit digit to be mapped into letters and appended to each word in words.
 * @returns {Array.<string>} news words resulting from the append operation.
 */
function expandWordsForDigit(words = [], digit) {
    if (!digit) {
        throw 'A digit must be provided for function expandWordsForDigit';
    }

    if (!words.length) {
        return PHONE_NUM_LETTER_MAPPING[digit]
    }

    const letters = PHONE_NUM_LETTER_MAPPING[digit];

    return letters.reduce((acc, letter) => acc.concat(appendLetterToWords(words, letter)), []);
}

export { expandWordsForDigit };