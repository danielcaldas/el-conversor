import {
    createStore,
    applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'remote-redux-devtools';

import reducer from './reducers';

const ENV = window.ENV;

const middleware = ENV.NAME === 'production'
    ? applyMiddleware(promise())
    : applyMiddleware(promise(), createLogger());

const composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'store',
    host: 'localhost',
    port: 1024,
});

export default createStore(reducer, {}, composeEnhancers(middleware));