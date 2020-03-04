import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from './containers/Root';

const section = document.getElementById('root');
section ? ReactDOM.render(<Root />, section) : false;
