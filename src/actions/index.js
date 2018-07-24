import axios from 'axios'; 
export const FETCH_POSTS  = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const CREATE_GUIDEDMEDITATION = 'create_guidedmeditation';
export const CREATE_BREATHINGEXERCISE = 'create_breathingexercise';
export const CREATE_COLDSHOWER = 'create_coldshower';

const ROOT_URL = 'http://localhost:4000';

// Cold Shower \\ 

export function createColdShower(values, callback) {
  const request = axios.post(`${ROOT_URL}/coldshowers`, values).then(()=> callback());

  return {
    type: CREATE_COLDSHOWER,
    payload: request
  };

} 
// Cold Shower \\ 

//------------------------------------------------------------\\

// Breathing Exercise \\ 

export function createBreathingExercise(values, callback) {
  const request = axios.post(`${ROOT_URL}/breathingexercises`, values).then(()=> callback());

  return {
    type: CREATE_BREATHINGEXERCISE,
    payload: request
  };

} 
// Breathing Exercise \\ 

//------------------------------------------------------------\\

// Guided Meditations \\
export function createGuidedMeditation(values, callback) {
  const request = axios.post(`${ROOT_URL}/guidedmeditations`, values).then(()=> callback());

  return {
    type: CREATE_GUIDEDMEDITATION,
    payload: request
  };

} 
// Guided Meditations \\ 

//------------------------------------------------------------\\ 

// Journals \\ 
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
  const request = axios.post(`${ROOT_URL}/journals`, values).then(()=> callback());

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
// Journals \\ 