import { ACTIONS } from './converter.const.js';
import { ConverterClient } from '../common/clients/converter-client';

const converterClient = new ConverterClient(ENV.API, 10000);

/**
 *
 * @param {string} number
 * @param {Object.<string, boolean>} options map of options
 */
function convertNumberToWord(number, options) {
    const payload = converterClient.convert(number, options);
    const type = ACTIONS.CONVERT;

    return { type, payload };
}

/**
 *
 * @param {Object.<string, boolean>} currOptions map of options
 * @param {string} option option to toggle
 */
function toggleConverterOption(currOptions, option) {
    const newOptionValue = !currOptions[option];
    const payload = { ...currOptions, [option]: newOptionValue };
    const type = ACTIONS.TOGGLE_CONVERTER_OPTION;

    return { type, payload };
}

export {
    convertNumberToWord,
    toggleConverterOption
};
