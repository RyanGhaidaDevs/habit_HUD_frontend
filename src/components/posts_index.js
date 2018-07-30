import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchMeditations, fetchBreathingExercises, fetchColdShowers} from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';




class PostsIndex extends Component {
  constructor() {
    super() 
    this.state = {
      date: new Date()
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
       <div key={post.created_at}>
       Word Count: {post.body.split(" ").length}
       </div> 

       </li>
     );
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
       <div key={meditation.created_at}>
       Mood Ratings - Before: {meditation.before} | After: {meditation.after}
       </div>

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
       <div key={breathingExercise.created_at}> 
       Breath retention times - Round 1: {breathingExercise.round1} sec | Round 2: {breathingExercise.round2} sec | Round 3: {breathingExercise.round3} sec
       </div> 
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
       <div key={coldShower.created_at}>
       Cold Shower Time - {coldShower.time} min
       </div>
       </li>
     );
   });
  }

  onChange = date => this.setState({ date })
 

  render() {

    return (
      <div>
        <br/>
         
        <div align="center">
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          <br/>
        </div>
        <h3> Journal Entries </h3>
        <ul className="list-group">
          {this.renderPosts()}
           <br/>
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