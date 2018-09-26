import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import Home from './containers/home';

import store from './store/index';
import Container from './containers/container';
const Main = (
    <Provider {...store}>
        <div>
            <Home/>
            <Container/>
            <div>666</div>
        </div>
    </Provider>
)
ReactDOM.render(Main, document.getElementById('root'));