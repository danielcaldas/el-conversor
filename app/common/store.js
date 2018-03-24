import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const ENV = window.ENV;

const middleware = ENV.NAME === 'production'
    ? applyMiddleware(promise())
    : applyMiddleware(promise(), createLogger());

export default createStore(reducer, middleware);