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
import BreathingExercise from './components/breathingExercise_new';
import ColdShower from './components/coldShower_new';


//Added redux-promise to handle asych fetches; add as first argument. 
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div> 
      <Switch> 
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/home" component={Home} />
        <Route path="/breathingExercise" component={BreathingExercise} />
        <Route path="/guidedMeditation" component={GuidedMeditation} />
        <Route path="/coldShower" component={ColdShower} />

        <Route path="/" component={PostsIndex} /> 
      </Switch>
    </div>
    </BrowserRouter> 
  </Provider>
  , document.querySelector('.container'));
