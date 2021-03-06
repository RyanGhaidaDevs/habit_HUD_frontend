import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import { fetchPosts, fetchMeditations, fetchBreathingExercises, fetchColdShowers, fetchGoals} from '../actions/index';
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
    this.props.fetchGoals()
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
       Word Count: {post.body.split(" ").length-1}
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

  renderGoals() {
    //since we are mapping over an obj; first arg is Obj and second is map fn().  
   return _.map(this.props.goals, goal => {
     console.log("goal", goal)
     return (
       <div key={goal.id}>
        
       <Card >
          <h2> YOUR GOAL CARD </h2>
          <h3> {goal.body} | by: {goal.date}</h3>
          <a data-flickr-embed="true"  href="https://www.flickr.com/photos/158630612@N07/29937877368/in/dateposted-public/" title="oie_2192627ELZq1CK5"><img src="https://farm2.staticflickr.com/1780/29937877368_6645841cea_z.jpg" width="640" height="332" alt="oie_2192627ELZq1CK5"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
          <CardBody>
            <CardTitle>  </CardTitle> <br/>
            <CardSubtitle> <h4>Top Reasons I may not succeed: {goal.pitfalls} </h4></CardSubtitle> <br/>
            <CardText> <h4>How I plan to overcome my pitfalls: {goal.tactics} </h4></CardText> <br/>
          </CardBody>
          <Link  className="btn btn-warning" to={`/goals/${goal.id}`}> 
            Edit Goal
          </Link> 
        </Card>
        
       </div>
     );
   });
  }

  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div  className="index">
        <div align="center">
        {this.renderGoals()}
        </div>
        <br/>
        <div align="center">
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          <br/>
          
        </div>
        <div className="text-xs-center"> 
          <Link className="btn btn-success" to="/home">
            Back to Habit HUB 
          </Link>
        </div>
        <h3><i><b> Journal Entries</b></i> </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul> 
        <h3><i><b> Meditation Logs</b></i> </h3>
        <ul className="list-group">
          {this.renderMeditations()}
          
        </ul> 
        <h3><i><b> Breathing Logs</b></i></h3>
        <ul className="list-group">
          {this.renderBreathingExercises()}
        </ul> 
        <h3><i><b> Cold Immersion Logs</b></i></h3>
        <ul className="list-group">
          {this.renderColdShowers()}
        </ul> 
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return { goals: state.goals, posts: state.posts, meditations: state.meditations, breathingExercises: state.breathingExercises, coldshowers: state.coldShowers};
}

// Shortcut to mapDispatchToProps; Component now has acces to fetchPosts ActionCreator. 
export default connect(mapStateToProps, { fetchPosts, fetchMeditations, fetchBreathingExercises, fetchColdShowers, fetchGoals })(PostsIndex);