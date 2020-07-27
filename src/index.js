import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings';
import Profile from './components/Profile';
import Article from './components/Article'



ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}> 
      <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="login" component={Login} />
      <Route path="register" component={Register}/> 
      <Route path="settings" component={Settings}/> 
      <Route path="@:username" component={Profile}/> 
      <Route path="article/:id" component={Article}/>
      </Route>
      </Router>
      </Provider>
      ), document.getElementById('root'));
