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
 * @TODO: Improve fn: remove for loop, maybe split into smaller functions
 * For a given digit maps its correspondent characters and appends
 * them to all given words. If no words are provided it simply returns
 * array of characters for given digit.
 * @param {Array.<string>} words array of words.
 * @param {number|string} digit digit to be mapped into letters and appended to each word in words.
 * @returns {<Array.<string>} news words resulting from the append operation.
 */
function expandWordsForDigit(words = [], digit) {
    if (!digit) {
        throw 'A digit must be provided for function expandWordsForDigit';
    }

    if (!words.length) {
        return PHONE_NUM_LETTER_MAPPING[digit]
    }

    let newWords = [];
    const letters = PHONE_NUM_LETTER_MAPPING[digit];
    const nLetters = letters.length;

    for (let i = 0; i < nLetters; i++) {
        const letter = letters[i];

        newWords = newWords.concat(appendLetterToWords(words, letter));
    }

    return newWords;
}

// @TODO: split this above 2 functions in file t9.helper.js (unit test this) and this one here
function convertNumberToWords(number) {
    const numberStr = `${number}`;
    const numbers = numberStr.split('');

    return numbers
        .reduce((acc, digit) => {
            acc = expandWordsForDigit(acc, digit);
            
            return acc;
        }, [])
        .sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
}

export { convertNumberToWords };
