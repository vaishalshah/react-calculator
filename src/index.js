import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MasterContainer from './MasterContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterContainer />, document.getElementById('root'));
registerServiceWorker();
