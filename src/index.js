import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import store from './store/store';
import {Provider} from "react-redux";

ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>    
        </HashRouter>, document.getElementById('root'));
