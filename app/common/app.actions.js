import { ACTIONS } from './app.const.js';
import { ConverterClient } from './clients/converter-client';

const converterClient = new ConverterClient(ENV.API, 10000);

function convertNumberToWord(number, options) {
    const payload = converterClient.convert(number, options);
    const type = ACTIONS.CONVERT;

    return { type, payload };
}

export {
    convertNumberToWord
};
