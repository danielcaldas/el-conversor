import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';

import './assets/app.scss';

import Converter from './converter/Converter';

const app = document.getElementById('app');

console.log(`You are running on this commit of the application https://github.com/danielcaldas/el-conversor/commit/${__commitHash__}`);

ReactDOM.render(
    <Provider store={store}>
        <Converter/>
    </Provider>
, app);
