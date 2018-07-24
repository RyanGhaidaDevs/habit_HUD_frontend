import axios from 'axios'; 
export const FETCH_POSTS  = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://localhost:4000';


export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/journals`);

  return{
    type: FETCH_POSTS,
    // redux-promise will deal with this promise in our payload. By the time it hits our reduces the list of posts will be available. 
    payload: request
  };
}

export function createPost(values, callback) {
  // second arg is the data we're sending with our request; values. 
  const request = axios.post(`${ROOT_URL}/journals`, values).then(()=> callback())

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/journals/${id}`)

  return {
    type: FETCH_POST,
    payload: request 
  }; 
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/journals/${id}`).then(()=> callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}