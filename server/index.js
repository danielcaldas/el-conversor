import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();

app.set('port', (process.env.PORT || 5005));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.get('/', (request, response) => {
    response.status(200).send('HEALTH CHECK OK');
});

app.get('/convert/:number', (request, response) => {
    response.status(200).send(`convert ${request.params.number}`);
});

app.listen(app.get('port'), function() {
    console.log(`node server is running on port with route http://localhost:${app.get('port')}`);
});