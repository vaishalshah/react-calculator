import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Master from './Master/Master';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Master />, document.getElementById('root'));
registerServiceWorker();
