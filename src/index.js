import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';

const section = document.getElementById('root');
section ? ReactDOM.render(<App />, section) : false;
