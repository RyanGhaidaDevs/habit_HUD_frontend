import axios from 'axios'; 
export const FETCH_POSTS  = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const CREATE_GUIDEDMEDITATION = 'create_guidedmeditation';
export const FETCH_MEDITATIONS  = 'fetch_meditations';
export const FETCH_MEDITATION  = 'fetch_meditation';
export const DELETE_MEDITATION  = 'delete_meditation';
export const CREATE_BREATHINGEXERCISE = 'create_breathingexercise';
export const FETCH_BREATHINGEXERCISES  = 'fetch_breathingexercises';
export const FETCH_BREATHINGEXERCISE  = 'fetch_breathingexercise';
export const DELETE_BREATHINGEXERCISE = 'delete_breathingexercise';
export const CREATE_COLDSHOWER = 'create_coldshower';
export const FETCH_COLDSHOWERS  = 'fetch_coldshowers';
export const FETCH_COLDSHOWER  = 'fetch_coldshower';
export const DELETE_COLDSHOWER = 'delete_coldshower';
export const CREATE_LOGIN = 'create_login';
export const CREATE_GOAL = 'create_goal';
export const FETCH_GOAL = 'fetch_goal';
export const FETCH_GOALS = 'fetch_goals';
export const DELETE_GOAL = 'delete_goal';


const ROOT_URL = 'http://localhost:4000';


// Goal Statement \\ 
export function createGoal(values, callback) {
  const request = axios.post(`${ROOT_URL}/goals`, values).then(()=> callback());

  return {
    type: CREATE_GOAL,
    payload: request
  };

} 

export function fetchGoal(id) {

  const request = axios.get(`${ROOT_URL}/goals/${id}`)
  console.log(request)

  return {
    type: FETCH_GOAL,
    payload: request 
  }; 
}

export function fetchGoals() {
  const request = axios.get(`${ROOT_URL}/goals`);

  return{
    type: FETCH_GOALS,
    // redux-promise will deal with this promise in our payload. By the time it hits our reduces the list of posts will be available. 
    payload: request
  };
}
export function deleteGoal(id, callback) {
  axios.delete(`${ROOT_URL}/goals/${id}`).then(()=> callback());

  return {
    type: DELETE_GOAL,
    payload: id
  };
}

// Goal Statement \\ 

//------------------------------------------------------------\\

// Login \\ 
export function createLogin(values, callback) {
  const request = axios.post(`${ROOT_URL}/logins`, values).then(()=> callback());

  return {
    type: CREATE_LOGIN,
    payload: request
  };

} 

// Login \\ 

//------------------------------------------------------------\\


// Cold Shower \\ 

export function createColdShower(values, callback) {
  const request = axios.post(`${ROOT_URL}/coldshowers`, values).then(()=> callback());

  return {
    type: CREATE_COLDSHOWER,
    payload: request
  };

} 

export function fetchColdShowers() {
  const request = axios.get(`${ROOT_URL}/coldshowers`);

  return{
    type: FETCH_COLDSHOWERS,
    // redux-promise will deal with this promise in our payload. By the time it hits our reduces the list of posts will be available. 
    payload: request
  };
}

export function fetchColdShower(id) {

  const request = axios.get(`${ROOT_URL}/coldshowers/${id}`)
  console.log(request)

  return {
    type: FETCH_COLDSHOWER,
    payload: request 
  }; 
}

export function deleteColdShower(id, callback) {
  axios.delete(`${ROOT_URL}/coldshowers/${id}`).then(()=> callback());

  return {
    type: DELETE_COLDSHOWER,
    payload: id
  };
}
// Cold Shower \\ 

//------------------------------------------------------------\\

// Breathing Exercise \\ 
export function fetchBreathingExercises() {
  const request = axios.get(`${ROOT_URL}/breathingexercises`);

  return{
    type: FETCH_BREATHINGEXERCISES,
    // redux-promise will deal with this promise in our payload. By the time it hits our reduces the list of posts will be available. 
    payload: request
  };
}

export function fetchBreathingExercise(id) {
  const request = axios.get(`${ROOT_URL}/breathingexercises/${id}`)

  return {
    type: FETCH_BREATHINGEXERCISE,
    payload: request 
  }; 
}

export function deleteBreathingExercise(id, callback) {
   axios.delete(`${ROOT_URL}/breathingexercises/${id}`).then(()=> callback());

  return {
    type: DELETE_BREATHINGEXERCISE,
    payload: id
  };
}


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

export function fetchMeditations() {
  const request = axios.get(`${ROOT_URL}/guidedmeditations`);

  return{
    type: FETCH_MEDITATIONS,
    // redux-promise will deal with this promise in our payload. By the time it hits our reduces the list of posts will be available. 
    payload: request
  };
}

export function fetchMeditation(id) {
  const request = axios.get(`${ROOT_URL}/guidedmeditations/${id}`)
  console.log(request)
  return {
    type: FETCH_MEDITATION,
    payload: request 
  }; 
}

export function deleteMeditation(id, callback) {
  axios.delete(`${ROOT_URL}/guidedmeditations/${id}`).then(()=> callback());

  return {
    type: DELETE_MEDITATION,
    payload: id
  };
}

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
   axios.delete(`${ROOT_URL}/journals/${id}`).then(()=> callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
// Journals \\ 