import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import MeditationsReducer from './reducer_meditations';
import BreathingExercisesReducer from './reducer_breathingexercises';
import ColdShowerReducer from './reducer_coldshower';
import { reducer as formReducer }  from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  meditations: MeditationsReducer,
  breathingExercises: BreathingExercisesReducer,
  coldShowers: ColdShowerReducer,
  form: formReducer
});

export default rootReducer;
