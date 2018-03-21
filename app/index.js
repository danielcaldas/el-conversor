import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';

const app = document.getElementById('app');
const ENV = window.ENV;

ReactDOM.render(
    <Provider store={store}>
        <div>
            App
        </div>
    </Provider>
, app);
