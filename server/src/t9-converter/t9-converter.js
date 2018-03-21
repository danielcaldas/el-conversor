import { expandWordsForDigit } from './t9-converter.helper';

// @TODO js-doc
function convertNumberToWords(number, options = {}) {
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
