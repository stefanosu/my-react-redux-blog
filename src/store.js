import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';
import auth from './reducers/auth'
import common from './reducers/common'
import home from './reducers/home'
import settings from './reducers/settings';
import article from './reducers/article';
import profile from './reducers/profile';
import articleList from './reducers/articleList';


  const reducer = combineReducers({
    auth,   
    common,
    home,
    settings,
    article,
    profile,
    articleList
  })

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 

  const middleware = applyMiddleware(promiseMiddleware);

  const store = createStore(reducer, composeEnhancer(middleware));


export  default store 
