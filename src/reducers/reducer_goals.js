import {  FETCH_GOAL, FETCH_GOALS, DELETE_GOAL } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    
    case DELETE_GOAL:
    //if post id is present, remove it and return new state obj
      return _.omit(state, action.payload)

    case FETCH_GOAL:
    console.log(action.payload.data)
    // Since were using Axios; post = action.paylod.data
    //Dont want to discard all previously fetched posts so ...state
    //Add Key : Value pair and add to state; post.id: post. 
      return { ...state, [action.payload.data.id]: action.payload.data}

    case FETCH_GOALS:
    //Turn Array of posts into Obj with id as a key and value being the post obj. { 2: {id=2 body="body"} } 
     
    return _.mapKeys(action.payload.data, 'id'); 
    default: 
    return state;

  }

}