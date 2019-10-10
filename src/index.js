import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter } from 'react-router-dom'
import Layout from './components/Layout';
import App from './App'
import Router from './router/router'
import 'antd/dist/antd.css';


ReactDom.render(
    <HashRouter>
        <Provider store={store}>
            <Router />
        </Provider>
    </HashRouter>,
    document.getElementById('app')
);

