import axios from 'axios';

/**
 * Abstracts requests to convert API.
 */
class ConverterClient {
    /**
     * @param {Axios} transport pre-configured transport layer.
     */
    constructor(baseURL, timeout) {
        this.transport = axios.create({ baseURL, timeout });
    }

    /**
     * Calls convert endpoint with given number.
     * @param {string} number
     * @param {Object} options
     * @param {boolean} options.sort set to true to sort words alphabetically
     * @param {boolean} options.dict set to true to get words that appear in dictionary only
     * @returns {Promise}
     */
    convert(number, options = {}) {
        return this.transport.get(`/convert/${number}`, { params: options })
            .then((response) => response && response.data && response.data.words)
            .catch((err) => {});
    }
}

export {
    ConverterClient
};