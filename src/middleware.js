import agent from './agent'

function isPromise(v) {
  return v && typeof v.then === 'function'
}


const localStorageMiddleware = store => next => action => {
  if(action.type === 'REGISTER' || action.type === 'LOGIN') {
    if(!action.error) {
      window.localStorage.setItem('jwt', action.payload.user.token) 
      agent.setToken(action.payload.user.token) 
    }
    else if(action.type === 'LOGOUT' ) {
      window.localStorage.setItem('jwt', '')
      agent.setToken(null)
    }
  }
  next(action);
};


export {
  localStorageMiddleware,
  promiseMiddleware
};