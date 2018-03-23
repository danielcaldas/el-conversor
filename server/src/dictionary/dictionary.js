import * as WORDS_DICTIONARY from './words_dictionary.json';

/**
 * Get only words that appear in the dictionary.
 * @param {Array.<string>} words array of words from here we want to
 * filter out only words that appear in the dictionary.
 * @returns {Array.<string>} words that appear in the dictionary within the
 * "words" array.
 */
function extractRealWordsOnly(words) {
    return words.filter(word => !!WORDS_DICTIONARY[word]);
}

export {
    extractRealWordsOnly
};
