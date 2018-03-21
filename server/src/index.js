import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';

import { convertNumberToWords } from './t9-converter/t9-converter';

const app = express();

app.set('port', (process.env.PORT || 5005));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.get('/', (request, response) => {
    response.status(200).send('HEALTH CHECK OK');
});

/**
 * > curl localhost:5005/convert/23
 * > {"data":["ae","be","ce","ad","bd","cd","af","bf","cf"]}
 */
app.get('/convert/:number', (request, response) => {
    try {
        const number = request.params.number;
        // @TODO: sortWords could be exposed to the clients as req parameter
        const words = convertNumberToWords(number, { sortWords: true });

        response.status(200).send({ data: words });
    } catch (err) {
        response.status(400).send({ data: 'Malformed request. Please check your payload.' });
    }
});

if (!module.parent) {
    app.listen(app.get('port'), function() {
        /*eslint no-console: 0*/
        console.log(`node server is running on port with route http://localhost:${app.get('port')}`);
    });
}

export { app };