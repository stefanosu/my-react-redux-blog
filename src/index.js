import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


  const store = createStore(reducer);

  const defaultState = {
    checked: false,
    appName: 'conduit',
    articles: null
    };

  const reducer = function(state = defaultState, action) {
      return state;
    };

  const store = createStore(reducer) 

ReactDOM.render((
  <Provider store={store}> 
    <App />
  </Provider>
), document.getElementById('root'));
