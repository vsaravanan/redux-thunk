import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
 
const logger = createLogger();
const store = createStore(
    allReducers,
    composeWithDevTools(),
    applyMiddleware(thunk, promise, logger),
    

);
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);