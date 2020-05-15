import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.sass'

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
