import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';
import auth from './reducers/auth'
import common from './reducers/common'
import home from './reducers/home'


  const reducer = combineReducers({
    auth,   
    common,
    home
  })

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose; 

  const middleware = applyMiddleware(promiseMiddleware);

  const store = createStore(reducer, composeEnhancer(middleware));


export  default store 
