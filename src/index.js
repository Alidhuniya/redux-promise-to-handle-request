import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

