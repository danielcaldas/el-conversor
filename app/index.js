import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';

import './assets/app.scss';

import Converter from './converter/Converter';

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Converter/>
    </Provider>
, app);
