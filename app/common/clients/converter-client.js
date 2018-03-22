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
     * @returns {Promise}
     */
    convert(number) {
        return this.transport.get(`/convert/${number}`)
            .then((response) => response && response.data && response.data.data)
            .catch((err) => {});
    }
}

export {
    ConverterClient
};