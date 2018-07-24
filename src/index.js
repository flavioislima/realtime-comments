import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import base, { providers, auth } from './base' //dependency injection

ReactDOM.render(<App base={base} auth={auth} providers={providers} />, document.getElementById('root'));
registerServiceWorker();
