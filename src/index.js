import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';


  const defaultState = {
    appName: 'conduit',
    articles: null
    };

  const reducer = function(state = defaultState, action) {
      return state;
    }

  const store = createStore(reducer, applyMiddleware(promiseMiddleware));


ReactDOM.render((
  <Provider store={store}> 
    <App />
  </Provider>
), document.getElementById('root'));
