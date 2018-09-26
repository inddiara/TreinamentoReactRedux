import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/index';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = createStore(reducers, applyMiddleware(promise));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
