import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { promiseMiddleWare } from './middleware';
import { applyMiddleware } from 'redux';


  const defaultState = {
    appName: 'conduit',
    articles: null
    };

  const reducer = function(state = defaultState, action) {
      return state;
    }

  const store = createStore(reducer, applyMiddleware(promiseMiddleWare)) 

ReactDOM.render((
  <Provider store={store}> 
    <App />
  </Provider>
), document.getElementById('root'));
