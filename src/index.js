import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App';
// import Article from './components/Article';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Settings from './components/Settings';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
          <Route path="login" component={Login} />
          <Route path="register" component={Register} />
          <Route path="settings" component={Settings} />
          <Route path="@:username" component={Profile} />
      </Route>
    </Router>
  </Provider>
        ), document.getElementById('main'));
        
        
        // <Route path="article/:id" component={Article} />