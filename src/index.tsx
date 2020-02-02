import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import 'core-js/es/promise';
import 'core-js/stable';

import App from './components/App';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const client = new ApolloClient({
    uri: 'http://localhost:5000/',
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);