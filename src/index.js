import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import { applyMiddleware, createStore, compose } from 'redux';
import { promiseMiddleware } from './middleware';


  const defaultState = {
    appName: 'conduit',
    articles: null
    };

  const reducer = function(state = defaultState, action) {
    switch(action.type) {
      case 'HOME_PAGE_LOADED':
        return { ...state, articles: action.payload.articles }
      }
      return state
    }

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 

  const store = createStore(reducer, composeEnhancer(applyMiddleware(promiseMiddleware)));


ReactDOM.render((
  <Provider store={store}> 
    <App />
  </Provider>
), document.getElementById('root'));
