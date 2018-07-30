import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import MeditationsReducer from './reducer_meditations';
import BreathingExercisesReducer from './reducer_breathingexercises';
import ColdShowerReducer from './reducer_coldshower';
import GoalReducer from './reducer_goals';
import { reducer as formReducer }  from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  meditations: MeditationsReducer,
  breathingExercises: BreathingExercisesReducer,
  coldShowers: ColdShowerReducer,
  goals: GoalReducer,
  form: formReducer
});

export default rootReducer;
