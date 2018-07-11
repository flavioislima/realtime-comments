import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import base from './containers/base' //dependency injection

ReactDOM.render(<App base={base} />, document.getElementById('root'));
registerServiceWorker();
