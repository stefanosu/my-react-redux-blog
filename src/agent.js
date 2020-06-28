import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import request from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.body;

const requests = {

  del: url => 
  superagent.del(`${API_ROOT}${url}`).use().then(responseBody), 

  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),  

  post: (url, body) => 
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody), 

  put: (url, body) => 
  superagent.put(`${API_ROOT}${url}`, body).use().then(responseBody)};

const Articles = {
  all: page =>
    requests.get(`/articles?limit=10`), 
  del: slug => 
    request.del(`/articles/${slug}`),
  get: slug => 
    requests.get(`/articles/${slug}`) 
};  

const Auth = {
  current: () => 
    requests.get('/user'),
  login: (email, password) => {
    requests.post('/users/login', { user: { email, password } })
  }, 
  register: (username, email, password) => {
    requests.post('/users', { user: { username, email, password} })
  }, 
  save: user => {
    requests.put('/user', { user })
  }
}

const Comments = {
  create: (slug, comment) =>  
    request.post(`/articles/${slug}/comments`, {comment}),
  delete: (slug, commentID) => 
    request.del(`/articles/${slug}/comments/${commentID}`),
  forArticle: slug => 
    requests.get(`articles/${slug}/comments`)
  
}

export default {
  Articles,
  Auth,
  Comments
  // setToken: _token => { token = _token; }
};

