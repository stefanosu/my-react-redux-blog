import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'



ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}> 
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
