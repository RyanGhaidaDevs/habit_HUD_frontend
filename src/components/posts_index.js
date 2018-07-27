import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchMeditations, fetchBreathingExercises, fetchColdShowers} from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {LineChart} from 'react-easy-chart'

class PostsIndex extends Component {

  constructor(){
    super();
    this.state = {
       x: 2, y: 2

    }
    
  }

  componentDidMount(){
    this.props.fetchPosts()
    this.props.fetchMeditations()
    this.props.fetchBreathingExercises()
    this.props.fetchColdShowers()
  }

  renderPosts() {
    //since we are mapping over an obj; first arg is Obj and second is map fn().  
   return _.map(this.props.posts, post => {
     return (
       <li className="list-group-item" key={post.id}>
       <Link to={`/posts/${post.id}`}> 
       {post.created_at.split("T")[0]}
       </Link>
       </li>
     );
   });
  }

  graphPosts() {
    return _.map(this.props.posts, post => {
    return (
      <div>
        {post.body.length}
      </div> 
    )
  });
  } 

  renderMeditations() {
    //since we are mapping over an obj; first arg is Obj and second is map fn().  
   return _.map(this.props.meditations, meditation => {
     return (
       <li className="list-group-item" key={meditation.id}>
       <Link to={`/guidedMeditations/${meditation.id}`}> 
       {meditation.created_at.split("T")[0]}
       </Link>
       </li>
     );
   });
  }

  renderBreathingExercises() {
    //since we are mapping over an obj; first arg is Obj and second is map fn().  
   return _.map(this.props.breathingExercises, breathingExercise => {
     return (
       <li className="list-group-item" key={breathingExercise.id}>
       <Link to={`/breathingExercises/${breathingExercise.id}`}> 
       {breathingExercise.created_at.split("T")[0]}
       </Link>
       </li>
     );
   });
  }

  renderColdShowers() {
    //since we are mapping over an obj; first arg is Obj and second is map fn().  
   return _.map(this.props.coldshowers, coldShower => {
     return (
       <li className="list-group-item" key={coldShower.id}>
       <Link to={`/coldShowers/${coldShower.id}`}> 
       {coldShower.created_at.split("T")[0]}
       </Link>
       </li>
     );
   });
  }

  render() {
    return (
      <div>
       
        <h3> Journal Entries </h3>
        <ul className="list-group">
          {this.renderPosts()}
          {this.graphPosts()}
        </ul> 
        <h3> Meditation Logs </h3>
        <ul className="list-group">
          {this.renderMeditations()}
        </ul> 
        <h3> Breathing Logs</h3>
        <ul className="list-group">
          {this.renderBreathingExercises()}
        </ul> 
        <h3> Cold Immersion Logs</h3>
        <ul className="list-group">
          {this.renderColdShowers()}
        </ul> 
        <br/>
        <div className="text-xs-center"> 
          <Link className="btn btn-success" to="/home">
            Back to Habit HUB 
          </Link>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return { posts: state.posts, meditations: state.meditations, breathingExercises: state.breathingExercises, coldshowers: state.coldShowers};
}

// Shortcut to mapDispatchToProps; Component now has acces to fetchPosts ActionCreator. 
export default connect(mapStateToProps, { fetchPosts, fetchMeditations, fetchBreathingExercises, fetchColdShowers })(PostsIndex);