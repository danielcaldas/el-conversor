import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';

import { convertNumberToWords } from './t9-converter/t9-converter';
import { extractRealWordsOnly } from './dictionary/dictionary';

const app = express();

app.set('port', (process.env.PORT || 5005));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.get('/api/check', (request, response) => {
    response.status(200).send('HEALTH CHECK OK');
});

/**
 * @example
 * > curl localhost:5005/api/convert/233?dict=true
 * > {"data":["add","bed","bee"]}
 *
 * @param {number} number the never to convert
 * @param {Object} query
 * @param {boolean} dict set to true if only words that appear on the dictionary
 * @param {boolean} sort set to true if we want list of words to be sorted alphabetically
 * are requested
 */
app.get('/api/convert/:number', (request, response) => {
    try {
        const number = request.params.number;
        const realWordsOnly = !!(request && request.query && request.query.dict === 'true');
        const sortWords = !!(request && request.query && request.query.sort === 'true');

        let words = convertNumberToWords(number);

        if (realWordsOnly) {
            words = extractRealWordsOnly(words);
        }

        if (sortWords) {
            words.sort((a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;

                return 0;
            });
        }

        response.status(200).send({ data: words });
    } catch (err) {
        response.status(400).send({ data: 'Malformed request. Please check your payload.' });
    }
});

if (!module.parent) {
    // serve static assets in production
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(`${process.cwd()}/app/dist`));
        app.get('*', function(request, response) {
            response.sendFile(`${process.cwd()}/app/dist/index.html`);
        });
    }

    app.listen(app.get('port'), function() {
        /*eslint no-console: 0*/
        console.log(`node server is running on port with route http://localhost:${app.get('port')}`);
    });
}

export { app };