import React, { Component } from 'react';
import { Route } from 'react-router';
import { Home } from './components/Home/Home';
import CreatePost from './components/CreatePost/CreatePost';
import { Layout } from './components/Layout/Layout';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/createpost' component={CreatePost} />
            </Layout>
        );
    }
}

