import { expandWordsForDigit } from './t9-converter.helper';

const MAX_LENGTH_ALLOWED = 10;

/**
 * Function that for a given digit produces all the possible
 * words from a T9 (predictive text input) perspective.
 * @param {number|string} number the input to convert to a list of words
 * @returns {Array.<string>} the generated array of words
 */
function convertNumberToWords(number) {
    // edge case: considering that 0 produces no words this will eval
    // to false and return empty list
    if (!number) {
        return [];
    }

    // allow max length of 10 characters
    if (number.length > 10) {
        number = number.slice(0, MAX_LENGTH_ALLOWED);
    }

    const numberStr = `${number}`;
    const numbers = numberStr.split('');

    return numbers
        .reduce((acc, digit) => {
            acc = expandWordsForDigit(acc, digit);

            return acc;
        }, []);
}

export {
    convertNumberToWords
};
