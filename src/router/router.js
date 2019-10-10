import React from 'react';

import { HashRouter, Route, Redirect } from 'react-router-dom'

import App from '../App'
import Layout from '../components/Layout'

import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Counter from '../pages/Counter';
import UserInfo from '../pages/UserInfo';
import NotFound from '../pages/NotFound';


const Routes = () => (
    <HashRouter>
        <App>
            <Route path='/' render={() =>
                <Layout>
                    <Route path="/home" component={Home} />
                    <Route path="/page1" component={Page1} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/userinfo" component={UserInfo} />
                    <Redirect from="*" to="/home" />
                </Layout>
            } />
        </App>
    </HashRouter>
)

export default Routes;
