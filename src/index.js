import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import Home from './containers/home';
import GuidedMeditation from './components/guidedMeditation_new';
import GuidedMeditationShow from './components/guidedMeditation_show';
import BreathingExercise from './components/breathingExercise_new';
import BreathingExerciseShow from './components/breathingExercise_show';
import ColdShower from './components/coldShower_new';
import ColdShowerShow from './components/coldShower_show';
import SOS  from './components/SOS';
import Login from './components/login';
import goalStatement from './components/goalStatement';
import goalStatmentShow from './components/goalStatement_show';
// import fractalTree from './components/fractalTree';


//Added redux-promise to handle asych fetches; add as first argument. 
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div> 
      <Switch> 
        <Route path="/login" component={Login} /> 
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/home" component={Home} />
        <Route path="/breathingExercises/new" component={BreathingExercise} />
        <Route path="/breathingExercises/:id" component={BreathingExerciseShow} />
        <Route path="/guidedMeditations/new" component={GuidedMeditation} />
        <Route path="/guidedMeditations/:id" component={GuidedMeditationShow} />
        <Route path="/coldShowers/new" component={ColdShower} />
        <Route path="/coldShowers/:id" component={ColdShowerShow} />
        <Route path="/goals/:id" component={goalStatmentShow} /> 
        <Route path="/goals" component={goalStatement} /> 
        <Route path="/SOS" component={SOS} />
        {/* <Route path="/yourFractalTree" component={fractalTree} /> */}
        <Route path="/" component={PostsIndex} /> 
      </Switch>
    </div>
    </BrowserRouter> 
  </Provider>
  , document.querySelector('.container'));
