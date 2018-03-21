import { expandWordsForDigit } from './t9-converter.helper';

/**
 * Function that for a given digit produces all the possible
 * words from a T9 (predictive text input) perspective.
 * @param {number|string} number the input to convert to a list of words
 * @param {Object} options options to pass into conversion
 * @param {boolean} options.sortWords
 * @returns {Array.<string>} the generated array of words
 */
function convertNumberToWords(number, options = {}) {
    // edge case: considering that 0 produces no words this will eval
    // to false and return empty list
    if (!number) {
        return [];
    }

    const {
        sortWords = false
    } = options;
    const numberStr = `${number}`;
    const numbers = numberStr.split('');

    const words = numbers
        .reduce((acc, digit) => {
            acc = expandWordsForDigit(acc, digit);

            return acc;
        }, []);

    if (sortWords) {
        words.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }

    return words;
}

export {
    convertNumberToWords
};
